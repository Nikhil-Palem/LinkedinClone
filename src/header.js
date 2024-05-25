import React from 'react'
import HeaderOption from './HeaderOption';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import  Avatar  from '@mui/material';
function header() {
  return (
    <div className='head'>
      <div className='headerleft'>
        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" srcset="" />
        <div className='searchinput'>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className='headerright'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={MessageIcon} title='Message' />
        <HeaderOption Icon={NotificationsActiveIcon} title='Notifications' />
        <HeaderOption  Icon={AccountCircleIcon} title='Me'/>
      </div>
    </div>
    
  );
}

export default header;