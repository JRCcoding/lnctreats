import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'
import { Row, Container } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { listProducts } from '../Actions/productActions'
import Loader from './Loader'

const Products = () => {
  // const [products, setProducts] = useState()
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
    // const fetchProducts = asyncHandler(async () => {
    //   const { data } = await axios.get('/api/products')
    //   setProducts(data)
    // })
    // fetchProducts()
  }, [dispatch])
  return (
    <div>
      <Container>
        <div className='products_box'>
          <h2 className='title font-LaBelle underline' id='products'>
            Products
          </h2>
          {loading ? (
            <Loader />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <Container className='product_list'>
              <Row xs={1} sm={2} md={2} lg={3}>
                {products &&
                  products.map((product) => (
                    <AnimationOnScroll
                      animateIn='animate__fadeInUp'
                      animateOnce='true'
                    >
                      <div key={product}>
                        <MDBCard className='product_card'>
                          <MDBCardImage
                            cascade
                            position='top'
                            alt='Lauryn Claxton LNC Treats'
                            src={product.img}
                          />
                          <MDBCardBody className='bg-lightMint'>
                            <MDBCardTitle>{product.title}</MDBCardTitle>
                            <MDBCardText>{product.description}</MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                    </AnimationOnScroll>
                  ))}
              </Row>
            </Container>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Products
