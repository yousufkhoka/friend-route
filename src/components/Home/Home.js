import React, { useEffect, useState } from 'react';
import AllFriend from '../AllFriend/AllFriend';

const Home = () => {
    const [friend , setFriend] = useState([])

   useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setFriend(data))
   },[])
    return (
        <div>
            <h1>all friend : {friend.length}</h1>
        {
            friend.map(users => <AllFriend users={users}></AllFriend>)
        }
        </div>
    );
};

export default Home;