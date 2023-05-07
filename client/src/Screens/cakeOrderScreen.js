import React, { useState, useRef, useEffect } from 'react'

import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createRequest } from '../Actions/requestActions'
import { withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import tiered from '../Images/cakes/16tiered.jpg'
import thirty from '../Images/cakes/30.jpg'
import cactus from '../Images/cakes/cactus.jpg'
import cinco from '../Images/cakes/cinco.jpg'
import ferrero from '../Images/cakes/ferrero.jpg'
import floral from '../Images/cakes/floral.jpg'
import floralpurple from '../Images/cakes/floralpurple.jpg'
import hulk from '../Images/cakes/hulk.jpg'
import micky from '../Images/cakes/micky.jpg'
import numbertwo from '../Images/cakes/number2.jpg'
import peppa from '../Images/cakes/peppa.jpg'
import pineappleupsidedown from '../Images/cakes/pineappleupsidedown.jpg'
import pinkhat from '../Images/cakes/pinkhat.jpg'
import wednesday from '../Images/cakes/wednesday.jpg'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import { useAuth0 } from '@auth0/auth0-react'

const CakeOrderScreen = ({ history }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [userMetadata, setUserMetadata] = useState(null)
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-dstps3q4l34f7d23.us.auth0.com'

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        })

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        const { user_metadata } = await metadataResponse.json()

        setUserMetadata(user_metadata)
      } catch (e) {
        console.log(e.message)
      }
    }

    getUserMetadata()
  }, [getAccessTokenSilently, user?.sub])
  const [size, setSize] = useState('Choose one...')
  const [flavor, setFlavor] = useState('Choose one...')
  const [edibleImage, setEdibleImage] = useState(false)
  const [qty, setQty] = useState(1)
  const [date, setDate] = useState('')
  const [additional, setAdditional] = useState('')
  const [name, setName] = useState(isAuthenticated ? user.name : '')
  const [email, setEmail] = useState(isAuthenticated ? user.email : '')
  const [number, setNumber] = useState(isAuthenticated ? user.phone_number : '')
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
      `/cakesubmitted/${size}?qty=${qty}&date=${date}&additional=${additional}&name=${name}&email=${email}&number=${number}&flavor=${flavor}&edibleImage=${edibleImage}`
    )
  }
  const Carousel = (
    <MDBCarousel
      fade
      className='ml-2 my-0'
      // style={{ height: '40%', width: '40%' }}
    >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={tiered}
        alt='...'
      ></MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={thirty}
        alt='...'
      ></MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={cactus}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={cinco}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={ferrero}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={floral}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src={floralpurple}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={8}
        src={hulk}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={9}
        src={micky}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={10}
        src={numbertwo}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={11}
        src={peppa}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={12}
        src={pineappleupsidedown}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={13}
        src={pinkhat}
        alt='...'
      ></MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={14}
        src={wednesday}
        alt='...'
      ></MDBCarouselItem>
    </MDBCarousel>
  )
  const handleCheckBox = () => {
    setEdibleImage(!edibleImage)
  }
  window.scrollTo(0, 0)
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
          <Form.Group className='lg:mx-40'>
            <Card>
              <Row>
                <Col sm={4} md={6} lg={6} className='my-auto mx-auto'>
                  {Carousel}
                </Col>
                <Col sm={6} lg={12}>
                  <Card.Header>
                    <Card.Title>
                      <h1 className='text-center'>Request Form</h1>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className='lg:mx-60'>
                    <ListGroup variant='flush'>
                      <Form.Control
                        as='select'
                        onChange={(e) => setSize(e.target.value)}
                        fluid
                        style={{ width: '100%' }}
                      >
                        <option value='Cake Size:'>Cake Size:</option>

                        <option value='Circle/Square' disabled>
                          ------Circle/Square------
                        </option>

                        <option value='10 / Circle'>10 Inch Cake ($50)</option>
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

                        <option value='1/2 / Sheet'>
                          1/2 Sheet Cake ($75)
                        </option>
                        <option value='1/4 / Sheet'>
                          1/4 Sheet Cake ($45)
                        </option>
                      </Form.Control>
                    </ListGroup>
                  </Card.Body>
                  <Card.Body className='lg:mx-60'>
                    <ListGroup variant='flush'>
                      <Form.Control
                        as='select'
                        onChange={(e) => setFlavor(e.target.value)}
                        fluid
                        style={{ width: '100%' }}
                      >
                        <option value='Flavor:'>Flavor:</option>
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
                        <option value='Spice Cake'>Spice Cake</option>
                        <option value='Butterscotch'>Butterscotch</option>
                        <option value='other'>Other (describe below!)</option>
                      </Form.Control>
                    </ListGroup>
                  </Card.Body>
                  <Card.Body className='lg:mx-60'>
                    <FloatingLabel label='Quantity:'>
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
                    </FloatingLabel>
                  </Card.Body>{' '}
                  <Card.Body className='lg:mx-60'>
                    {/* <Card.Header>
                  <h3 className='text-center'>Date:</h3>
                </Card.Header> */}
                    <FloatingLabel label='Date:'>
                      <Form.Control
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        // required
                      />
                    </FloatingLabel>
                  </Card.Body>
                  <Card.Body className='lg:mx-60'>
                    <FloatingLabel label='Name:'>
                      <Form.Control
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Card.Body>{' '}
                  <Card.Body className='lg:mx-60'>
                    <FloatingLabel label='Email:'>
                      <Form.Control
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // required
                      />
                    </FloatingLabel>
                  </Card.Body>{' '}
                  <Card.Body className='lg:mx-60'>
                    <FloatingLabel label='Number:'>
                      <Form.Control
                        type='text'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Card.Body>{' '}
                  <Card.Body>
                    <Form.Check
                      type='switch'
                      value={edibleImage}
                      onChange={handleCheckBox}
                      className='inline lg:ml-20'
                    ></Form.Check>
                    <strong>&nbsp;&nbsp;Edible Image</strong>
                    <br />
                    <span className='ml-12 lg:ml-40'>
                      Additional $10, please describe below!
                    </span>
                  </Card.Body>{' '}
                  <Card.Body className='lg:mx-60'>
                    <FloatingLabel
                      label='Themes, customization, cake toppers, anything that defines
                    the cake you want!'
                    >
                      <Form.Control
                        as='textarea'
                        style={{ height: '100px' }}
                        value={additional}
                        onChange={(e) => setAdditional(e.target.value)}
                        required
                        placeholder='Themes, customization, cake toppers, anything that defines
                    the cake you want!'
                      />
                    </FloatingLabel>
                  </Card.Body>
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
                  <button
                    size='submit'
                    className='addcart_button lg:mx-60 btn-block'
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </Card>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default withRouter(CakeOrderScreen)
