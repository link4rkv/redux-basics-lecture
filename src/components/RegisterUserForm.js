import classes from './RegisterUserForm.module.css'
import { sendUserData } from '../store/user-actions';
import { useDispatch } from 'react-redux';

const RegisterUserForm = () => {
  const dispatch = useDispatch();

  const addUserHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    dispatch(
      sendUserData({
        'name': data.get('name'),
        'email': data.get('email'),
        'age': data.get('age'),
        'password': data.get('password'),
      })
    );
  }

  return (
    <form className={classes.addUserForm} onSubmit={addUserHandler}>
      <h2>User Registration</h2>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
      </div>
      <div className={classes.control}>
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' name='age' />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
      </div>
      <button>Register</button>
    </form>
  )
}

export default RegisterUserForm