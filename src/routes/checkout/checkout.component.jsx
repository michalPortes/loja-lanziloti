import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import './checkout.styles.scss'

const Checkout = () => {

  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)
  return (
    <div>
      {
        cartItems.map(cartItem => {
          const { id, name, quantity } = cartItem
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemToCart(cartItem)}>decrements</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increments</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Checkout