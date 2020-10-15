import React from 'react';
import './App.css';
import ContactMe from './sections/contactMe';
import Recommendation from './sections/recommendation';
import HomePage from './pages/homePage';
import Message from './components/message';

function App() {
    return ( <
        div className = "App" >
        <
        Message / >
        <
        HomePage name = "mona" / >
        <
        HomePage name = "mobin" / >
        <
        HomePage name = "amir" / >
        <
        ContactMe / >
        <
        Recommendation / >
        <
        /div>
    );
}

export default App;