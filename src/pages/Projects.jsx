import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Projects.css';
import me from '../assets/WhatsApp Image 2023-08-30 at 11.25.42 PM.jpeg'
import message from '../assets/Group 11.png'
import send from '../assets/send-icon.png'
import git from '../assets/Vector-git.png'
import webicon from '../assets/web-icon.svg'


const Projects = () => {
  return (
    <div className='hero text-white pt-5 '>
       <div className='container'>
      <div className='row' >
     <div className='d-lg-flex gap-3'>
     <div className=''>
     <p className=' yellow yellow-project text-center'>Full Stack Developer</p>
      <p className='name name-project'>Christiana Ugoala</p>
      <p className='detail detail-d'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
      <div className='new-nav d-md-none d-sm-none d-lg-block mt-3'>
        <p>01 -- Project</p>
        <p>02 -- Download Resume</p>
        <p>03 -- Contact</p>
      </div>
      <div className='d-flex align-items-center gap-3 persona persona-d'>
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
      <div className='holder'>
       <div className='perfumery'>
       <p className='orange'>Javacript,Bootstrap,React & Node</p>
        <p className='bold'>Perfumery : E-commerce website</p>
        <div className='d-flex gap-2'>
        <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
        </div>
       </div>
       <div className='perfumery'>
       <p className='orange'>Javacript,Bootstrap,React & Node</p>
        <p className='bold'>JazzyBurger : E-commerce website</p>
        <div className='d-flex gap-2'>
        <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
        </div>
       </div>
       <div className='perfumery'>
       <p className='orange'>Javacript,Bootstrap,React & Node</p>
        <p className='bold'>TaskMan : Schedule website</p>
       <div className='d-flex gap-2'>
       <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        < p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
       </div>
       </div>
       <div className='perfumery '>
       <p className='orange'>Html,Css & Bootstrap</p>
        <p className='bold'>Tech Studio : E-commerce website</p>
       <div className='d-flex gap-2'>
       <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
       </div>
       </div>
       <div className='perfumery'>
       <p className='orange'>Html,Css & Bootstrap</p>
        <p className='bold'>Huddle : Landing page</p>
       <div className='d-flex gap-2'>
       <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
       </div>
       </div>
       <div className='perfumery'>
       <p className='orange'>Html,Css & Bootstrap</p>
        <p className='bold'>TradExpress : Landing page</p>
       <div className='d-flex gap-2'>
       <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
       </div>
       </div>
       <div className='perfumery'>
       <p className='orange'>Html,Css & Bootstrap</p>
        <p className='bold'>Music Purchase : Landing page</p>
        <div className='d-flex gap-2'>
        <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
        </div>
       </div>
       <div className='perfumery'>
       <p className='orange'>Html,Css & Bootstrap</p>
        <p className='bold'>Eggy's Hotel : Landing page</p>
       <div className='d-flex gap-2'>
       <div className='d-flex ss gap-1'>
        <img src={git} alt="" />
        <p className='git-hub'>GitHub</p>
        <img src={send} alt="" />
       </div>
       <div className='d-flex ss gap-1'>
        <img src={webicon} alt="" />
        <p className='web'>Website</p>
        <img src={send} alt="" />
       </div>
       </div>
       </div>
       </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Projects