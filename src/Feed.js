import React, { useState } from 'react'
import './Feed.css'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InputOptions from './InputOptions';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import PostSection from './Post';
import FlipMove from 'react-flip-move';
function Feed() {
    const [Description, setDescription] = useState('');
    const [Message,setMessage]=useState([]);
    function handleKeyDown(e){
        if(e.key==='Enter'){
            setMessage(preVal=>{
                return ([...preVal,{ id: Date.now(), text: Description }])
            });
            setDescription('');
            e.preventDefault();
        }
    }
    return (
        <div className='feed'>
            <div className='feedTop'>
                <div className='feedInput'>
                    <DriveFileRenameOutlineIcon />
                    <form>
                        <input type="text" onChange={e => {
                            setDescription(e.target.value)
                        }} value={Description} onKeyDown={handleKeyDown} placeholder='send a post...' />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='feedTopOptions'>
                    <InputOptions Icon={PhotoLibraryIcon} color='#70BSF9' title='photos' />
                    <InputOptions Icon={SubscriptionsIcon} color='#E7A33E' title='video' />
                    <InputOptions Icon={EventNoteIcon} color='#C0CBCD' title='Events' />
                    <InputOptions Icon={CalendarViewDayIcon} color='#7FC15E' title='Write article' />
                </div>
            </div>
            <FlipMove>
            {Message.map((M)=>(<PostSection name='nikhil palem' description='nikhilpalem93466@gmail.com' message={M.text} id={M.id}  />))}
            </FlipMove>
        </div>
    )
}

export default Feed