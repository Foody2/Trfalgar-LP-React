import React from 'react'

import { Button } from '../../components'
import { images } from '../../constants'
import './Health.css'

const Health = () => (
    <div className="app__healt_providers section__padding app__wrapper">
        <img className="app__healt_providers-bg" src={images.element} alt="dots" />
        <div className="app__wrapper_health_img">
            <img src={images.healt__providers} alt="health providers" />
        </div>
        <div className="app__healt_providers_info">
            <h2 className="p__headings">Leading healthcare providers</h2>
            <p className="p__text">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
            <Button title="Learn more" />
        </div>
    </div>
  )


export default Health