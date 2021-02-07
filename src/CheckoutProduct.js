import React from 'react'
import ReactStars from "react-rating-stars-component";


function CheckoutProduct(id, image, price, rating, title) {

    console.log(id);
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price"><small>$</small><strong>{price}</strong></p>
                <div className="checkoutProduct_rating">
                    <ReactStars count={rating} color={"#ffd700"}/>
                </div>
                <button>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
