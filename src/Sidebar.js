import './Sidebar.css';
import {Avatar,IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChats from './SidebarChat';
import SidebarChat from './SidebarChat';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import db from "./firebase";
const Sidebar = () => {

//const [rooms,setRooms]=useState([]);
const [rooms, setRooms] = useState([]);
const[{user},dispatch]=useStateValue();

// useEffect(()=>{

// // const unsubscribe= 
// db.collection('rooms').onSnapshot(snapshot=>(
//     //console.log()
//     setRooms(snapshot.docs.map(doc =>
//     (
//         {
//             id:doc.id,
//             data:doc.data(),

//         }
//     )    ))
// ));
// // return ()=>{
// //     unsubscribe();
// // }
// },[]);

useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
        setRooms(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        )

        ))
    ));

    return () => {
        unsubscribe();
    }
},[]);

    return ( 
        <div className='sidebar'>
<div className="sidebar__header">
   
    <Avatar src={user?.photoURL}/>
     
    <div className="sidebar__headerRight">
      <IconButton> <DonutLargeIcon /></IconButton> 
       <IconButton><ChatIcon /></IconButton>  
        <IconButton><MoreVertIcon /></IconButton> 
    </div>
</div>

<div className="sidebar__search">
<div className="sidebar__searchContainer">
<SearchOutlinedIcon>

</SearchOutlinedIcon>
<input placeholder='search or start new chat' type='text' />
</div>
</div>


<div className="sidebar__chats">
<SidebarChat  addnewChat/>

{/* {rooms.map(room =>(
    
    <SidebarChat  
    key={room.id} 
    id={room.id}
    name={room.data.name}
     />
))} */}

{rooms.map((room)=> { 
    return <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
})}

</div>


        </div>
     );
}
 
export default Sidebar;