import { CartItemContainer, Image, ItemDetails, Name, Price } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name as='span'>{name}</Name>
        <Price as='span'>{quantity} x ${price}</Price>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem