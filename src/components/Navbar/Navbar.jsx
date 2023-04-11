import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="section__padding app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
            <li className="p__text active"><a href="#home"></a>Home</li>
            <li className="p__text"><a href="#doctor"></a>Find a doctor</li>
            <li className="p__text"><a href="#apps"></a>Apps</li>
            <li className="p__text"><a href="#testimonials"></a>Testimonials</li>
            <li className="p__text"><a href="#aboutus"></a>About us</li>
        </ul>
        <div className="app__navbvar-smallscreen">
        <GiHamburgerMenu color="#458FF6" fontSize={27} onClick={() => setToggleMenu(true)} />  
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <GrFormClose color="#ffffff" fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="#home"></a>Home</li>
            <li className="p__opensans"><a href="#about"></a>About</li>
            <li className="p__opensans"><a href="#menu"></a>Menu</li>
            <li className="p__opensans"><a href="#awards"></a>Awards</li>
            <li className="p__opensans"><a href="#contact"></a>Contact</li>
          </ul>
        </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar