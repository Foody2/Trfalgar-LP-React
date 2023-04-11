import React from 'react'

import { images, data } from '../../constants'
import  { Button } from '../../components'
import './Services.css'

    const ServiceCard = ( { service: { imgUrl, title, subtitle } } ) => (
            <div className="app__service-card">
                <img src={imgUrl} alt="service" />
                <h3>{title}</h3>
                <p>{subtitle}</p>
        </div>
      )

      const Services = () => (
        <div className="app_services section__padding" id="awards">
            <div className="app_services_bg-1">
                <img src={images.blob__service} alt="blob" />
            </div>
            <div className="app_services_bg-2">
                <img src={images.element__full} alt="element" />
            </div>
          <div className="app__services_info">
            <h2 className="text__center">Our services</h2>
            <p className="p__text text__center">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
          </div>
            <div className="app__service_container">
                <div className="app__services_cards">
                {data.services.map((service) => <ServiceCard service={service} key={service.title} />)}
                </div>
                <Button  style={{ margin: 'auto' }} title="Learn more" />
            </div>
            
        </div>
      );
      
      export default Services;
  
