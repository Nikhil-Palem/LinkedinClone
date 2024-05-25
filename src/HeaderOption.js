import React from 'react'
import './HeaderOption.css'
function HeaderOption(props) {
  return (
    <div className='HeaderOption'>
        {props.Icon&&<props.Icon className='HeaderOptionIcon'/>}
        <h3 className='HeaderOptionTitle'>{props.title}</h3>
    </div>
  )
}

export default HeaderOption