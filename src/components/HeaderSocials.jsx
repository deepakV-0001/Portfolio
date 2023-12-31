import React from 'react'
import '../components/header.css'
import {BsLinkedin ,BsGithub,BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='#' target="_blank"><BsLinkedin/></a>
        <a href='#' target="_blank"><BsGithub/></a>
        <a href='#' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials