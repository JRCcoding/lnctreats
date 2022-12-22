import React from 'react'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
} from 'mdb-react-ui-kit'
import '../Styles/Contact.css'

const contactScreen = () => {
  return (
    <div className='background_pattern'>
      <Fade up>
        <Contact />
        <MDBCard className='contact_info_box'>
          <MDBCardTitle className='text-center'>
            Other forms of contact
          </MDBCardTitle>
          <MDBCardText>
            There are plenty of other ways to contact me:
            <ul className='flex flex-row contact_options'>
              <MDBCardLink
                href='https://www.facebook.com/LNCsstreats/'
                target='_blank'
                className='contact_options_links'
              >
                <li>Facebook</li>
              </MDBCardLink>
              <MDBCardLink
                href='https://www.instagram.com/lnc_sweetandsavorytreats/'
                target='_blank'
                className='contact_options_links'
              >
                <li>Instagram</li>
              </MDBCardLink>
              <MDBCardLink
                href='mailto:lncsstreats@gmail.com'
                target='_blank'
                className='contact_options_links'
              >
                <li>Email</li>
              </MDBCardLink>
            </ul>
          </MDBCardText>
        </MDBCard>
        {/* BRING MAP IN HERE */}
      </Fade>
    </div>
  )
}

export default contactScreen
