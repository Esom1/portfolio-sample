import React from 'react'
import '../style/Hero.css'
import react from '../assets/blu.svg'
import css from '../assets/Group 5.png'
import html from '../assets/Group 6.png'
import json from '../assets/Group 7.png'
import javascript from '../assets/logos_javascript.png'
import bootstrap from '../assets/Vector.png'
import dev from '../assets/Saly-13.png'
import me from '../assets/WhatsApp Image 2023-08-30 at 11.25.42 PM.jpeg'
import message from '../assets/Group 11.png'
import send from '../assets/send-icon.png'
import git from '../assets/Vector-git.png'

const Hero = () => {
  return (
    <div className='hero text-white pt-5 '>
      <div className='container'>
      <p className=' yellow text-center'>Full Stack Developer</p>
      <p className='name'>Christiana Ugoala</p>
      <p className='detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
      <div className='d-flex gap-4 mt-4 hero-icons'>
        <img src={bootstrap} alt="" />
        <img src={json} alt="" />
        <img src={html} alt="" />
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={css} alt="" />
      </div>
      <div className='d-flex align-items-center gap-5 persona'>
       <div className='my-pic'> <img src={me} alt="" /></div>
       <div className='d-flex ss gap-2'>
       <img src={message} alt="" />
       <p>Email me</p>
       <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-2'>
        <img src={git} alt="" />
        <p>GitHub</p>
        <img src={send} alt="" />
       </div>
      </div>
      <div className='circle'></div>
      <div className='dev'>
        <img src={dev} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Hero