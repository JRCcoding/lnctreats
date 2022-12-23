import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Loader from '../Components/Loader'
// import { listProductDetails } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Product = ({ match }) => {
  // const dispatch = useDispatch()

  // const productDetails = useSelector((state) => state.productDetails)
  // const { loading, error, product } = productDetails

  // useEffect(() => {
  //   // if (successProductReview) {
  //   //   setRating(0)
  //   //   setComment('')
  //   // }
  //   if (!product.id || product._id !== match.params.id) {
  //     dispatch(listProductDetails(match.params.id))
  //   }
  // }, [dispatch, match])

  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchBlogpost = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setProduct(data)
    }
    fetchBlogpost()
  })

  return (
    <div>
      <>
        <Row>
          <Col md={6}>
            <Image src={product.img} alt={product.title} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item> */}
              {/* <ListGroup.Item>Price: ${product.price}</ListGroup.Item> */}
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            {/* <Card> */}
            {/* <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item> */}

            {/* <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item> */}

            {/* {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )} */}

            {/* <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* </Card> */}
          </Col>
        </Row>
      </>
    </div>
  )
}

export default Product
