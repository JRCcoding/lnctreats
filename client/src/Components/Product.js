import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Container } from 'react-bootstrap'
import { MDBCard } from 'mdb-react-ui-kit'
import Loader from '../Components/Loader'
import { listProducts } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/Product.css'
const Product = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error } = productList
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setProduct(data)
    }
    fetchProduct()

    dispatch(listProducts())
  }, [dispatch, id])
  // })
  return (
    <div>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <MDBCard className='prod_info_box'>
            <Row>
              <Col md={6}>
                <Image
                  src={product.img}
                  alt={product.title}
                  fluid
                  className='prod_img'
                />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.title}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Description: </strong> {product.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>More Info: </strong> {product.additional}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </MDBCard>
        )}
      </Container>
    </div>
  )
}

export default Product
