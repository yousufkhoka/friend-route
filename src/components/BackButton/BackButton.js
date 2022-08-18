import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory()
    const backHome = ()=> {
       history.push('/Home')
    }
    return (
        <div>
            <h1>hollo</h1>
            <button onClick={() => history.goBack()}>Back</button>
            <button onClick={backHome}>Home</button>
        </div>
    );
};

export default BackButton;