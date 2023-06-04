import React, { useEffect, useState } from "react";
import './Admin.css'
import AdminPage from "./AdminPage";


function Admin(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [ok, setOk] = useState(false)
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('').then((result)=>{
            result.json().then((res)=>{
                setData(res)
            })
        })
    })


    function handleLogin(e){
        e.preventDefault()
        let adminId = 'admin12@gmail.com'
        let pass1 = 'admin12@'
        if(email===adminId && pass===pass1){
            setOk(true)
        }
        else{
            alert('Wrong Credentials')
        }
    }
    return(
        <div className="main">
           {!ok ? (

           <div className="parent1">
                <h1>Admin login page</h1>
                <form className="form1">
                    <input type="email" placeholder="Admin Id" name="admin" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="********" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>)
            :
            ( <AdminPage/>)}

        </div>
    )
}
export default Admin