import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Form, Button, Card, FloatingLabel } from 'react-bootstrap'

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState()
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mj24iav',
        'template_sul9k9h',
        form.current,
        'Ts0xnPtn_iKfBC4r0'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    setIsSubmitted(true)
  }

  return (
    <div className='contact_container'>
      <Card className='contact_card'>
        <Card.Header className='text-center'>
          <h1>Contact Lauryn!</h1>
        </Card.Header>
        {!isSubmitted ? (
          <Card.Body className='contact_form'>
            <Form ref={form} onSubmit={sendEmail}>
              <FloatingLabel label='Name:'>
                <Form.Control
                  type='text'
                  name='user_name'
                  placeholder='Name:'
                />
              </FloatingLabel>

              <br />
              <FloatingLabel label='Email:'>
                <Form.Control
                  type='email'
                  name='user_email'
                  placeholder='Email:'
                />
              </FloatingLabel>

              <br />
              <FloatingLabel label='Message:'>
                <Form.Control
                  type='textarea'
                  name='message'
                  placeholder='Message, inqueries, etc...:'
                />
              </FloatingLabel>
              <br />
              <div className='submit_div'>
                <Button type='submit'>Send</Button>
              </div>
            </Form>
          </Card.Body>
        ) : (
          <>
            <h3>Thank You!</h3>
            <p>
              I will get back to you as soon as possible, thank you so much for
              contacting me!
            </p>
          </>
        )}
      </Card>
    </div>
  )
}
