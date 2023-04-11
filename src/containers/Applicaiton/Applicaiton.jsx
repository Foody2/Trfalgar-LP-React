import React from 'react'

import { images } from '../../constants'
import { BsArrowDown } from 'react-icons/bs';
import './Application.css'

const Applicaiton = (icon) =>  (
    <div className="app__app section__padding app__wrapper">
        <div className="app__app_info">
            <h2 className="p__headings">Download our mobile apps</h2>
            <p className="p__text">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
            <button type="button" className="app__app-button">Read More <BsArrowDown /></button>
        </div>
        <div className="app__wrapper_app_img">
            <img src={images.app__image} alt="app image" />
        </div>
    </div>
  )


export default Applicaiton