import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './ContactUs.css'

function ContactUs(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  // saving user inside db
  function saveUser(){
    let data = {name, email}
    fetch('',{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      result.json().then((res)=>{
        console.log('result    ', res)
      })
    })
  }


    return (
      <>
        <div className='contact'>
        <h1>contact us</h1>
              <div className='inner'>
                <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)} />
                <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                <button onClick={saveUser}>send Request</button>
              </div>
        </div>
      </>
    )
}
export default ContactUs