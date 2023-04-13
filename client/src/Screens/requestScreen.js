import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { deleteRequest, listRequests } from '../Actions/requestActions'
import { withRouter } from 'react-router-dom'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'

const RequestScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  const [request, setRequest] = useState()
  const [requests, setRequests] = useState()
  const requestId = match.params.id

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    const fetchRequest = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get(`/api/requests/${requestId}`, config)

      setRequest(data)
    }
    fetchRequest()
  }, [])

  const handleDelete = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/requests/${requestId}/delete`, config)
    history.push('/admin/orderlist')
  }
  const backButton = () => {
    history.push('/admin/orderlist')
  }
  return (
    <div className='background_pattern'>
      <Meta title='LNC Request' />
      <Fade up>
        <Container>
          <Card>
            <h1>Request {requestId.substring(19, 24)}</h1>

            <Row>
              <Col md={12}>
                <Card>
                  {request && (
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <h2>Request Summary</h2>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Name</Col>
                          <Col>{request.name}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Number</Col>
                          <Col>{request.number}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Email</Col>
                          <Col>{request.email}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Date</Col>
                          <Col>{request.date}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Size/Shape</Col>
                          <Col>{request.size}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Quantity</Col>
                          <Col>{request.qty}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Edible Image</Col>
                          <Col>{request.edibleImage ? 'Yes' : 'No'}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Information</Col>
                          <Col>{request.additional}</Col>
                        </Row>
                      </ListGroup.Item>

                      {userInfo && userInfo.isAdmin && (
                        <ListGroup.Item>
                          <Button
                            type='button'
                            variant='danger'
                            className='btn btn-block'
                            onClick={handleDelete}
                          >
                            Delete
                          </Button>
                        </ListGroup.Item>
                      )}
                      <ListGroup.Item>
                        <Button
                          type='button'
                          className='btn btn-block'
                          onClick={backButton}
                        >
                          Back
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  )}
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </Fade>
    </div>
  )
}

export default withRouter(RequestScreen)
