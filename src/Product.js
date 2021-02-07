import React from 'react'
import "./Product.css"
import ReactStars from "react-rating-stars-component";
import {useStateValue} from "./StateProvider";

function Product({id,title, image, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <ReactStars count={rating} color={"#ffd700"}/>
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product





// import React from "react";
// import "./Product.css";
// import { useStateValue } from "./StateProvider";

// function Product({ id, title, image, price, rating }) {
//   const [{ basket }, dispatch] = useStateValue();

//   const addToBasket = () => {
//     // dispatch the item into the data layer
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };

//   return (
//     <div className="product">
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>🌟</p>
//             ))}
//         </div>
//       </div>

//       <img src={image} alt="" />

//       <button onClick={addToBasket}>Add to Basket</button>
//     </div>
//   );
// }

// export default Product;

