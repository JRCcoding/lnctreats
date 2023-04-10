import React, { useState, useRef } from 'react'

import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  ListGroup,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addRequestInfo, createRequest } from '../Actions/requestActions'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import kamrynDino from '../Images/kamryndinocake.jpg'

const CakeOrderScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [size, setSize] = useState('Choose one...')
  const [qty, setQty] = useState(1)
  const [date, setDate] = useState('')
  const [additional, setAdditional] = useState('')
  const [name, setName] = useState(userInfo ? userInfo.name : '')
  const [email, setEmail] = useState(userInfo ? userInfo.email : '')
  const [number, setNumber] = useState(userInfo ? userInfo.number : '')
  // const [inspiration, setInspiration] = useState()
  const request = useSelector((state) => state.request)
  const { requestInfo } = request
  const dispatch = useDispatch()

  // const form = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    // localStorage.removeItem('requestInfo')
    dispatch(
      createRequest({
        size,
        qty,
        date,
        additional,
        name,
        email,
        number,
        // inspiration
      })
    )
    // dispatch(createRequest(requestInfo))

    // emailjs
    //   .sendForm(
    //     'service_mj24iav',
    //     'template_sul9k9h',
    //     '#form',
    //     'Ts0xnPtn_iKfBC4r0',
    //     size,
    //     qty,
    //     date,
    //     additional,
    //     name,
    //     email,
    //     number
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )

    history.push(
      `/cakesubmitted/${size}?qty=${qty}&date=${date}&additional=${additional}&name=${name}&email=${email}`
    )
  }

  return (
    <div className='background_pattern'>
      <Container>
        <Form onSubmit={submitHandler} id='form' enctype='multipart/form-data'>
          <div style={{ display: 'none' }}>
            <input name='size' value={size} />
            <input name='qty' value={qty} />
            <input name='date' value={date} />
            <input name='additional' value={additional} />
            <input name='name' value={name} />
            <input name='number' value={number} />
            <input name='email' value={email} />
            {/* <input name='inspiration' value={inspiration} /> */}
          </div>
          <Form.Group style={{ width: '100%' }}>
            <Card>
              <Card.Body className='mx-auto'>
                <Card.Header>
                  <h1 className='text-center'>Cake Size:</h1>
                </Card.Header>
                <ButtonGroup vertical>
                  <ListGroup variant='flush'>
                    <Row lg={3} md={3} sm={2} xs={1}>
                      <Form.Control
                        as='select'
                        onChange={(e) => setSize(e.target.value)}
                        fluid
                        style={{ width: '250px' }}
                      >
                        <option value='choose'>
                          <>
                            <img
                              src='https://raw.githubusercontent.com/JRCcoding/lnctreats/production/client/src/Images/webp/alien-cake.webp'
                              alt='test'
                              style={{
                                height: '200px',
                                width: '200px',
                              }}
                              className='mx-auto'
                            />
                            Choose one...
                          </>
                        </option>
                        <option value='12'>12 Inch Cake</option>
                        <option value='10'>10 Inch Cake</option>
                      </Form.Control>
                      {/* <Col>
                        <ListGroup.Item>
                          <img
                            src='https://raw.githubusercontent.com/JRCcoding/lnctreats/production/client/src/Images/webp/alien-cake.webp'
                            alt='test'
                            style={{
                              height: '200px',
                              width: '200px',
                            }}
                            className='mx-auto'
                          />
                          <Button
                            onClick={(e) => setSize(12)}
                            className='w-100'
                          >
                            12 inch
                            <br />
                            Starting @ $100
                          </Button>
                        </ListGroup.Item>
                      </Col>

                      <Col>
                        <ListGroup.Item>
                          <img
                            src='https://raw.githubusercontent.com/JRCcoding/lnctreats/production/client/src/Images/webp/alien-cake.webp'
                            alt='test'
                            style={{ height: '200px', width: '200px' }}
                            className='mx-auto'
                          />
                          <Button
                            onClick={(e) => setSize('10')}
                            className='w-100'
                          >
                            10 inch
                          </Button>
                        </ListGroup.Item>
                      </Col>

                      <Col>
                        <ListGroup.Item>
                          <img
                            src={kamrynDino}
                            alt='test'
                            style={{ height: '200px', width: '200px' }}
                            className='mx-auto'
                          />
                          <Button
                            onClick={(e) => setSize('9')}
                            className='w-100'
                          >
                            9 inch
                          </Button>
                        </ListGroup.Item>
                      </Col>

                      <Col>
                        <ListGroup.Item>
                          <img
                            src='https://raw.githubusercontent.com/JRCcoding/lnctreats/production/client/src/Images/webp/alien-cake.webp'
                            alt='test'
                            style={{ height: '200px', width: '200px' }}
                            className='mx-auto'
                          />
                          <Button
                            onClick={(e) => setSize('8')}
                            className='w-100'
                          >
                            8 inch
                          </Button>
                        </ListGroup.Item>
                      </Col>

                      <Col>
                        <ListGroup.Item>
                          <img
                            src='https://raw.githubusercontent.com/JRCcoding/lnctreats/production/client/src/Images/webp/alien-cake.webp'
                            alt='6" Alien Cake'
                            style={{ height: '200px', width: '200px' }}
                            className='mx-auto'
                          />
                          <Button
                            onClick={(e) => setSize('6')}
                            className='w-100'
                          >
                            6 inch
                          </Button>
                        </ListGroup.Item>
                      </Col>
                      <Col>
                        <ListGroup.Item>
                          <img
                            src='https://raw.githubusercontent.com/JRCcoding/lnctreats/production/client/src/Images/webp/alien-cake.webp'
                            alt='6" Alien Cake'
                            style={{ height: '200px', width: '200px' }}
                            className='mx-auto'
                          />
                          <Button
                            onClick={(e) => setSize('Tiered')}
                            className='w-100'
                          >
                            Tiered
                          </Button>
                        </ListGroup.Item>
                      </Col> */}
                    </Row>
                  </ListGroup>
                </ButtonGroup>
              </Card.Body>
              <hr />
              <Row md={2} sm={2} lg={2}>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h1 className='text-center'>Quantity:</h1>
                    </Card.Header>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array.from(Array(10)).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Card.Body>
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Header>
                      <h1 className='text-center'>Date:</h1>
                    </Card.Header>
                    <Form.Control
                      type='date'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      // required
                    />
                  </Card.Body>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h1 className='text-center'>Name:</h1>
                    </Card.Header>
                    <Form.Control
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      // required
                    />
                  </Card.Body>
                </Col>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h1 className='text-center'>Email:</h1>
                    </Card.Header>
                    <Form.Control
                      type='text'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // required
                    />
                  </Card.Body>
                </Col>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h1 className='text-center'>Number:</h1>
                    </Card.Header>
                    <Form.Control
                      type='text'
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      // required
                    />
                  </Card.Body>
                </Col>
              </Row>
              <Row>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h1 className='text-center'>Information:</h1>
                      <p className='text-center'>
                        Themes, customization, cake toppers, anything that
                        defines the cake you want!
                      </p>
                    </Card.Header>
                    <Form.Control
                      as='textarea'
                      height='150px'
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                      required
                    />
                  </Card.Body>
                </Col>

                {/* <Col>
                  <Card.Body>
                    <Form.Group controlId='formFile'>
                      <Card.Header>
                        <h1 className='text-center'>Inspiration:</h1>
                      </Card.Header>
                      <Form.Control
                        value={inspiration}
                        type='file'
                        multiple
                        onChange={(e) => setInspiration(e.target.value)}
                      />
                    </Form.Group>
                  </Card.Body>
                </Col> */}
              </Row>
              <button size='submit' className='addcart_button'>
                Submit
              </button>
            </Card>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(CakeOrderScreen)
