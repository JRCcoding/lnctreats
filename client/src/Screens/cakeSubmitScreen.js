import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
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
  const dispatch = useDispatch()
  const request = useSelector((state) => state.request)
  const { requestInfo } = request
  useEffect(() => {
    if (itemSize) {
      dispatch(createRequest(requestInfo))
    }
  }, [dispatch, requestInfo, itemSize])
  return (
    <Container>
      <h5>
        Thank you for your request, <strong>{name}</strong>!{' '}
      </h5>
      <p>{itemSize}I will get back to you as soon as possible!</p>
      {date !== '' && (
        <p>
          {' '}
          You placed your request for{' '}
          <strong>
            {date[5] === '0' ? date.substring(6) : date.substring(5)}
          </strong>{' '}
        </p>
      )}
      <p>
        You will receive an email at <strong>{email}</strong>.
      </p>
      <p>
        {additional !== '' ? (
          <>
            Here is your provided information: <br />{' '}
            <i>&nbsp;&nbsp;&nbsp;"{additional}"</i>
          </>
        ) : (
          <></>
        )}
      </p>
      <p>
        {' '}
        You can reply to the email with any further information or questions!
      </p>
      <p></p>
    </Container>
  )
}

export default withRouter(CakeSubmitScreen)
