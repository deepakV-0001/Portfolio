import React from 'react'
import '../components/testimonials.css';
import '../../node_modules/swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgc from '../assets/client1.jfif'

import { Pagination } from 'swiper';
import 'swiper/css/pagination';

const data = [{
  img: imgc,
  name: 'markus thuper',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendisvoluptas sint neque aspernatur facere doloremque quod inventore tempora quae magni exercitationem eligendi atque similique corporis nesciunt officia recusandae quis sit!',
},
{
  img: imgc,
  name: 'markus thuper',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendisvoluptas sint neque aspernatur facere doloremque quod inventore tempora quae magni exercitationem eligendi atque similique corporis nesciunt officia recusandae quis sit!',
},
{
  img: imgc,
  name: 'markus thuper',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendisvoluptas sint neque aspernatur facere doloremque quod inventore tempora quae magni exercitationem eligendi atque similique corporis nesciunt officia recusandae quis sit!',
},
{
  img: imgc,
  name: 'markus thuper',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendisvoluptas sint neque aspernatur facere doloremque quod inventore tempora quae magni exercitationem eligendi atque similique corporis nesciunt officia recusandae quis sit!',
},
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>

     
        {
          data.map((value,idx) => {
           return(
            <SwiperSlide key={idx} className='testimonial'>
            <div className="client_avatar">
              <img src={value.img} alt="" />
            </div>
            <h5 className='client_name'>{value.name}</h5>
            <small className='client_review'>{value.review}</small>

          </SwiperSlide>
           )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials