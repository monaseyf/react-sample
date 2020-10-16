import React from 'react';
import './App.css';
import ContactMe from './sections/contactMe';
import Recommendation from './sections/recommendation';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <EventBind/>
      <ContactMe />
      <Recommendation/>
    </div>
  );
}

export default App;
 