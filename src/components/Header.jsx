import React from 'react'
import '../components/header.css'
import HeaderSocials from './HeaderSocials'

import CTA from './CTA'
import me from '../../src/assets/profile.png'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Deepak Verma</h1>
        <h5 className='text-light'>Frontend Developer</h5><br />
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img className='itsme' src={me} alt='my photo' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>

  )
}

export default Header