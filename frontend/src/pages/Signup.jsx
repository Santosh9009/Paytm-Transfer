import { useState , useEffect } from "react"
import Button from "../components/Button"
import Header from "../components/Header"
import Inputbox from "../components/Inputbox"
import Subheading from "../components/Subheading"
import Warning from "../components/Warning"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

    axios.get('http://localhost:3000/api/v1/me/',{
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    }).then((res)=>{
      if(res.data.name){
        navigate('/dashboard?name='+res.data.name)
      }
    })
}, [])

  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5 w-96 text-center shadow-md p-5 rounded-lg ">
      <Header heading={'Sign up'} />
      <Subheading Subheading={'Enter your information to create an account'} />
      <Inputbox value={firstname} onchange={e=>setFirstname(e.target.value) } label={'First Name'} placeholder={'John'}/>
      <Inputbox value={lastname} onchange={e=>setLastname(e.target.value)} label={'Last Name'} placeholder={'Doe'}/>
      <Inputbox value={username} onchange={e=>setUsername(e.target.value)} label={'Email'} placeholder={'jogndoe@gmail.com'}/>
      <Inputbox value={password} onchange={e=>setPassword(e.target.value)} label={'Password'} placeholder={'Jogn@123'}/>
      <Button label={'Sign up'} onPress={async()=>{
        const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
          username, firstname,lastname,password
        })
        localStorage.setItem('token',response.data.token)
        if(response.data.token){
          navigate('/dashboard?username='+username)
        }
        setFirstname('')
        setLastname('')
        setUsername('')
        setPassword('')
        
      }
      }/>
      <Warning text1={'Already have an account?'} text2={'Sign in'} to={'/signin'} />
        </div>
      </div>
  )
}

export default Signup