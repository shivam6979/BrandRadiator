import React, { useState } from "react";

import '../../App.css'
import './SignUp.css'

export default function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log('hi')
    }

    return (
        <div>
               <form className="form">
                <input type='text' placeholder="enter your name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type='email' placeholder="enter your email" name="name" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type='password' placeholder="enter your password" name="name" onChange={(e)=>setPass(e.target.value)} />
                <button onClick={handleSubmit}>sign  up</button>
               </form>


        </div>
    )
}