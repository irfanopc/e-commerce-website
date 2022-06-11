import React from 'react'
import { useStateValue } from './StateProvider'
function ProductCart({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
  return (
    <div className='productcart'>
      <img className='productcart__image' src={image} alt="" />
      <div className='productcart__info'>
          <p>{title}</p>
          <p>{price}</p>

      </div>
<div>
    {
        Array(rating)
        .fill()
        .map((_) =>(
            <p>*</p>
        ) )
    }
</div>
<button onClick={removeItem} >remove from the cart</button>
    </div>
  )
}

export default ProductCart
