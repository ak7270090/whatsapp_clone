import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import './SidebarChats.css'
import db from './firebase';
import { Link } from 'react-router-dom';
const SidebarChat = ({addnewChat,id,name}) => {
const[seed,setSeed]=useState("");
const [messages, setMessages] = useState("");
    
useEffect(() => {
    if(id){
        db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        })
    }
}, [id]);
useEffect(()=>{
setSeed(Math.floor(Math.random()*5000));
},[]);

const createChat=()=>{
    const roomName=prompt("please enter name for chat");
    if(roomName){
db.collection('rooms').add({
    name:roomName,}
)
    }
};

    return !addnewChat ? (  
        <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
<div className="sidebarChat_info">
    <h2>{name}</h2>
    <p>{messages[0]?.message}</p>
</div>
</div>
</Link>
    ) :(
        <div onClick={createChat} className='sidebarchat'>
            <h3 className='add-new-chat-title'>Add new chat</h3>
        
        </div>
    )
}
 
export default SidebarChat;