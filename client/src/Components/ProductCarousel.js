import React, { useEffect } from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { listProducts } from '../Actions/productActions'
import '../Styles/Carousel.css'
import { LinkContainer } from 'react-router-bootstrap'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Carousel controls={false} className='product_carousel'>
          {products &&
            products.reverse().map((product) => (
              <Carousel.Item key={product}>
                <LinkContainer to={`/product/${product._id}`}>
                  <Image
                    src={product.img}
                    alt={product.title}
                    fluid
                    className='product_carousel_image'
                  />
                </LinkContainer>

                <Carousel.Caption>
                  <h2 className='product_carousel_caption font-Pacifico'>
                    {product.title}
                  </h2>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </Container>
  )
}

export default ProductCarousel
