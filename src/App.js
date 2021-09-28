import { Fragment } from 'react';
import './App.css';

import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state => state.isAuthenticated);

  return (
    <Fragment>
      <Header /> 
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />} 
    </Fragment>
  );
}

export default App;
