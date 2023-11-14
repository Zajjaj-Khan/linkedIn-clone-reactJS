import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed  from './components/Feed';
function App() {
  return (
    <div className="app">
     {/* header */}
      <Header/>
    <div className='app-body'>
 {/* App Body */}
      {/* side Bar */}
       <SideBar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
    </div>
    
    </div>
  );
}

export default App;
