import React, {useState, useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {Link,useHistory} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from './firebase'




function Payment() {

    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    var cnt = 0;

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // generate a special client secret which allows us to charge a customer
        //New client secret will be generated every time the value in basket changes

        const getClientSecret = async() => {
            const response = await axios({
                method: 'post', // stripe expects total in subunits EG. for 1 rupee it is 100 paisa so multiply it with 100
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    console.log("The client secret is ", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault(); // will stop from refreshing
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            // dispatch({
            //     type: 'EMPTY_BASKET'
            // })

            history.replace('/orders')
        })

    }

    const handleChange = event => {

        //listen to change in card element
        //Display any errors if there are any while user types in card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");


    }


    return (
        <div className='payment'>
            <div className='payment_container'>
                <h2>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h2>
                <br/>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {/* All Products in cart will come here */}
                        {basket.map(item => (
                        
                        <CheckoutProduct
                                key= {cnt++}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/* Stripe Magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>
                            <CurrencyFormat 
                                renderText = {(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Payment
