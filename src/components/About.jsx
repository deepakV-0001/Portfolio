import React from 'react'
import '../components/about.css'
import Me from '../assets/about_img.jfif'
import { FaAward, FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about_container">
        <div className="about_me">
          
            <div className="about_me-image">
              <img src={Me} alt="about img" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>Fresher</small>

              </article>
              <article className="about_card">
                <FaUsers className='about_icon' />
                <h5>Client</h5>
                <small>80+</small>

              </article>
              <article className="about_card">
                <VscFolderLibrary className='about_icon' />
                <h5>Projects</h5>
                <small>5+ Completed</small>

              </article>
            </div>



            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eius recusandae!
              Corporis delectus suscipit vitae nisi, temporibus id quibusdam accusantium, libero
              voluptates reiciendis distinctio fuga, quae natus ea nulla repellat.
            </p>


            <a href='#contact' className='btn btn-primary'>Let's Talk</a>


          </div>

        </div>
    </section>
  )
}

export default About