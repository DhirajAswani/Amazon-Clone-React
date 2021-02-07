import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div className="checkout_ad">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Product" />
                </div>
                <div className="checkout_title">
                    <h2>Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
                
                {/*Basket Item*/}
                {/*Basket Item*/}
                {/*Basket Item*/}
                {/*Basket Item*/}

            </div>
        </div>
    )
}

export default Checkout
