import React from 'react'
import '../components/portfolio.css'
import img1 from '../assets/port1.jfif'
import img2 from '../assets/port2.jfif'
import img3 from '../assets/port3.jfif'
import img4 from '../assets/port4.jfif'
import img5 from '../assets/port5.jfif'
import img6 from '../assets/port6.jfif'


const data=[{
  id:1,
  Image:img1,
  title:'This is a portfolio item title',
  github:'https://github.com',
  demo:'',
},
{
  id:2,
  Image:img2,
  title:'This is a portfolio item title',
  github:'https://github.com',
  demo:'',
},
{
  id:3,
  Image:img3,
  title:'This is a portfolio item title',
  github:'https://github.com',
  demo:'',
},
{
  id:4,
  Image:img4,
  title:'This is a portfolio item title',
  github:'https://github.com',
  demo:'',
},
{
  id:5,
  Image:img5,
  title:'This is a portfolio item title',
  github:'https://github.com',
  demo:'',
},
{
  id:6,
  Image:img6,
  title:'This is a portfolio item title',
  github:'https://github.com',
  demo:'',
},
]


const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>PORTFOLIO</h2>
  
  <div className="container portfolio_container">
    {
      data.map((value)=>{
        return(
          <article key={value.id} className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={value.Image} alt="" />
      </div>
        <h3>{value.title}</h3>
        <div className="portfolio_item-cta">
        <a href={value.github} className='btn' target='_blank'>Github</a>
        <a href={value.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      
    </article>
        )
      })
    }
   
  </div>

   </section>
  )
}

export default Portfolio