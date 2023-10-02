import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeUSer = () => {
    const LoadUser=useLoaderData();
    const [users,setUser]=useState(LoadUser);
    console.log(LoadUser);
    const handleDelete =(_id)=>{
        console.log("deleting user",_id);
       fetch(`http://localhost:5000/users/${_id}`,{
        method:'DELETE',
       })
       .then(res=>res.json())
       .then(data=>{
       if(data.deletedCount>0){
        alert('deleted successfully');
        const remainingUSer= users.filter(user=> user._id !=_id);
        setUser(remainingUSer);
       }
       })

    }
    return (
        <div>
        <h3> All USer Here </h3>
        <h5> Total User:{LoadUser.length} </h5>
        {
            users.map(user=><p key={user._id}> {user.name} {user.email} <button onClick={()=>handleDelete(user._id)}  >X</button> </p>)

        }
        </div>
    );
};

export default SeeUSer;