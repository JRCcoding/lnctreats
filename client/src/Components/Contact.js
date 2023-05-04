import React, { useState } from 'react'
import axios from 'axios'
export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  })
  function handleStateChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const submitEmail = async (e) => {
    e.preventDefault()
    console.log({ formState })
    const response = await fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: formState,
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res
        console.log(resData)
        if (resData.status === 'success') {
          alert('Message Sent')
        } else if (resData.status === 'fail') {
          alert('Message failed to send')
        }
      })
      .then(() => {
        setFormState({
          email: '',
          name: '',
          number: '',
          message: '',
        })
      })
  }
  return (
    <div className='contact_container'>
      <div className='App'>
        <form
          style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onSubmit={submitEmail}
        >
          <fieldset
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '50%',
            }}
          >
            <input
              placeholder='Name'
              onChange={handleStateChange}
              name='name'
              value={formState.name}
            />
            <input
              placeholder='Number'
              onChange={handleStateChange}
              name='number'
              value={formState.number}
            />
            <input
              placeholder='Email'
              onChange={handleStateChange}
              name='email'
              value={formState.email}
            />
            <textarea
              style={{ minHeight: '200px' }}
              placeholder='Message'
              onChange={handleStateChange}
              name='message'
              value={formState.message}
            />
            <button type='submit'>Send Message</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
