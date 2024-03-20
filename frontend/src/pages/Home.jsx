import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col gap-16 justify-center items-center">
      <div className="flex justify-center items-center text-7xl font-extrabold rounded-full h-72 w-72  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <span className=" text-blue-900">pay</span>
        <span className="text-blue-400">tm</span>
      </div>
      <div className="flex gap-10">
      <Button label={'Signup'} onPress={()=>{
        navigate('/signup')
      }}/>
      <Button label={'Login'} onPress={()=>{
        navigate('/signin')
      }}/>
      </div>
      </div>
  )
}

export default Home