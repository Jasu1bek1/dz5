import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
    const [users, setUsers] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{
        setUsers(data)
    })
}, [])



  return (
    <div>
      <h1>список имен</h1>
      {
       users.map(user=>(
        <li key={users.id}>
        <Link to={`/user/${user.id}`}>
            {user.username}
        </Link>
    </li>
       ))
      } 
    </div>
  )
}
