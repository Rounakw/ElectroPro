import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.css'
function Contact() {
  let Name = "Rounak"
  return (
    <div className='contact-page'>
      <span>👨‍💻</span>
      <p className='contact-title'>Crafting digital experiences through code and design.</p>
      <p className='contact-des'>As a seasoned web developer, {Name} combines expertise in coding languages like HTML, CSS, and JavaScript with a keen eye for design principles. With a passion for creating seamless digital experiences, {Name} thrives in bringing visions to life on the web. From responsive layouts to dynamic functionalities, {Name} strives to deliver top-notch solutions tailored to clients' needs. With a commitment to innovation and continuous learning, {Name} remains at the forefront of web development, dedicated to pushing boundaries and exceeding expectations.</p>

      <div className="social">
        <a href="https://www.linkedin.com/in/rounakbasak/" target='_blank'>
          <p className='social-p'><LinkedInIcon sx={{ color: "white" }} /><span>Linked in</span></p>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61550757774438&mibextid=LQQJ4d" target='_blank'>
          <p className='social-p'><FacebookIcon sx={{ color: "white" }} /><span>Facebook</span></p>
        </a>
        <a href="https://www.instagram.com/_rou._.nak_/" target='_blank'>
          <p className='social-p'><InstagramIcon sx={{ color: "white" }} /><span>Instagram</span></p>

        </a>
        <a href="https://twitter.com/Rounak190" target='_blank'>

          <p className='social-p'><XIcon sx={{ color: "white" }} /><span>Twitter</span></p>
        </a>
        <a href="https://github.com/Rounakw" target='_blank'>
          <p className='social-p'><GitHubIcon sx={{ color: "white" }} /><span>GitHub</span></p>
        </a>


      </div>
    </div>
  )
}

export default Contact