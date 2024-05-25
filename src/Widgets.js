import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const handleNews=(heading,subtitle)=>(
  <div className="widgets_article">
    <div className="widgets_left">
    <FiberManualRecordIcon/>
    </div>
    <div className="widgets_right">
      <h3>{heading}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {handleNews('this is heading','this is subtitle')}
      {handleNews('Space Milestone',"NASA's Artemis Program Returns to Moon")}
      {handleNews('AI Advancements','OpenAI Unveils GPT-4 Model')}
      {handleNews('E-commerce Evolution','Amazon Launches Sustainable Packaging Initiative')}
    </div>
  )
}

export default Widgets