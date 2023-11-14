import { Edit } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import InputOption from './InputOption'
import '../Css/feed.css'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotesIcon from '@mui/icons-material/Notes';
import Post from './Post';

const Feed = () => {
    const [posts,setPosts] = useState([]);
    const sendPost = e => {
        e.preventDefault();
    };
   
  return (
    <div className='feed'>
        <div className='feed-inputContainer'>
            <div className='feed-input'>
                <Edit/>
                <form>
                    <input type='text'/>
                    <button type='submit' onClick={sendPost}> Send </button>
                </form>
            </div>
            <div className='feed-inputOption'>
                {/* Input option */}
                <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                <InputOption Icon={NotesIcon} title='Write article' color='#7fc15e' />
            </div>
        </div>
        {posts.map((post)=>(<Post/>))}
        <Post name='Zajjaj Bin Sana'
        description='this is a cool built '
        message='Wow this is a linkedin Clone'
        
        
        />
        
        
        </div>
  )
}

export default Feed
