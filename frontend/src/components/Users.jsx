/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {

  const [users, setUsers]=useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/user/bulk/?filter=${name}`).then(res=>
    setUsers(res.data.user))
  }, [name])
  

  return (
    <div className=" w-full flex flex-col gap-8">
      <h1 className="font-semibold text-xl">Users</h1>
      <div>
        <input
          type="text"
          placeholder="Search Users"
          className="w-full border-slate-200 border-2 py-2 px-4 rounded"
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        {users.map((user,index)=><User key={index} user={user}/>)}
      </div>
    </div>
  );
};

export default Users;


function User({user}){
  const navigate = useNavigate();

  return <div className="flex justify-between">
  <div className="flex">
      <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2">
          <div className="flex justify-center items-center text-2xl">
              {user.firstname[0]}
          </div>
      </div>
      <div className="flex flex-col justify-center h-full text-lg">
          <div>
              {user.firstname} {user.lastname}
          </div>
      </div>
  </div>

  <div className="flex flex-col justify-center h-ful">
      <Button onPress={()=>navigate('/send?id='+user.id+ "&name="+user.firstname)} label={"Send Money"} />
  </div>
</div>
  
}