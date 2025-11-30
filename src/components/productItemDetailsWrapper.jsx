import React from 'react'
import { useParams } from 'react-router-dom'
import ProductItemDetails from './ProductItemDetails'

const ProductItemDetailsWrapper = props => {
  const params = useParams()
  
  console.log("params",params)
  return <ProductItemDetails {...props} match={{ params }} />
}

export default ProductItemDetailsWrapper
