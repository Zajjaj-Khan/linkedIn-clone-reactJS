import React from 'react'
import '../Css/post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className='post-header'>
        <Avatar/>
        <div className='post-info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>
        <div className='post-body'>
            <p>{message}</p>
        </div>
        <div className='post-buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray'/>
            <InputOption Icon={CommentOutlined} title='Comment' color='gray'/>   <InputOption Icon={ShareOutlined} title='Share' color='gray'/>   <InputOption Icon={SendOutlined} title='Send' color='gray'/>
        </div>
    </div>
    
  )
}

export default Post