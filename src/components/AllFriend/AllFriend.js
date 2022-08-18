import React from 'react';
import { Link } from 'react-router-dom';

const AllFriend = (props) => {
    const {name,email,id} = props.users
    console.log(props.users)
    const allFriendStyle ={
        border:'2px solid tomato',
        padding: '20px',
        margin:'20px'
    }
    return (
        <div style={allFriendStyle}>
            <h3>{name}</h3>
            <p>Email : {email}</p>
            <Link to={`/friend/${id}`} > click me</Link>
        </div>
    );
};

export default AllFriend;