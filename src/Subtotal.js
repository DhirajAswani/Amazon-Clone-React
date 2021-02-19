import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom'

function Subtotal() {

    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

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
                     Subtotal ({basket.length} items): <strong>{value}</strong>
                 </p>
                 <small className="subtotal_gift">
                     <input type="checkbox" />
                      This order contains a gift
                 </small>
                 </>
             )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"$"}
             />
            <div>
                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
