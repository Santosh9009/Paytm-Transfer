import { useNavigate } from "react-router-dom";
import Button from "./Button"

const Appbar = ({name}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-start justify-between py-4 px-8 text-xl">
      <div className="font-medium text-2xl">Paymets App</div>
      <div className="flex items-center gap-3 font-medium">
        <div>Hello, {name}</div>
        <div className="flex justify-center items-center w-8 h-8 bg-blue-300 rounded-full">{name[0].toUpperCase()}</div>
        <Button onPress={()=>{
          localStorage.removeItem('token')
          if(!localStorage.getItem('token')){
            navigate('/')
          }
        }} label={'Logout'}/>
        </div>
    </div>
  )
}

export default Appbar