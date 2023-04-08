// import React from 'react'
// import 'animate.css'
// import { useForm } from '@formspree/react'
// import { Card } from 'react-bootstrap'
// import ThankYou from '../Components/ThankYou.js'

// import '../Styles/Contact.css'

// const Contact = () => {
//   const [state, handleSubmit] = useForm('maykyddr')
//   if (state.succeeded) {
//     return <ThankYou className='thank_you_card' />
//   }
//   return (
//     <div className='contact_container'>
//       <Card className='contact_card'>
//         <Card.Title className='contact_title mb-5 mt-2'>
//           <h1 className='contact_title_h1'>Contact me now!</h1>
//         </Card.Title>

//         <Card.Body className='contact_form '>
//           <form onSubmit={handleSubmit} className='col-10 mx-auto'>
//             <label className='form-label' htmlFor='name'>
//               Name:
//             </label>
//             <input
//               className='form-control mb-3'
//               id='name'
//               type='text'
//               name='name'
//               required
//             />
//             <label className='form-label' htmlFor='number'>
//               Number:
//             </label>
//             <input
//               className='form-control mb-3'
//               id='number'
//               type='text'
//               name='number'
//               required
//             />
//             <label className='form-label' htmlFor='email'>
//               Email:
//             </label>
//             <input
//               className='form-control mb-3'
//               id='email'
//               type='email'
//               name='email'
//               required
//             />
//             <label className='form-label' htmlFor='message'>
//               Message:
//             </label>
//             <br></br>
//             {/* <input
//               className='form-control'
//               id='message'
//               type='textarea'
//               name='message'
//               required
//             ></input> */}
//             <textarea
//               id='message'
//               name='message'
//               rows='3'
//               cols='65'
//               required
//               className='text-box'
//             ></textarea>{' '}
//             <br />
//             <br />
//             <label for='product'>Product of interest: </label>
//             <select name='product' id='product' required=''>
//               <option value='NA'>N/A</option>
//               <option value='cake'>Custom Cakes</option>
//               <option value='snackbox'>Snack Boxes</option>
//             </select>
//             <div className='submit_div'>
//               <button
//                 type='submit'
//                 className='contact_submit'
//                 disabled={state.submitting}
//               >
//                 Send to Lauryn
//               </button>
//             </div>
//           </form>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }

// export default Contact

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
              <FloatingLabel label='Customization, Theme, Additions: '>
                <Form.Control
                  type='textarea'
                  name='message'
                  placeholder='Customization, Theme, Additions:'
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
