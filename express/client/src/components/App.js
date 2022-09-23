import React, { useState, useEffect } from 'react';
import '../styles/App.scss';


export function App() {

    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch('/message')
            .then(res => res.json())
            .then(data => setMessage(data))
    }, [])

    return (
        <div className="container">
            <h1>{message}</h1>
            <img className="logo" src={require("../assets/react-logo.png")} alt="React Logo" />
        </div>
    )
}