import React from 'react'
import '../Css/header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import HeaderOption from './HeaderOption';
function Header() {
  return (
    <div className='header'>
         <div className='header-left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'alt='logo'/>
            <div className='header-search'>
            <SearchIcon/>
            <input type='text'/>
            </div>
            
            </div>   
            
        <div className='header-right'>
            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Network' Icon={PeopleIcon}/>
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title='Messaging' Icon={TextsmsRoundedIcon}/>
            <HeaderOption title='Notification' Icon={NotificationsRoundedIcon}/>
            <HeaderOption avatar='https://media.licdn.com/dms/image/C4D03AQEvtNZwewM2NA/profile-displayphoto-shrink_800_800/0/1654463791954?e=2147483647&v=beta&t=nlt-vlxJmzx2itX217MjkTWrq5Wrg2yQvb8-5LnjoAQ' title='Me'/>
        </div>
            
    
    
    </div>
  )
}

export default Header