import React from 'react'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBIcon,
} from 'mdb-react-ui-kit'
import '../Styles/Contact.css'

const contactScreen = () => {
  return (
    <div className='background_pattern'>
      <Fade up>
        <Contact />
        <MDBCard className='contact_info_box'>
          <MDBCardTitle>Other forms of contact</MDBCardTitle>
          <MDBCardText className='mx-auto'>
            There are plenty of other ways to contact me:
            <ul className='flex flex-row contact_options_link_flex'>
              <MDBCardLink
                href='https://www.facebook.com/LNCsstreats/'
                target='_blank'
                className='contact_options_links'
              >
                <li>
                  <MDBIcon fab icon='facebook-square' />
                  Facebook
                </li>
              </MDBCardLink>
              <MDBCardLink
                href='https://www.instagram.com/lnc_sweetandsavorytreats/'
                target='_blank'
                className='contact_options_links'
              >
                <li>
                  <MDBIcon fab icon='instagram' />
                  Instagram
                </li>
              </MDBCardLink>
              <MDBCardLink
                href='mailto:lncsstreats@gmail.com'
                target='_blank'
                className='contact_options_links'
              >
                <li>
                  <MDBIcon fas icon='envelope' />
                  Email
                </li>
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
