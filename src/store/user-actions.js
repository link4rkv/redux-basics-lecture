import axios from 'axios'

export const sendUserData = (user) => {
  return async (dispatch) => {
    axios.post(
      'https://react-auth-69699.firebaseio.com/users.json',
      {
        user: user
      }
    ).then(response => { 
      console.log('sent user data successfully!')
      dispatch({ type: 'login' });
    })
    .catch(error => {
      console.log('sending user data failed!')
    })
  };
};
