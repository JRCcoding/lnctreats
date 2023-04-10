import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listOrders } from '../Actions/orderActions'
import { listRequests } from '../Actions/requestActions'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList
  const requestList = useSelector((state) => state.requestList)
  const { requests } = requestList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
      dispatch(listRequests())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])
  // useEffect(() => {
  //   dispatch(listRequests())
  // }, [dispatch])

  return (
    <div>
      <Container>
        <Card>
          <h1>Orders</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USER</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id.substring(19, 24)}</td>
                    <td>{order.user && order.user.name}</td>
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
                        <Button variant='light' className='btn-sm'>
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>
        <Card>
          <h1>Requests</h1>

          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Informational</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id}>
                  <td>{request._id.substring(19, 24)}</td>
                  <td>{request.name}</td>
                  <td>{request.email}</td>
                  <td>{request.number}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  )
}

export default OrderListScreen
