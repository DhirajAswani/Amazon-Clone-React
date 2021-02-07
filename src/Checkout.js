import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import ReactStars from "react-rating-stars-component";



function Checkout() {

    const [{basket}, dispatch] = useStateValue();
    var products = [];
    for(var i = 0; i < basket.length; i++)
    {
       console.log(basket[i].id);
       console.log(basket[i].price);
       console.log(basket[i].image);
       console.log(basket[i].rating);
       console.log(basket[i].title);  
       products.push(basket[i])                   
    }

    // products = products.map(item => (
    //     <CheckoutProduct
    //         key={item.id.toString()}
    //         id= {item.id}
    //         title = {item.title}
    //         image = {item.image}
    //         price = {item.price}
    //         rating = {item.rating}
            
    //     />
    // ))

    return (
        <div className="checkout">
            <div className="checkout_left">
                <div className="checkout_ad">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Product" />
                </div>
                <div className="checkout_title">
                    <h2>Your Shopping Basket</h2>
                    {/* <p>{basket[0].id}</p>
                    <p>{basket[0].image}</p>
                    <p>{basket[0].title}</p>
                    <p>{basket[0].rating}</p>
                    <p>{basket[0].price}</p> */}


                    {/* Checkout Products */}

                    {
                        basket.map(item => (
                            <div className="checkoutProduct">
                                <img className="checkoutProduct_image" src={item.image}/>

                                <div className="checkoutProduct_info">
                                    <p className="checkoutProduct_title">{item.title}</p>
                                    <p className="checkoutProduct_price"><small>$</small><strong>{item.price}</strong></p>
                                    <div className="checkoutProduct_rating">
                                        <ReactStars count={item.rating} color={"#ffd700"}/>
                                    </div>
                                    <button>Remove from Basket</button>
                                </div>
                    
                            </div>
                        )) 

                        
                    }

                    {/* {
                        basket.map(item => (
                        <CheckoutProduct
                                key= {item.id}
                                id= {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                
                            />
                        ))
                    } */}
                    
                </div>
            </div>
            <div className="checkout_right">

                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
