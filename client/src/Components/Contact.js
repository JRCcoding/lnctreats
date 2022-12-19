import React from 'react'
import 'animate.css'
import { useForm } from '@formspree/react'
import { Card } from 'react-bootstrap'

import '../Styles/Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm('maykyddr')
  if (state.succeeded) {
    return (
      <div>
        Thank you so much for your interest! I will get back to you within as
        soon as possible!
      </div>
    )
  }
  return (
    <div className='contact_container'>
      <Card className='contact_card'>
        <Card.Title className='contact_title mb-5 mt-2'>
          <h1 className='contact_title_h1'>Contact me now!</h1>
        </Card.Title>

        <Card.Body className='contact_form'>
          <form onSubmit={handleSubmit}>
            <label className='form-label' htmlFor='name'>
              Name:
            </label>
            <input
              className='form-control mb-3'
              id='name'
              type='text'
              name='name'
              required
            />
            <label className='form-label' htmlFor='number'>
              Number:
            </label>
            <input
              className='form-control mb-3'
              id='number'
              type='text'
              name='number'
              required
            />

            <label className='form-label' htmlFor='email'>
              Email:
            </label>
            <input
              className='form-control mb-3'
              id='email'
              type='email'
              name='email'
              required
            />

            <label className='form-label' htmlFor='message'>
              Message:
            </label>
            <input
              className='form-control '
              id='message'
              type='text'
              name='message'
              required
            ></input>
            <button
              type='submit'
              className='contact_submit btn'
              disabled={state.submitting}
            >
              Send to Lauryn
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Contact

// import React, { useState } from 'react'
// import 'animate.css'

// import '../Styles/Contact.css'

// const Contact = () => {
//   const [status, setStatus] = useState('Submit')
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus('Sending...')
//     const { name, email, message } = e.target.elements
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     let response = await fetch('http://localhost:10000/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(details),
//     })
//     setStatus('Submit')
//     let result = await response.json()
//     alert(result.status)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='name'>Name:</label>
//         <input type='text' id='name' required />
//       </div>
//       <div>
//         <label htmlFor='email'>Email:</label>
//         <input type='email' id='email' required />
//       </div>
//       <div>
//         <label htmlFor='message'>Message:</label>
//         <textarea id='message' required />
//       </div>
//       <button type='submit'>{status}</button>
//     </form>
//   )
// }
// export default Contact
