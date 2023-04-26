import "./login.css";
import {useContext, useRef} from "react"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
const email = useRef()
const password = useRef()
const {user, isFetching, err, dispatch} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
   loginCall({email,password}, dispatch)
  }
  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Niger's coder</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Niger's coders.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox"  onSubmit={handleSubmit}>
            <input 
            placeholder="Email" 
            type="email" 
            className="loginInput"
             required 
            ref={email} 
            />
            <input 
            placeholder="Password" 
            type="password"
             className="loginInput" 
             minLength={6}
             required ref={password} 
             />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
