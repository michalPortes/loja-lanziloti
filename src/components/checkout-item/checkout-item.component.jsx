import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { CheckOutContainer, ImageContainer, Image, NamePrice, Quality, Arrow, ButtonRemove } from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {

  const { name, imageUrl, price, quantity } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)

  return (
    <CheckOutContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <NamePrice as='span'>{name}</NamePrice>
      <Quality as='span'>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        {quantity}
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quality>
      <NamePrice as='span'>{price}</NamePrice>
      <ButtonRemove onClick={clearItemHandler} >&#10005;</ButtonRemove>
    </CheckOutContainer>
  )
}

export default CheckoutItem