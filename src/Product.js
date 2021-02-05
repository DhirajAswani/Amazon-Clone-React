import React from 'react'
import "./Product.css"
import ReactStars from "react-rating-stars-component";

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Lean Startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <ReactStars count={5} color={"#ffd700"}/>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
