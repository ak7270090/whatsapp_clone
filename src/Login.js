import { Button } from '@mui/material';
import './Login.css';
import { auth,provider } from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';
const Login = () => {
    const [{},dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>
            
           { // console.log(result.user)
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
        })

            .catch((error)=>alert(error.message));
    };
    return ( 
        <div className='login'>
            <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button  onClick={signIn}>Sign in With Google</Button>
           </div>
            </div>
        
     );
}
 
export default Login;