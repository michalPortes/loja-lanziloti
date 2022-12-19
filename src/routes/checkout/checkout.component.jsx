import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext)


  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <HeaderBlock as='span'>Product</HeaderBlock>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlock as='span'>Description</HeaderBlock>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlock as='span'>Quantity</HeaderBlock>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlock as='span'>Price</HeaderBlock>
        </HeaderBlock>
        <HeaderBlock>
          <HeaderBlock as='span'>Remove</HeaderBlock>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <Total as='span'>Total: R${cartTotal} </Total>
    </CheckoutContainer >
  )
}

export default Checkout