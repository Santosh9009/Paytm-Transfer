import { useState, useEffect } from "react"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios"
import { useSearchParams } from 'react-router-dom';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/account/balance',{
    headers:{
      'authorization': 'Bearer '+ localStorage.getItem('token')
    }}).then((res)=>{
      setAmount(res.data.balance.toFixed(2) )
    })
  }, [])
  

  return (
    <div className="w-full">
      <Appbar name={name}/>
      <div className="w-full px-8">
      <Balance amount={amount}/>
      <Users />
      </div>
    </div>
  )
}

export default Dashboard