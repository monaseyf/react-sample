import React from 'react';
import './App.css';
import ContactMe from './sections/contactMe';
import Recommendation from './sections/recommendation';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      {/* <FunctionClick/>
      <EventBind/>
      <ContactMe />
      <Recommendation/> */}
    </div>
  );
}

export default App;