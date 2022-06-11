import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
  const getBasketTotal=({basket})=>
  basket?.reducer((amount,item)=>item.price + amount,0);
  const [{basket}, dispatch]=useStateValue();
  return (
    <div className='subtotal'>
      {/*price*/}
      <CurrencyFormat 
      renderText={({value}) =>(
       <>
       <p>
          Subtotal({basket.length}items):<strong>${value}</strong>
        </p>
        </>
      ) }
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      
      />
      <button>proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
