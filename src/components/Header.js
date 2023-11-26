import React from 'react'
import '../Css/header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';
function Header() {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
         <div className='header-left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'alt='logo'/>
            <div className='header-search'>
            <SearchIcon/>
            <input placeholder="Search" type='text'/>
            </div>
            
            </div>   
            
        <div className='header-right'>
            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Network' Icon={PeopleIcon}/>
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title='Messaging' Icon={TextsmsRoundedIcon}/>
            <HeaderOption title='Notification' Icon={NotificationsRoundedIcon}/>
            <HeaderOption avatar={true} title='Me'
            onClick={logoutApp}
            />
        </div>
            
    
    
    </div>
  )
}

export default Header