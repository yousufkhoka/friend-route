import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Friend = () => {
    const {friendId} = useParams()
    const [friend , setFriend] = useState({})
    useEffect(() => {
       const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
       fetch(url)
       .then(res => res.json())
       .then(data => setFriend(data))
    },[])
    const {name , email , phone}= friend
    const friendStyle = {
        width:"800px",
        padding:'20px',
        margin:'100px auto',
        border:'2px solid tomato'
    }
    return (
        <div style={friendStyle}>
            <h3> friend id : {friendId}</h3>
            <h2>name: {name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone} </p>
        </div>
    );
};

export default Friend;