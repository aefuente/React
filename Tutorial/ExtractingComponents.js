import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

<div id="root"></div>;

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    const element = <Welcome name="Andre" />
    function App(){
        return(
        <div>
            <Welcome name="Andre" />
            <Welcome name="Madisyn" />
            <Welcome name="Annie"/>
        </div>
        );
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

