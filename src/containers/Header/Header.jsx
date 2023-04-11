import React from 'react'

import images from '../../constants/images'
import './Header.css';

const Header = () => (
    <div className="app__header section__padding app__wrapper">
        <div className="app__header-element">
            <img src={images.element} alt="dots" />
        </div>
        <div>
            <h1 className="app__wrapper_info app__headings">Virtual healthcare for you</h1>
            <p className="p__text__heading">Trafalgar provides progressive, and affordable  healthcare, accessible on mobile and online for everyone</p>
            <div className='app__cta-btn'>
                <button type='button'>Consult today</button>
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={images.hero__img} alt="hero image" />
        </div>
    </div>
  )


export default Header