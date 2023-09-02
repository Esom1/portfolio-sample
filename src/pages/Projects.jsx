import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Projects.css';
import me from '../assets/WhatsApp Image 2023-08-30 at 11.25.42 PM.jpeg'
import message from '../assets/Group 11.png'
import send from '../assets/send-icon.png'
import git from '../assets/Vector-git.png'


const Projects = () => {
  return (
    <div className='hero text-white pt-5 '>
       <div className='container'>
      <div className='row' >
      <p className=' yellow yellow-project text-center'>Full Stack Developer</p>
      <p className='name name-project'>Christiana Ugoala</p>
      <p className='detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
      <div className='new-nav'>
        <p>01 -- Project</p>
        <p>02 -- Download Resume</p>
        <p>03 -- Contact</p>
      </div>
      <div className='d-flex align-items-center gap-5 persona persona-detail'>
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
      </div>
    </div>

    </div>
  )
}

export default Projects