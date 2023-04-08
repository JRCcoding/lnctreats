import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams, withRouter } from 'react-router-dom'
// size,
//         qty,
//         date,
//         additional,
//         name,
//         email,
const CakeSubmitScreen = ({ location }) => {
  const { date } = useParams()
  const orderDate = date
  const user_name = new URLSearchParams(location.search).get('name')
  const user_email = new URLSearchParams(location.search).get('email')
  return (
    <Container>
      <h5>
        Thank you for your request, <strong>{user_name}</strong>!{' '}
      </h5>
      <p>
        I will get back to you as soon as possible! You placed your order for{' '}
        <strong>{orderDate}</strong> and you should receive an email at{' '}
        <strong>{user_email}</strong>. You can reply to email with any further
        information or questions!
      </p>
      <p></p>
    </Container>
  )
}

export default withRouter(CakeSubmitScreen)
