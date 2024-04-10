import React from 'react'
import img from "./assets/myprofile.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Contact.css'
function Contact() {
  let Name = "Rounak"
  return (
    <div className='contact-page'>
      <span>👨‍💻</span>
      <h3>Crafting digital experiences through code and design.</h3>
      <p className='contact-des'>As a seasoned web developer, {Name} combines expertise in coding languages like HTML, CSS, and JavaScript with a keen eye for design principles. With a passion for creating seamless digital experiences, {Name} thrives in bringing visions to life on the web. From responsive layouts to dynamic functionalities, {Name} strives to deliver top-notch solutions tailored to clients' needs. With a commitment to innovation and continuous learning, {Name} remains at the forefront of web development, dedicated to pushing boundaries and exceeding expectations.</p>

      <div className="social">
        <p className='social-p'><LinkedInIcon sx={{color:"white"}}/><span>Linked in</span></p>
        <p className='social-p'><FacebookIcon sx={{color:"white"}}/><span>Facebook</span></p>
        <p className='social-p'><InstagramIcon sx={{color:"white"}}/><span>Instagram</span></p>
        <p className='social-p'><XIcon sx={{color:"white"}}/><span>Twitter</span></p>
        <p className='social-p'><YouTubeIcon sx={{color:"white"}}/><span>Youtube</span></p>


      </div>
    </div>
  )
}

export default Contact