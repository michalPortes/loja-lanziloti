import { useContext, Fragment } from 'react'

import { CatagoriesContext } from '../../context/catagories.context'

import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoiresPreview = () => {

  const { categoriesMap } = useContext(CatagoriesContext)
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) => {

          const products = categoriesMap[title];

          return <CategoryPreview key={title} title={title} products={products} />
        })

      }
    </Fragment>
  )
}


export default CategoiresPreview