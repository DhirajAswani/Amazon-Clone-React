import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {

    const [state, dispatch] = useStateValue();

    // logic to calculate for layman
    // var price = 0;
    // for(var i = 0; i< state.basket.length; i++)
    // {
    //     price += state.basket[i].price
    // }

    return (
        <div className="subtotal">
            <CurrencyFormat 
             renderText = {(value) => (
                 <>
                 <p>
                     Subtotal ({state.basket.length} items): <strong>{value}</strong>
                 </p>
                 <small className="subtotal_gift">
                     <input type="checkbox" />
                      This order contains a gift
                 </small>
                 </>
             )}
             decimalScale={2}
             value={getBasketTotal(state.basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"$"}
             />
            <div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
