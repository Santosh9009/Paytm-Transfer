import { useState } from "react";
import Button from "./Button";

const Users = () => {

  const [users, setUsers]=useState([{firstname:'santosh',lastname:'pati'}])

  return (
    <div className=" w-full flex flex-col gap-8">
      <h1 className="font-semibold">Users</h1>
      <div>
        <input
          type="text"
          placeholder="Search Users"
          className="w-full border-slate-200 border-2 py-2 px-4 rounded"
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
  
  return <div className="flex justify-between">
  <div className="flex">
      <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
              {user.firstname[0]}
          </div>
      </div>
      <div className="flex flex-col justify-center h-ful">
          <div>
              {user.firstname} {user.lastname}
          </div>
      </div>
  </div>

  <div className="flex flex-col justify-center h-ful">
      <Button label={"Send Money"} />
  </div>
</div>
  
}