import React from 'react';
import './App.css';
import ContactMe from './sections/contactMe';
import Recommendation from './sections/recommendation';
import HomePage from './pages/homePage';


function App() {
    return ( <
        div className = "App" >
        <
        HomePage / >
        <
        ContactMe / >
        <
        Recommendation / >
        <
        /div>
    );
}

export default App;