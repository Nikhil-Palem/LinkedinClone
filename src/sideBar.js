import React from 'react'
import './sideBar.css'
import {Avatar} from "@material-ui/core";
function sideBar() {
    const recentItem=(topic)=>(
        <div className="topic">
            <span className='topicHash'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className='sidebarTop'>
        <img src="https://img.freepik.com/free-vector/pride-gradient-1_78370-282.jpg" alt="" srcset=""/>
            <Avatar className='Avatar'/>
            <h3>Nikhil Palem</h3>
            <h4>nikhilpalem93466@gmail.com</h4>
        </div>
        <div className='sidebarstats'>
            <div className='sidebarstat'>
                <p>connections</p>
                <p className='statcount'>500</p>
            </div>
            <div className='sidebarstat'>
                <p>who viewed you</p>
                <p className='statcount'>200</p>
            </div>
        </div>
        <div className='sidebarbottom'>
            <p>Recent</p>
            {recentItem('programming')}
            {recentItem('web development')}
            {recentItem('software engineering')}
            {recentItem('react js')}
            {recentItem('postgresql')}
        </div>
    </div>
  )
}

export default sideBar