import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Container, Card, Image } from 'react-bootstrap'
import { MDBBadge } from 'mdb-react-ui-kit'
import { listProducts } from '../Actions/productActions'
import Loader from '../Components/Loader'
import { Fade } from 'react-reveal'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Product.css'
import Message from '../Components/Message'
//Real G's move in silence like lasagna
import Meta from '../Components/Meta'

const ProductsScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  window.scrollTo(0, 0)

  return (
    <div className='background_pattern'>
      <Meta title='LNC Products' />
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
                      {products.map((product) => (
                        <div key={product}>
                          {product.category === 'contact' && (
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
                                <Card.Header>
                                  <LinkContainer to={`/product/${product._id}`}>
                                    <Card.Title className='clickable inline'>
                                      <h3 className='product_title font-Pacifico scale-125 my-auto'>
                                        {product.title}
                                      </h3>
                                    </Card.Title>
                                  </LinkContainer>
                                </Card.Header>

                                <Card.Text className='text-AccentText'>
                                  {product.description.substring(0, 50)}...
                                </Card.Text>
                                <Card.Text className='text-AccentText card_price'>
                                  <strong>
                                    Price: $
                                    {product.customPrice > 0 ? (
                                      <>{product.customPrice}</>
                                    ) : (
                                      <>{product.price}</>
                                    )}
                                    {product.category === 'custom' ? '+' : ''}
                                  </strong>
                                  {/* <LinkContainer to='/contact'>
                                    <MDBBadge
                                      color='info'
                                      pill
                                      className='clickable inline badge'
                                    >
                                      {product.category === 'custom'
                                        ? 'Order/Contact'
                                        : 'Contact Me!'}
                                    </MDBBadge>
                                  </LinkContainer> */}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          )}{' '}
                          {product.title === 'Cakes' && (
                            <Card className='product_card md:mb-5 mt-2'>
                              <LinkContainer to={`/cakeorder`}>
                                <Image
                                  position='top'
                                  alt='Lauryn Claxton LNC Treats'
                                  src={product.img}
                                  className='clickable'
                                />
                              </LinkContainer>
                              <Card.Body>
                                <Card.Header>
                                  <LinkContainer to={`/cakeorder`}>
                                    <Card.Title className='clickable inline'>
                                      <h3 className='product_title font-Pacifico scale-125 my-auto'>
                                        {product.title}
                                      </h3>
                                    </Card.Title>
                                  </LinkContainer>
                                </Card.Header>

                                <Card.Text className='text-AccentText'>
                                  {product.description.substring(0, 50)}...
                                </Card.Text>
                                <Card.Text className='text-AccentText card_price'>
                                  <strong>
                                    Price: $
                                    {product.title === 'Custom Cakes'
                                      ? '25'
                                      : product.price}
                                    {product.category === 'custom' ? '+' : ''}
                                  </strong>
                                  {/* <LinkContainer to='/contact'>
                                    <MDBBadge
                                      color='info'
                                      pill
                                      className='clickable inline badge'
                                    >
                                      {product.category === 'custom'
                                        ? 'Order/Contact'
                                        : 'Contact Me!'}
                                    </MDBBadge>
                                  </LinkContainer> */}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          )}
                          {product.category === 'standard' && (
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
                                <Card.Header>
                                  <LinkContainer to={`/product/${product._id}`}>
                                    <Card.Title className='clickable inline'>
                                      <h3 className='product_title font-Pacifico scale-125 my-auto'>
                                        {product.title}
                                      </h3>
                                    </Card.Title>
                                  </LinkContainer>
                                </Card.Header>
                                <Card.Text className='text-AccentText'>
                                  {product.description.substring(0, 50)}...
                                </Card.Text>
                                <Card.Text className='text-AccentText card_price'>
                                  <strong>Price: ${product.price}</strong>
                                  {/* <LinkContainer to={`/product/${product._id}`}>
                                    <MDBBadge
                                      color='info'
                                      pill
                                      className='clickable inline badge'
                                    >
                                      Order Now!
                                    </MDBBadge>
                                  </LinkContainer> */}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          )}
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
    </div>
  )
}

export default ProductsScreen
