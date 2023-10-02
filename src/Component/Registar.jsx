import React from 'react';

const Registar = () => {
    const handleRegistar=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const user={name,email};
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('data inserted successfully')
                form.reset('');
            }
        })
    }
    return (
        <div>
          <h1> Registar here </h1>  
          <form onSubmit={handleRegistar}>
            <input type="text" name='name' placeholder='enter your name here ' /> <br />
            <input type="email" name="email" id="" placeholder='enter your email here' /><br />
            <button type="submit">Add User</button>
          </form>
        </div>
    );
};

export default Registar;