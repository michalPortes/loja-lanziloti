import ProductCard from '../product-card/product-card.component'

import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {


  return (
    <CategoryPreviewContainer>
      <h2>
        <Title as='span'>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((products) =>
              <ProductCard key={products.id} product={products} />
            )
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview