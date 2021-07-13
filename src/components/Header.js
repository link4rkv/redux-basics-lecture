import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuthenticated);
  
  const logoutHandler = (event) => {
    event.preventDefault();

    dispatch({ type: 'logout' });
  }

  const addUser = () => {
    props.addUserForm();
  }

  return (
    <header className = {classes.header}>
      <h1>Redux Auth</h1>
      {!isAuth && <button onClick={addUser}>Register</button>}
      {isAuth &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  )
}

export default Header