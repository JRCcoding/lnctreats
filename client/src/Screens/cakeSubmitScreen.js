import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { createRequest } from '../Actions/requestActions'
// size,
//         qty,
//         date,
//         additional,
//         name,
//         email,
const CakeSubmitScreen = ({ location }) => {
  const { size } = useParams()
  const itemSize = size
  const qty = new URLSearchParams(location.search).get('qty')
  const date = new URLSearchParams(location.search).get('date')
  const additional = new URLSearchParams(location.search).get('additional')
  const name = new URLSearchParams(location.search).get('name')
  const email = new URLSearchParams(location.search).get('email')
  const number = new URLSearchParams(location.search).get('number')
  const edibleImage = new URLSearchParams(location.search).get('edibleImage')
  const dispatch = useDispatch()
  const request = useSelector((state) => state.request)
  const { requestInfo } = request
  useEffect(() => {
    if (itemSize) {
      dispatch(createRequest(requestInfo))
    }
  }, [dispatch, requestInfo, itemSize])
  window.scrollTo(0, 0)

  return (
    <Container>
      <h5>
        Thank you for your request, <strong>{name}</strong>!{' '}
      </h5>
      <p>I will get back to you as soon as possible!</p>

      <Card>
        <Card.Body>
          <Card.Header>
            <h3>Here is your provided information:</h3>
          </Card.Header>
          <ul>
            <li>
              <strong>Date: </strong>
              {date}
            </li>
            <li>
              <strong>Name: </strong>
              {name}
            </li>
            <li>
              <strong>Email: </strong>
              {email}
            </li>
            <li>
              <strong>Number: </strong>
              {number}
            </li>
            <li>
              <strong>Edible Image: </strong>
              {edibleImage ? 'True' : 'False'}
            </li>
            <li>
              <strong>Information: </strong>
              {additional}
            </li>
          </ul>
        </Card.Body>
      </Card>

      <p>
        {' '}
        You can reply to the email with any further information or questions!
      </p>
      <p></p>
    </Container>
  )
}

export default withRouter(CakeSubmitScreen)
