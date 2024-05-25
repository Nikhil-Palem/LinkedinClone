import React from 'react'
import './InputOptions.css'
function InputOptions(props) {
  return (
    <div className='inputOptions'>
        <props.Icon style={{color:props.color}}/>
        <h3>{props.title}</h3>
    </div>
  )
}

export default InputOptions