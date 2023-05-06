// import React, { useState, useEffect } from 'react'
// import { Table, Form, Button, Row, Col, Container, Card } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../Components/Message'
// import Loader from '../Components/Loader'
// import { getUserDetails, updateUserProfile } from '../Actions/userActions'
// import { listMyOrders } from '../Actions/orderActions'
// import { USER_UPDATE_PROFILE_RESET } from '../Constants/userConstants'
// import { withRouter } from 'react-router-dom'
// const ProfileScreen = ({ location, history }) => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [number, setNumber] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [message, setMessage] = useState(null)

//   const dispatch = useDispatch()

//   const userDetails = useSelector((state) => state.userDetails)
//   const { loading, error, user } = userDetails

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
//   const { success } = userUpdateProfile

//   const orderListMy = useSelector((state) => state.orderListMy)
//   const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

//   useEffect(() => {
//     if (!userInfo) {
//       history.push('/login')
//     } else {
//       if (!user || !user.name || success) {
//         dispatch({ type: USER_UPDATE_PROFILE_RESET })
//         dispatch(getUserDetails('profile'))
//         dispatch(listMyOrders())
//       } else {
//         setName(user.name)
//         setEmail(user.email)
//         setNumber(user.number)
//       }
//     }
//   }, [dispatch, history, userInfo, user, success])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match')
//     } else {
//       dispatch(
//         updateUserProfile({ id: user._id, name, email, number, password })
//       )
//     }
//   }

//   return (
//     <div className='background_pattern'>
//       <Container>
//         <Card>
//           <Row>
//             <Col md={3}>
//               <h2>User Profile</h2>
//               {message && <Message variant='danger'>{message}</Message>}
//               {}
//               {success && <Message variant='success'>Profile Updated</Message>}
//               {loading ? (
//                 <Loader />
//               ) : error ? (
//                 <Message variant='danger'>{error}</Message>
//               ) : (
//                 <Form onSubmit={submitHandler}>
//                   <Form.Group controlId='name'>
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       type='name'
//                       placeholder='Enter name'
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     ></Form.Control>
//                   </Form.Group>

//                   <Form.Group controlId='email'>
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control
//                       type='email'
//                       placeholder='Enter email'
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     ></Form.Control>
//                   </Form.Group>

//                   <Form.Group controlId='number'>
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control
//                       type='number'
//                       placeholder='Enter phone number'
//                       value={number}
//                       onChange={(e) => setNumber(e.target.value)}
//                     ></Form.Control>
//                   </Form.Group>

//                   <Form.Group controlId='password'>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type='password'
//                       placeholder='Enter password'
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     ></Form.Control>
//                   </Form.Group>

//                   <Form.Group controlId='confirmPassword'>
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control
//                       type='password'
//                       placeholder='Confirm password'
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                     ></Form.Control>
//                   </Form.Group>

//                   <Button type='submit' variant='primary'>
//                     Update
//                   </Button>
//                 </Form>
//               )}
//             </Col>
//             <Col md={9}>
//               <h2>My Orders</h2>
//               {loadingOrders ? (
//                 <Loader />
//               ) : errorOrders ? (
//                 <Message variant='danger'>{errorOrders}</Message>
//               ) : (
//                 <Table striped bordered hover responsive className='table-sm'>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>DATE</th>
//                       <th>TOTAL</th>
//                       <th>PAID</th>
//                       <th>DELIVERED</th>
//                       <th></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((order) => (
//                       <tr key={order._id}>
//                         <td>{order._id}</td>
//                         <td>{order.createdAt.substring(0, 10)}</td>
//                         <td>${order.totalPrice}</td>
//                         <td>
//                           {order.isPaid ? (
//                             order.paidAt.substring(0, 10)
//                           ) : (
//                             <i
//                               className='fas fa-times'
//                               style={{ color: 'red' }}
//                             ></i>
//                           )}
//                         </td>
//                         <td>
//                           {order.isDelivered ? (
//                             order.deliveredAt.substring(0, 10)
//                           ) : (
//                             <i
//                               className='fas fa-times'
//                               style={{ color: 'red' }}
//                             ></i>
//                           )}
//                         </td>
//                         <td>
//                           <LinkContainer to={`/order/${order._id}`}>
//                             <Button className='btn-sm' variant='light'>
//                               Details
//                             </Button>
//                           </LinkContainer>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               )}
//             </Col>
//           </Row>
//         </Card>
//       </Container>
//     </div>
//   )
// }

// export default withRouter(ProfileScreen)
import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

const ProfileScreen = ({ history }) => {
  const [orders, setOrders] = useState()
  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get('/api/orders')

      setOrders(data)
    }
    fetchOrders()
  }, [])
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
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

  useEffect(() => {
    if (!isAuthenticated) history.push('/')
  })
  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <div className='background_pattern'>
        <Container>
          <Card>
            <img
              src={user.picture}
              alt={user.name}
              style={{ height: '50px', width: '50px' }}
            />
            <h4>Username: </h4>
            <span>{user.name}</span>
            <br />
            <hr />
            <br />

            <p>{user.email !== user.name && user.email}</p>
            {userMetadata && <h4>🚨ADMIN🚨</h4>}
            {!userMetadata && (
              <>
                <h2>My Orders</h2>
                <Table striped bordered hover responsive className='table-sm'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((order) => (
                        <tr key={order._id}>
                          {order.userId === user.sub && (
                            <>
                              <td>{order._id}</td>
                              <td>{order.createdAt.substring(0, 10)}</td>
                              <td>${order.totalPrice}</td>
                              <td>
                                {order.isPaid ? (
                                  order.paidAt.substring(0, 10)
                                ) : (
                                  <i
                                    className='fas fa-times'
                                    style={{ color: 'red' }}
                                  ></i>
                                )}
                              </td>
                              <td>
                                {order.isDelivered ? (
                                  order.deliveredAt.substring(0, 10)
                                ) : (
                                  <i
                                    className='fas fa-times'
                                    style={{ color: 'red' }}
                                  ></i>
                                )}
                              </td>
                              <td>
                                <LinkContainer to={`/order/${order._id}`}>
                                  <Button className='btn-sm' variant='light'>
                                    Details
                                  </Button>
                                </LinkContainer>
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card>
        </Container>
      </div>
    )
  )
}

export default ProfileScreen
