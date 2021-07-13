import { Fragment } from 'react';
import './App.css';

import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import RegisterUserForm from './components/RegisterUserForm';

function App() {
  const isAuth = useSelector(state => state.isAuthenticated);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const addUserForm = () => {
    setShowAddUserForm(true);
  }

  return (
    <Fragment>
      <Header addUserForm = {addUserForm} /> 
      { !isAuth && <Auth /> }
      { isAuth && <UserProfile /> }
      { showAddUserForm && !isAuth && <RegisterUserForm /> }
    </Fragment>
  );
}

export default App;
