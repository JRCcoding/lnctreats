import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Container, Card, Image } from 'react-bootstrap'
import { listProducts } from '../Actions/productActions'
import Loader from './Loader'
import { Fade } from 'react-reveal'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Product.css'
import Message from './Message'

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
        <Fade up>
          <Card>
            <div className='products_box'>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <Container className='product_list'>
                  <Row xs={1} sm={1} md={2} lg={4}>
                    {products &&
                      products.map((product) => (
                        <div key={product}>
                          <Card className='product_card md:mb-5 mt-2'>
                            <LinkContainer to={`/product/${product._id}`}>
                              <Image
                                position='top'
                                alt='Lauryn Claxton LNC Treats'
                                src={product.img}
                                className='clickable'
                              />
                            </LinkContainer>

                            <Card.Body>
                              <LinkContainer to={`/product/${product._id}`}>
                                <Card.Title className='clickable'>
                                  {product.title}
                                </Card.Title>
                              </LinkContainer>
                              <Card.Text className='text-AccentText'>
                                {product.description.substring(0, 50)}...
                              </Card.Text>
                              <Card.Text className='text-AccentText card_price'>
                                <strong>Price: ${product.price}</strong>
                              </Card.Text>
                            </Card.Body>
                          </Card>{' '}
                        </div>
                      ))}
                  </Row>
                </Container>
              )}
            </div>
          </Card>
        </Fade>
      </Container>
    </div>
  )
}

export default Products
