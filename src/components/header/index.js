import React from 'react'
import {BsFillCreditCard2FrontFill} from 'react-icons/bs';
import './header.css'

const Header = () => {
    return (
        
        <div className="header-container">
        <div className="header">
          <div className="header-logo">
            Xpense <span style={{marginLeft:10}}></span>
            <BsFillCreditCard2FrontFill/>
          </div>
          <div className="header-button">
            <a
              href="https://github.com/Tanvir-Niloy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original colored" />
              Star
            </a>
          </div>
        </div>
      </div>
    )
}

export default Header
