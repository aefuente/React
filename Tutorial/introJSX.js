import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Andre Fuentes';

function formatName(user){
    return user.firstname + ' ' + user.lastname;
}
function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}! </h1>;
    }
    else{
        return <h1>Hello, Stranger. </h1>;
    }
}

const user = {firstname: 'Andre',
              lastname: 'Fuentes'
             };

const element = (<h1>{getGreeting(user)}</h1>);

ReactDOM.render(
    element,
    document.getElementById('root')
);


