import React from 'react'
import { BsArrowDown } from 'react-icons/bs';
import './Button.css'

const button = ( {title, icon} ) =>  (
    <button type="button">{title}{icon && <BsArrowDown type={icon} />}</button>
  )


export default button