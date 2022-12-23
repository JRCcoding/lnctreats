import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Loader from '../Components/Loader'
// import { listProductDetails } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/Product.css'
const Product = () => {
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
      </>
    </div>
  )
}

export default Product
