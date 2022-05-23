import React,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router'
const Login = ({setLoginUser}) => {
  const history = useNavigate()

  const [user,setUser] = useState({
    email:"",
    password:"",
  })
  const handleChange=e=>{
    const {name,value} = e.target;
    setUser({
      ...user,[name]:value
    })
  }
  const login =()=>{
    axios.post("http://localhost:9002/login",user)
    .then(res=>{
      alert(res.data.message)
      setLoginUser(res.data.user)
      history("/");
    })
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email'/>
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter your Password'/> 
      <div onClick={login} className='button'>Login</div>
      <div>or</div>
      <div className='button' onClick={()=>history("/register")}>Register</div>
    </div>
  )
}

export default Login