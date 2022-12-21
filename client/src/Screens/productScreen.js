import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Loader from '../Components/Loader'
import { listProductDetails } from '../Actions/productActions'

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
    }
  }, [dispatch, match, product._id])
  //   useEffect(() => {
  //     dispatch(listProductDetails())
  //   }, [dispatch])
  return (
    <div key={product}>
      <LinkContainer className='btn btn-light my-3' to='/products'>
        <h2>Go Back</h2>Go Back
      </LinkContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <h2>Product Page for</h2>
      )}
    </div>
  )
}

export default ProductScreen
