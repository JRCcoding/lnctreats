import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Container, Card, Image } from 'react-bootstrap'
import { listProducts } from '../Actions/productActions'
import Loader from './Loader'
import { Fade } from 'react-reveal'
import { LinkContainer } from 'react-router-bootstrap'

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
        <Card>
          <div className='products_box'>
            {loading ? (
              <Loader />
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <Container className='product_list'>
                <Row xs={1} sm={2} md={2} lg={3}>
                  {products &&
                    products.map((product) => (
                      <div key={product}>
                        <Card className='product_card'>
                          <LinkContainer to={`/product/${product._id}`}>
                            <Image
                              position='top'
                              alt='Lauryn Claxton LNC Treats'
                              src={product.img}
                            />
                          </LinkContainer>

                          <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className='text-AccentText'>
                              {product.description}
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
      </Container>
    </div>
  )
}

export default Products
