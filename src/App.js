
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  //const [user,setUser]=useState(null);
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    console.log(user);
  });
  return (
    
    <div className="App">
      {!user? (<Login />):(
         <Router>
      <div className='app__body'>
       
      <Sidebar></Sidebar>
         <Routes>
            <Route path='/rooms/:roomId' element={  <Chat></Chat>} >
            
        
            </Route>

            <Route path='/' element={<h1>home screen</h1>}>
              
            </Route>
            </Routes>
       
           
      </div>
      </Router>
      )}
    </div>
   
  );
}

export default App;
