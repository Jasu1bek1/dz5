import React from "react"
import  { useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import './style.css'

export default function UserDetails() {
    const [user, setUser] = useState(null)
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if(response.ok){
            setLoading(false)
            }
         return response.json()  
        })
        .then(data=>{
            setUser(data)
        })
    }, [id])
    
    if(loading ){
        return <div className="loader"></div>
    }

  return (
    <div>
        <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>UserName: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
      <Link to="/">Go Home</Link>
    </div>
    </div>
  )
}
