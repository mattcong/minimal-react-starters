import React from 'react';
import '../styles/App.scss';


export function App() {
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="container">
            <h1>It's {days[new Date().getDay()]} - time to make a React App!</h1>
            <img className="logo" src={require("../assets/react-logo.png")} alt="React Logo" />
        </div>
    )
}