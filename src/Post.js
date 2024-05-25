import React,{forwardRef} from 'react'
import './Post.css'
import InputOptions from './InputOptions';
import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
const Post=forwardRef((props,ref)=> {
  return (
    <div ref={ref} className='post'>
        <div className='postHead'>
            <Avatar/>
            <div className='postInfo'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <div className='postBody'>
            <p>{props.message}</p>  
        </div>
        <div className='postButtons'>
        <InputOptions Icon={ThumbUpOffAltIcon} color='gray' title='Like'  />
        <InputOptions Icon={ChatIcon} color='gray' title='Comment'  />
        <InputOptions Icon={ShareIcon} color='gray' title='Share'  />
        <InputOptions Icon={SendIcon} color='gray' title='Send'  />
        </div>
    </div>
  )
})

export default Post