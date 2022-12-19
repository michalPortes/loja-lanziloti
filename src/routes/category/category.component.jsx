import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CatagoriesContext } from '../../context/catagories.context';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer } from './category.styles';


const Category = () => {

  const { category } = useParams()
  const { categoriesMap } = useContext(CatagoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }
    , [category, categoriesMap])


  return (
    <CategoryContainer>
      {
        products &&
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </CategoryContainer>
  )
}


export default Category