import { useState } from 'react';
import {tabs, socials} from './data'
import './Navbar.css'
import portrait from '../../assets/portrait.webp'
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar-sidebar'>
          <div className='navbar-mobileheader'>
              <div className="navbar-header">
                <img src={portrait} alt="pedro's portrait" />
                  <div>
                  <h5>Pedro</h5>
                  <h6>Software Engineer</h6>
                  </div>
              </div>
              <a onClick={toggleMenu}>
              <TbMenu2/>
              </a>
          </div>
          <div className={`navbar-lists ${isMenuOpen ? 'active' : ''}`}>
          <ul>
        {
          tabs.map((tab, i) => (
            <li key={i}>
                    <a href={tab.link}>
                    {tab.icon}
                    {tab.title}
                    </a>
                </li>
            ))
          }
        </ul>
          <div className='navbar-footer'>
            <p>Follow me</p>
            <ul className='navbar-socials'>
            {
              socials.map((social, i) => (
                <li key={i}>
                <a href={social.link}>{social.icon}</a>
                </li>
              ))
            }
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
