import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/gpt3/logo.svg";
import './navbar.css';


// BEM convention

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#workexperience">Experience/Education</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#skills">Skills</a></p>
  <p><a href="#contact">Contact Me</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
            <Menu />
        </div>
      </div> 
      <div className='gpt3__navbar-sign'>
        {/* <p> Sign In </p> */}
        <a href="https://drive.google.com/file/d/1ax305RDdGgimAMPZwTQJ49pK_2q0MUDk/view?usp=sharing" target="_blank">
            <button type='button'>Resume</button>
        </a>

      </div>  
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'> 
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                {/* <p> Sign In </p> */}
                <a href="https://www.google.com" target="_blank">
                    <button type='button'>Resume</button>
                </a>

            </div> 
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar