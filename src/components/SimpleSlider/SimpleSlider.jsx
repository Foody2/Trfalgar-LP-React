import React, { Component } from "react";
import Slider from "react-slick";

import { images, data } from '../../constants'
import './slick.css'
import './slick-theme.css'
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="app__testimonials_slider">
        <img className="app__testimonial-bg" src={images.element} alt="dots" />
        <Slider {...settings}>
            {data.testimonials.map((testimonial) => <TestimonialCard testimonials={testimonial} key={testimonial.testName} />)}
        </Slider>
      </div>
    );
  }
}