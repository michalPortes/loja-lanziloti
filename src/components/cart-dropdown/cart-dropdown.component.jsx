import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/cart.context'

import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHangler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>

        {
          cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>You car is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={goToCheckoutHangler}>
        Go to Checkout
      </Button>
    </CartDropdownContainer>
  )
}


export default CartDropdown 