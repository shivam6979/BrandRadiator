import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AdminPage.css'

function AdminPage(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [editMode, setEditMode] = useState(false);
    const [editUserId, setEditUserId] = useState(null);

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/getUser')
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
          const updatedUsers = users.map((user) =>
            user.id === editUserId
              ? { id: user.id, username: username, email: email, password: password }
              : user
          );
          setUsers(updatedUsers);
          setEditMode(false);
          setEditUserId(null);
        } else {
          const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
          };

          setUsers((prevUsers) => [...prevUsers, newUser]);
        }
        setUsername('');
        setEmail('');
        setPassword('');
      };


// for updating the user
const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setUsername(userToEdit.username);
      setEmail(userToEdit.email);
      setPassword(userToEdit.password);
      setEditMode(true);
      setEditUserId(userId);
    }
  };

// for deleting the user
    const handleDelete = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      };

    return (
        <>
        <h1>AdminPage</h1>
            <h2>Add user</h2>
                <div className="page_parent">
                    <form onSubmit={handleSubmit}>
                        <div className="adminpageinput">
                            <input type="text" placeholder="username" value={username} name="username" required onChange={(e)=>setUsername(e.target.value)}/>
                            <input type="email" placeholder="Useremail" value={email} name="useremail" required onChange={(e)=>setEmail(e.target.value)}/>
                            <input type="password" placeholder="********" value={password}  name="userPass" required onChange={(e)=>setPassword(e.target.value)}/>
                            <span>{!editMode ? <button className="button-add" type="submit">Add user</button>: <button className="button-add" type="submit">Add updated user</button> }            <Link to='/'><button>Sign out</button></Link></span>

                        </div>
                    </form>
                    {users.length>0 ?(
                        <div className="display">
                            <h2>User List</h2>
                            <table className="table">
                                <thead>
                                    <tr className="tr">
                                        <th className="th">Username </th>
                                        <th>   Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user,id)=>(
                                        <tr key={user.id}>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td><button onClick={() => handleEdit(user.id)}>Edit</button> <button onClick={() => handleDelete(user.id)}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ):null
                    }

        </div>
        </>
    )
}
export default AdminPage