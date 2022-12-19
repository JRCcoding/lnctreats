import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'

import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { listProducts } from '../Actions/productActions'

import '../Styles/Carousel.css'
// import ProductCarousel from './ProductCarousel'

const Carousel2 = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <p>error</p>
  ) : (
    <MDBCarousel pause='hover' className='bg-dark'>
      {products &&
        products.map((product) => (
          <MDBCarouselItem key={product}>
            {/* <Link to={`/product/${product._id}`}> */}
            <Image src={product.img} alt={product.title} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>{product.title}</h2>
            </Carousel.Caption>
            {/* </Link> */}
          </MDBCarouselItem>
        ))}
    </MDBCarousel>
  )
}

export default Carousel2
