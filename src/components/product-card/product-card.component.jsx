import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { Title, ProductCardContainer, ProductImage, ButtonContainer, Footer, FooterName, Price } from './product-card.styles';

import { BUTTON_TYPES_CLASSES } from '../button/button.component'

const ProductCard = ({ title, product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCard = () => addItemToCart(product)
  return (
    <ProductCardContainer>
      <Title>{title}</Title>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <Footer>
        <FooterName as='span'>{name}</FooterName>
        <Price as='span'>R$: {price}</Price>
      </Footer>
      <ButtonContainer buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCard}>Add to card</ButtonContainer>
    </ProductCardContainer>
  )
}


export default ProductCard