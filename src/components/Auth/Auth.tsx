import { auth } from "../../firebase";
import { OnClickButtonType } from "../../type";
import { ChangeEvent, useContext,useState  } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Auth = ():React.ReactElement=> {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('');
    const contextAuth = useContext(AuthContext);
    const history = useHistory();

    const handleAuth = async (e:OnClickButtonType) =>{
        e.preventDefault();

        if(e.target.name === 'join'){
            await auth.signInWithEmailAndPassword(email,password);
            history.push("/");
        } else if(e.target.name==='register') {
            await auth.createUserWithEmailAndPassword(email,password);
            history.push("/");
        }
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>):void=>{
        if(e.target.name === 'email') {
            setEmail(e.target.value);
        } else if(e.target.name === 'password'){
            setPassword(e.target.value);
        }
    }
    return <form className="auth"> 
        <div className="emailField">
            <span>Email:</span><input name='email' type="email" value={email} onChange={handleChange} placeholder="Enter your email"/>
        </div>
        <div className="passwordField">
            <span>Password:</span> <input name='password' value={password} type="password" onChange={handleChange} placeholder="Enter your password"/>
        </div>
        <button name='join' onClick={handleAuth}>Join</button>
        <button  name='register' onClick={handleAuth}>Register</button>
    </form>
}
