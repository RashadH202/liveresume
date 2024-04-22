import React from 'react'
import { useState } from 'react'
import './sidebar.css'

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
  return (
   <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href='#home' className='nav__logo'>
            <img src='{Logo}' alt=''/>
        </a>
        
        <nav className='nav'>
            <div className='nav__menu'>
                <ul className='nav__list'>
                <li className='nav__item'>
                    <a href="#home" className='nav__link'>
                        <i className="icon-home"></i>
                    </a>
                </li>
                <li className='nav__item'>
                    <a href="#about" className='nav__link'>
                    <i className="icon-user"></i>
                    </a>
                </li>
                <li className='nav__item'>
                    <a href="#portfolio" className='nav__link'>
                    <i className="icon-briefcase"></i>
                    </a>
                </li>
                <li className='nav__item'>
                    <a href="#resume" className='nav__link'>
                    <i className="icon-envelope-letter"></i>
                    </a>
                </li>
                <li className='nav__item'>
                    <a href="#contact" className='nav__link'>
                    <i className="icon-bubble"></i>
                    </a>
                </li>
                </ul>
            </div>
        </nav>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
      
    </div>
   </>
  )
}

export default Sidebar