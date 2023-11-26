import React from 'react'
import '../Css/headerOption.css'
import { selectUser } from '../features/userSlice'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

function HeaderOption({title,Icon,avatar,onClick}) {
  const user = useSelector(selectUser); 
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption-icon'/>}
        {avatar && <Avatar className='headerOption-icon' src={user?.photoUrl}></Avatar>}
        <h3 className='headerOption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption