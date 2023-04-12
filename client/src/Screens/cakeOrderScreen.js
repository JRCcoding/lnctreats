import React, { useState, useRef, useEffect } from 'react'

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
  const [flavor, setFlavor] = useState('Choose one...')
  const [edibleImage, setEdibleImage] = useState(false)
  const [qty, setQty] = useState(1)
  const [date, setDate] = useState('')
  const [additional, setAdditional] = useState('')
  const [name, setName] = useState(userInfo ? userInfo.name : '')
  const [email, setEmail] = useState(userInfo ? userInfo.email : '')
  const [number, setNumber] = useState(userInfo ? userInfo.number : '')
  // const [inspiration, setInspiration] = useState()

  const dispatch = useDispatch()

  // const form = useRef()

  const emailjsSend = () => {
    emailjs
      .sendForm(
        'service_mj24iav',
        'template_sul9k9h',
        '#form',
        'Ts0xnPtn_iKfBC4r0',
        size,
        flavor,
        qty,
        date,
        additional,
        name,
        email,
        number
      )
      .then(
        (result) => {
          console.log('"New Request" emailjs sent!', result.text)
        },
        (error) => {
          console.log('Failed to send emailjs...', error.text)
        }
      )
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createRequest({
        size,
        flavor,
        qty,
        date,
        additional,
        name,
        email,
        number,
        edibleImage,
        // inspiration
      })
    )

    emailjsSend()

    history.push(
      `/cakesubmitted/${size}?qty=${qty}&date=${date}&additional=${additional}&name=${name}&email=${email}&flavor=${flavor}&edibleImage=${edibleImage}`
    )
  }

  const handleCheckBox = () => {
    setEdibleImage(!edibleImage)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='background_pattern'>
      <Container>
        <Form onSubmit={submitHandler} id='form' enctype='multipart/form-data'>
          <div style={{ display: 'none' }}>
            <input name='size' value={size} />
            <input name='flavor' value={flavor} />
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
              <Card.Body className='lg:mx-60'>
                <Card.Header>
                  <h3 className='text-center'>Cake Size: (starting price)</h3>
                </Card.Header>
                <ListGroup variant='flush'>
                  <Row lg={3} md={3} sm={2} xs={1}>
                    <Form.Control
                      as='select'
                      onChange={(e) => setSize(e.target.value)}
                      fluid
                      style={{ width: '100%' }}
                    >
                      <option value='choose'>Choose one...</option>

                      <option value='Circle/Square' disabled>
                        ------Circle/Square------
                      </option>

                      <option value='9 / Circle'>9 Inch Cake ($50)</option>
                      <option value='8 / Circle'>8 Inch Cake ($40)</option>
                      <option value='6 / Circle'>6 Inch Cake ($30)</option>
                      <option value='4 / Circle'>4 Inch Cake ($20)</option>

                      <option value='Heart' disabled>
                        ------Heart------
                      </option>

                      <option value='9 / Heart'>9 Inch Cake ($55)</option>
                      <option value='6 / Heart'>6 Inch Cake ($35)</option>

                      <option value='Sheet' disabled>
                        ------Sheet------
                      </option>

                      <option value='1/2 / Sheet'>1/2 Sheet Cake ($75)</option>
                      <option value='1/4 / Sheet'>1/4 Sheet Cake ($45)</option>
                    </Form.Control>
                  </Row>
                </ListGroup>
              </Card.Body>
              <Card.Body className='lg:mx-60'>
                <Card.Header>
                  <h3 className='text-center'>Flavor:</h3>
                </Card.Header>

                <ListGroup variant='flush'>
                  <Row lg={3} md={3} sm={2} xs={1}>
                    <Form.Control
                      as='select'
                      onChange={(e) => setFlavor(e.target.value)}
                      fluid
                      style={{ width: '100%' }}
                    >
                      <option value='choose'>Choose one...</option>
                      <option value='Chocolate'>Chocolate</option>
                      <option value='Vanilla'>Vanilla</option>
                      <option value='Ferrero Rocher'>
                        Ferrero Rocher &trade;{' '}
                      </option>
                      <option value='Snickerdoodle'>Snickerdoodle</option>
                      <option value='Coconut'>Coconut</option>
                      <option value='Strawberry'>Strawberry</option>
                      <option value='Carrot'>Carrot</option>
                      <option value='Funfetti'>Funfetti</option>
                      <option value='Pineapple'>Pineapple</option>
                      <option value='Lemon'>Lemon</option>
                      <option value='Red Velvet'>Red Velvet</option>
                      <option value='other'>Other (describe below!)</option>
                    </Form.Control>{' '}
                  </Row>
                </ListGroup>
              </Card.Body>
              <hr />
              <Row>
                <Col md={4}>
                  <Card.Body>
                    <Card.Header>
                      <h3 className='text-center'>
                        Edible Image:{edibleImage}
                      </h3>
                    </Card.Header>
                    <input
                      type='checkbox'
                      value={edibleImage}
                      onChange={handleCheckBox}
                    ></input>
                    &nbsp;&nbsp;Additional $10, please describe below!
                  </Card.Body>
                </Col>
                <Col md={4}>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h3 className='text-center'>Quantity:</h3>
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
                <Col md={4}>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h3 className='text-center'>Date:</h3>
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
                      <h3 className='text-center'>Name:</h3>
                    </Card.Header>
                    <Form.Control
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Card.Body>
                </Col>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h3 className='text-center'>Email:</h3>
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
                      <h3 className='text-center'>Number:</h3>
                    </Card.Header>
                    <Form.Control
                      type='text'
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </Card.Body>
                </Col>
              </Row>
              <Row>
                <Col>
                  {' '}
                  <Card.Body>
                    <Card.Header>
                      <h3 className='text-center'>Information:</h3>
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
                        <h3 className='text-center'>Inspiration:</h3>
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
