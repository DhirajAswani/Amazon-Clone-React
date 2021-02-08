import React from 'react'
import ReactStars from "react-rating-stars-component";
import {useStateValue} from './StateProvider'



function CheckoutProduct({id, image, price, rating, title}) {

    //const {id, image, price, rating, title} = props;
    console.log(id);
    
    const [{basket}, dispatch] = useStateValue();

    
    const removeFromBasket = () => {

        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price"><small>$</small><strong>{price}</strong></p>
                <div className="checkoutProduct_rating">
                    <ReactStars count={rating} color={"#ffd700"}/>
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
