import { useState } from "react";
import Header from "../components/Header";
import Inputbox from "../components/Inputbox";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

const Send = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const [amount, setAmount] = useState();

  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-20 w-96 text-center shadow-md p-3 rounded-lg">
        <Header heading={"Send Money"} />
        <div className="flex flex-col gap-8 items-start p-5">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 bg-green-500 rounded-full flex justify-center items-center">
              <span className="text-white text-2xl font-semibold">{name[0].toUpperCase()}</span>
            </div>
            <div className="text-3xl font-semibold">{name}</div>
          </div>
          <Inputbox value={amount} label={'Amount (in Rs)'} placeholder={'Enter amount'} onchange={(e)=> setAmount(e.target.value)}/>
          <button className="w-full bg-green-500 active:bg-black text-white font-bold py-2 px-4 rounded-md text-xl" onClick={()=>{
            axios.post('http://localhost:3000/api/v1/account/transfer',{
              to:id,
              amount: amount
            },{
              headers:
              {'authorization': 'Bearer ' + localStorage.getItem('token')}
            })
            setAmount(0)
          }}>
          Initiate Transfer
</button>
        </div>
      </div>
    </div>
  );
};

export default Send;
