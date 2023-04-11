import React from 'react'
import { images, data } from '../../constants'
import './Footer.css'

const Footer = () => (
    <section className="app__footer">
    <div className="app__posts_bg-2">
        <img className="dots" src={images.element__full} alt="element" />
    </div>
    <div className="app__footer_left-side">
      <div className="">
        <img
          src={images.logo__white}
          alt="logo"
        />
        <p className="p__text">
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </p>
        <p className="p__text">
        ©Trafalgar PTY LTD 2020. All rights reserved
      </p>
      </div>
    </div>
    <div className="app__footer_links">
    {data.footerLinks.map((footerLinks) => (
          <div key={footerLinks.title}>
            <h4>
              {footerLinks.title}
            </h4>
            <ul>
              {footerLinks.links.map((link, index) => (
                <li
                  key={link.name}
                ><a href={link.link}>
                  {link.name}</a>
                </li>
                
              ))}
            </ul>
          </div>
        ))}
    </div>

    </section>
  )

export default Footer