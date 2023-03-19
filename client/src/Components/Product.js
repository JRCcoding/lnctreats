import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MDBCard } from 'mdb-react-ui-kit'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { listProducts } from '../Actions/productActions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Styles/Product.css'
import Meta from '../Components/Meta'
import { withRouter } from 'react-router-dom'

const Product = ({ history }) => {
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(1)
  const [date, setDate] = useState('no date')
  const [shape, setShape] = useState('Choose one...')
  const [size, setSize] = useState('Choose one...')
  const [cakeFlavor, setCakeFlavor] = useState('Vanilla')
  const [otherCakeFlavor, setOtherCakeFlavor] = useState()
  const [frostingFlavor, setFrostingFlavor] = useState('Chocolate')
  const [otherFrostingFlavor, setOtherFrostingFlavor] = useState()
  const [filling, setFilling] = useState()
  const [additional, setAdditional] = useState()
  const [cakePrice, setCakePrice] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

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

  const checkCakeCost = () => {
    return shape === 'Round'
      ? size === '3 inch'
        ? cakePrice + 1
        : size === '4 inch'
        ? cakePrice + 2
        : size === '6 inch'
        ? cakePrice + 4
        : size === '8 inch'
        ? cakePrice + 6
        : size === '9 inch'
        ? cakePrice + 7
        : size === '10 inch'
        ? cakePrice + 8
        : size === '12 inch'
        ? cakePrice + 10
        : cakePrice + 0
      : shape === 'Square'
      ? size === '8 inch'
        ? cakePrice + 6
        : size === '6 inch'
        ? cakePrice + 4
        : cakePrice + 0
      : // : shape === 'Heart'
      // ? size === '8 inch'
      //   ? cakePrice + 6
      //   : size === '6 inch'
      //   ? cakePrice + 4
      //   : cakePrice + 50
      shape === 'Sheet'
      ? size === 'Full'
        ? cakePrice + 25
        : size === 'Half'
        ? cakePrice + 18
        : size === 'Quarter'
        ? cakePrice + 15
        : cakePrice + 0
      : cakePrice + 0
  }
  const addToCartHandler = () => {
    history.push(
      `/cart/${id}?qty=${qty}&date=${date}&shape=${shape}&size=${size}&cakeFlavor=${cakeFlavor}&otherCakeFlavor=${otherCakeFlavor}&frostingFlavor=${frostingFlavor}&otherFrostingFlavor=${otherFrostingFlavor}&filling=${filling}&additional=${additional}&cakePrice=${checkCakeCost()}`
    )
  }

  return (
    <div>
      <Meta title={product.title} />

      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <MDBCard className='prod_info_box pr-2'>
            {/* SPLIT FOR CAT2 */}
            {product.category2 === 'cakes' ? (
              <Row>
                <Col md={6}>
                  <LinkContainer to='/products'>
                    <button className='backprod_button absolute top-0'>
                      GO BACK
                    </button>
                  </LinkContainer>

                  <Image
                    src={product.img}
                    alt={product.title}
                    fluid
                    className='prod_img'
                  />
                </Col>
                <Col md={6}>
                  <ListGroup variant='flush' className='mr-2'>
                    <ListGroup.Item>
                      <h3>{product.title}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Description: </strong> {product.description}
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                    <strong>More Info: </strong> {product.additional}
                  </ListGroup.Item> */}
                    <ListGroup.Item>
                      <strong>Price: $</strong>
                      {product.customPrice ? (
                        <>{product.customPrice}</>
                      ) : (
                        <>{product.price}</>
                      )}
                      +
                    </ListGroup.Item>
                  </ListGroup>
                  <Form>
                    <Form.Group className='mb-3' controlId='lncForm.Date'>
                      <Form.Label>Date Needed:</Form.Label>
                      <Form.Control
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='lncForm.Shape'>
                      <Form.Label>Shape:</Form.Label>
                      <Form.Select
                        aria-label='Shape'
                        value={shape}
                        onChange={(e) => setShape(e.target.value)}
                      >
                        <option value='chooseone'>Choose one...</option>
                        <option value='Round'>Round</option>
                        <option value='Square'>Square</option>
                        <option value='Sheet'>Sheet</option>
                        <option value='Heart'>Heart</option>
                        <option value='Custom'>Custom</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                      className='mb-3'
                      controlId='lncForm.Size'
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      <Form.Label>Size:</Form.Label>
                      {shape === 'Round' ? (
                        <Form.Select aria-label='Size'>
                          <option value='chooseone'>Choose one...</option>
                          <option value='12 inch'>12 inch</option>
                          <option value='10 inch'>10 inch</option>
                          <option value='9 inch'>9 inch</option>
                          <option value='8 inch'>8 inch</option>
                          <option value='6 inch'>6 inch</option>
                          <option value='4 inch'>4 inch</option>
                          <option value='3 inch'>3 inch</option>
                        </Form.Select>
                      ) : shape === 'Square' ? (
                        <Form.Select aria-label='Size'>
                          <option value='chooseone'>Choose one...</option>
                          <option value='8 inch'>8 inch</option>
                          <option value='6 inch'>6 inch</option>
                        </Form.Select>
                      ) : shape === 'Heart' ? (
                        <Form.Select aria-label='Size'>
                          <option value='chooseone'>Choose one...</option>
                          <option value='12 inch'>12 inch</option>
                          <option value='10 inch'>10 inch</option>
                          <option value='9 inch'>9 inch</option>
                          <option value='8 inch'>8 inch</option>
                          <option value='6 inch'>6 inch</option>
                          <option value='4 inch'>4 inch</option>
                        </Form.Select>
                      ) : shape === 'Sheet' ? (
                        <Form.Select aria-label='Size'>
                          <option value='chooseone'>Choose one...</option>
                          <option value='Full'>Full Sheet</option>
                          <option value='Half'>Half Sheet</option>
                          <option value='Quarter'>Quarter Sheet</option>
                        </Form.Select>
                      ) : shape === 'Custom' ? (
                        <Form.Control
                          type='text'
                          placeholder='Custom shape/size (characters,animals,etc.)'
                        />
                      ) : (
                        <></>
                      )}
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='lncForm.cakeFlavor'
                      value={cakeFlavor}
                      onChange={(e) => setCakeFlavor(e.target.value)}
                    >
                      <Form.Label>Cake Flavor:</Form.Label>

                      <Form.Select aria-label='Cake Flavor'>
                        <option value='Vanilla'>Vanilla</option>
                        <option value='Chocolate'>Chocolate</option>
                        <option value='Strawberry'>Strawberry</option>
                        <option value='Pineapple'>Pineapple</option>
                        <option value='Ferrero Rocher'>
                          Ferrero Rocher&#8482;
                        </option>
                        <option value='Funfetti'>Funfetti</option>
                        <option value='Lemon'>Lemon</option>
                        <option value='Other'>Other</option>
                      </Form.Select>
                    </Form.Group>

                    {cakeFlavor && cakeFlavor === 'Other' && (
                      <Form.Group
                        className='mb-3'
                        controlId='lncForm.otherCakeFlavor'
                        value={otherCakeFlavor}
                        onChange={(e) => setOtherCakeFlavor(e.target.value)}
                      >
                        <Form.Label>Other Cake Flavor:</Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
                    )}

                    <Form.Group
                      className='mb-3'
                      controlId='lncForm.FrostingFlavor'
                      value={frostingFlavor}
                      onChange={(e) => setFrostingFlavor(e.target.value)}
                    >
                      <Form.Label>Buttercream Frosting Flavor:</Form.Label>

                      <Form.Select aria-label='Frosting Flavor'>
                        <option value='Chocolate'>Chocolate</option>
                        <option value='Vanilla'>Vanilla</option>
                        <option value='Strawberry'>Strawberry</option>
                        <option value='Lemon'>Lemon</option>
                        <option value='Pineapple'>Pineapple</option>
                        <option value='Banana'>Banana</option>
                        <option value='Other'>Other</option>
                      </Form.Select>
                    </Form.Group>

                    {frostingFlavor && frostingFlavor === 'Other' && (
                      <Form.Group
                        className='mb-3'
                        controlId='lncForm.otherFrostingFlavor'
                        value={otherFrostingFlavor}
                        onChange={(e) => setOtherFrostingFlavor(e.target.value)}
                      >
                        <Form.Label>
                          Other Buttercream Frosting Flavor:
                        </Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
                    )}

                    <Form.Group
                      className='mb-3'
                      controlId='lncForm.Filling'
                      value={filling}
                      onChange={(e) => setFilling(e.target.value)}
                    >
                      <Form.Label>Filling:</Form.Label>
                      <Form.Control type='text' placeholder='' />
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='additional'
                      value={additional}
                      onChange={(e) => setAdditional(e.target.value)}
                    >
                      <Form.Label>Additions and Customizations:</Form.Label>
                      <Form.Control type='textbox' placeholder='' />
                    </Form.Group>
                    <ListGroup.Item>
                      <button
                        onClick={addToCartHandler}
                        className='addcart_button'
                      >
                        ADD TO CART
                      </button>
                    </ListGroup.Item>
                    <hr />
                    <ListGroup.Item>
                      OR-- Contact for specific pricing!
                      <br />
                      <ListGroup.Item>
                        <LinkContainer to='/contact'>
                          <button className='contact_button'>
                            CONTACT TO ORDER
                          </button>
                        </LinkContainer>
                      </ListGroup.Item>
                    </ListGroup.Item>
                  </Form>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col md={6}>
                  <LinkContainer to='/products'>
                    <button className='backprod_button absolute top-0'>
                      GO BACK
                    </button>
                  </LinkContainer>

                  <Image
                    src={product.img}
                    alt={product.title}
                    fluid
                    className='prod_img'
                  />
                </Col>
                <Col md={6}>
                  <ListGroup variant='flush' className='mr-2'>
                    <ListGroup.Item>
                      <h3>{product.title}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Description: </strong> {product.description}
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                <strong>More Info: </strong> {product.additional}
              </ListGroup.Item> */}
                    <ListGroup.Item>
                      <strong>Price: $</strong>
                      {product.price}
                    </ListGroup.Item>

                    {product.countInStock < 1 && (
                      <ListGroup.Item>
                        <LinkContainer to='/contact'>
                          <button className='contact_button'>
                            CONTACT TO ORDER
                          </button>
                        </LinkContainer>
                      </ListGroup.Item>
                    )}
                    {product.countInStock > 0 && (
                      <ListGroup>
                        <ListGroup.Item>
                          Any custom orders or over limit orders on website
                          please
                          <LinkContainer to='/contact'>
                            <h6 className='inline clickable'> CONTACT ME</h6>
                          </LinkContainer>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Col>
                              <h5>Quantity</h5>
                            </Col>
                            <Col>
                              <Form.Control
                                as='select'
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[
                                  ...Array(Number(product.countInStock)).keys(),
                                ].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <Form.Group
                          className='mb-3'
                          controlId='additional'
                          value={additional}
                          onChange={(e) => setAdditional(e.target.value)}
                        >
                          <Form.Label>Additions and Customizations:</Form.Label>
                          <Form.Control type='textbox' placeholder='' />
                        </Form.Group>
                        <ListGroup.Item>
                          <button
                            onClick={addToCartHandler}
                            className='addcart_button'
                            type='button'
                          >
                            ADD TO CART
                          </button>
                        </ListGroup.Item>
                      </ListGroup>
                    )}
                  </ListGroup>
                </Col>
              </Row>
            )}
          </MDBCard>
        )}
      </Container>
    </div>
  )
}

export default withRouter(Product)
