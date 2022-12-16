import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit'
import { Row, Container } from 'react-bootstrap'
import { listProducts } from '../Actions/productActions'
import Loader from './Loader'
import '../Styles/Products.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import loadingimg from '../Images/loading_transparent.png'

const Products = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <Container>
        <div className='products_box'>
          {/* <h2 className='title font-LaBelle underline' id='products'>
            Products
          </h2> */}

          <Container className='product_list'>
            <Row xs={1} sm={2} md={2} lg={3}>
              {products &&
                products.map((product) => (
                  <div key={product}>
                    <MDBCard className='product_card'>
                      {loading ? (
                        <Loader />
                      ) : error ? (
                        <h3>{error}</h3>
                      ) : (
                        <LazyLoadImage
                          position='top'
                          alt='Lauryn Claxton LNC Treats'
                          src={product.img}
                          PlaceholderSrc={loadingimg}
                        />
                      )}

                      <MDBCardBody className='bg-lightMint'>
                        <MDBCardTitle>{product.title}</MDBCardTitle>
                        <MDBCardText>{product.description}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                ))}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Products
