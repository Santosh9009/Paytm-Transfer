import { useState } from "react"
import Button from "../components/Button"
import Header from "../components/Header"
import Inputbox from "../components/Inputbox"
import Subheading from "../components/Subheading"
import Warning from "../components/Warning"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  return (
    <div className="w-full h-screen flex justify-center items-center">
           <div className="flex flex-col gap-5 w-96 text-center shadow-md p-5 rounded-lg">
      <Header heading={'Sign in'} />
      <Subheading Subheading={'Enter your credentials to access your account'} />
      <Inputbox onchange={(e)=>{setUsername(e.target.value)}} label={'Email'} placeholder={'jogndoe@gmail.com'}/>
      <Inputbox onchange={(e)=>{setPassword(e.target.value)}} label={'Password'} placeholder={''}/>
      <Button onPress={async()=>{
        const res = await axios.post('http://localhost:3000/api/v1/user/signin',{
          username,
          password
        })
        localStorage.setItem('token',res.data.token)
        console.log(res.data.token)
        if(res.data.token){
          navigate('/dashboard?username='+username)
        }
        setUsername('')
        setPassword('')
      }} label={'Sign in'}/>
      <Warning text1={`Don't have an account?`} text2={'Sign Up'} to={'/signup'} />
        </div>
      </div>
  )
}

export default Signin