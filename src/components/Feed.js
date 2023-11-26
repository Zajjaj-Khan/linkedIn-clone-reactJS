import { Edit } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import InputOption from './InputOption'
import '../Css/feed.css'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotesIcon from '@mui/icons-material/Notes';
import Post from './Post';
import { db } from './firebase'; 
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
const Feed = () => {
    const user = useSelector(selectUser)
    const [input,setInput] = useState('')
    const [posts,setPosts] = useState([]);
   
    useEffect(() => {
      db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot => 
        setPosts(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        ))

    },[])
    
    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
        name:user.displayName,
        description:user.email,
        message:input,
        photoUrl:user.photoUrl || '',
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };

  return (
    <div className='feed'>
        <div className='feed-inputContainer'>
            <div className='feed-input'>
                <Edit/>
                <form>
                    <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
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
        <FlipMove>
        {posts.map(({id,data:{name,description,message,photoUrl}})=>(<Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
        />))} 

        </FlipMove>
          
        </div>
  )
}

export default Feed
