import React from 'react'

import { images, data } from '../../constants'
import './TestimonialCard.css'

    const TestimonialCard = ( { testimonials: { testImg, testName, testTitle, testimonial } } ) => (
        <div className="app__teastimonials-card .section__padding">
            <div className="app__testimonials-intro">
                <img src={images.element__testimonials} alt="dots" />
                <h2>What our customer are saying</h2>
            </div>
            <div className="app__testimonials_info app__wrapper ">
                <div className="app__testimonals_left flex__center">
                    <div>
                        <img src={testImg} alt="avatar" />
                    </div>
                    <div className="app__testimonals_left-text">
                        <h3>{testName}</h3>
                        <h4>{testTitle}</h4>
                    </div>  
                    
                </div>
                <div className="app__testimonials_testimonial">
                    <p>{testimonial}</p>
                </div>
            </div>
        </div>    

  )


  export default TestimonialCard