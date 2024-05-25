import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Header from './header';
import SideBar from './sideBar';
import Feed from './Feed';
import Login from './components/Login';
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser);
  return (
    <div className='app'>
      <Header />

      {user ? (<Login className='log'/>) : (<div className='body'>
        <SideBar />
        <Feed />
        <Widgets/>
      </div>)}
    </div>
  );
}

export default App;
