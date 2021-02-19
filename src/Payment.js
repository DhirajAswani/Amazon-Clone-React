import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

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
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Payment
