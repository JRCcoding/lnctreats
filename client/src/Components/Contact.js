import React from 'react'
import 'animate.css'
import { useForm } from '@formspree/react'
import { Card } from 'react-bootstrap'
import ThankYou from '../Components/ThankYou.js'

import '../Styles/Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm('maykyddr')
  if (state.succeeded) {
    return <ThankYou className='thank_you_card' />
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
            <label className='form-label' htmlFor='product'>
              Product of interest:
            </label>
            <input
              className='form-control '
              id='product'
              type='text'
              name='product'
              required
            ></input>

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

            <div className='submit_div'>
              <button
                type='submit'
                className='contact_submit'
                disabled={state.submitting}
              >
                Send to Lauryn
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Contact
