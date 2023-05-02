import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Form, Button, Card, FloatingLabel } from 'react-bootstrap'

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState()
  // const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_mj24iav',
  //       'template_sul9k9h',
  //       form.current,
  //       'Ts0xnPtn_iKfBC4r0'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  //   setIsSubmitted(true)
  // }

  return (
    <div className='contact_container'>
      <Card className='contact_card'>
        <Card.Header className='text-center'>
          <h1>Contact Lauryn!</h1>
        </Card.Header>
        {!isSubmitted ? (
          // <Card.Body className='contact_form'>
          //   <Form ref={form} onSubmit={sendEmail}>
          //     <FloatingLabel label='Name:'>
          //       <Form.Control
          //         type='text'
          //         name='user_name'
          //         placeholder='Name:'
          //       />
          //     </FloatingLabel>

          //     <br />
          //     <FloatingLabel label='Email:'>
          //       <Form.Control
          //         type='email'
          //         name='user_email'
          //         placeholder='Email:'
          //       />
          //     </FloatingLabel>

          //     <br />
          //     <FloatingLabel label='Message:'>
          //       <Form.Control
          //         type='textarea'
          //         name='message'
          //         placeholder='Message, inqueries, etc...:'
          //       />
          //     </FloatingLabel>
          //     <br />
          //     <div className='submit_div'>
          //       <Button type='submit'>Send</Button>
          //     </div>
          //   </Form>
          // </Card.Body>
          <form
            action='https://postmail.invotes.com/send'
            method='post'
            id='email_form'
          >
            <input type='text' name='subject' placeholder='Subject' />
            <textarea name='text' placeholder='Message'></textarea>
            <input
              type='hidden'
              name='access_token'
              value='w460zlqvpe0ejr7mx4jy5540'
            />
            {/* <!-- return urls can be fully qualified -OR-
         start with / for root relative -OR-
         start with . for url relative -->  */}
            <input
              type='hidden'
              name='success_url'
              value='.?message=Email+Successfully+Sent%21&isError=0'
            />
            <input
              type='hidden'
              name='error_url'
              value='.?message=Email+could+not+be+sent.&isError=1'
            />

            {/* <!-- set the reply-to address --> */}
            {/* <!-- <input type="text" name="reply_to"
                placeholder="Your Email" /> -->

    <!-- to append extra fields, use the extra_ prefix.
        Entries will be appended to your message body. -->
    <!-- <input type="text" name="extra_phone_number"
                placeholder="Phone Number" /> -->

    <!-- to split your message into 160 chars
         for an sms gateway -->
    <!-- <input type="hidden"
                name="sms_format" value="true" /> --> */}

            <input id='submit_form' type='submit' value='Send' />
            {/* <!-- not required, but we'd appreciate it if you'd link to us somewhere on your site --> */}
            <p>
              Powered by{' '}
              <a
                href='https://postmail.invotes.com'
                target='_blank'
                rel='noreferrer'
              >
                PostMail
              </a>
            </p>
          </form>
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
