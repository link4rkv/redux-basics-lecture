import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const authReducer = (state = { isAuthenticated: false }, action) => {
  if (action.type === 'login') {
    return {
      isAuthenticated: true
    };
  }
  
  if (action.type === 'logout') {
    return {
      isAuthenticated: false
    };
  }

  return state;
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(authReducer, composedEnhancer);

export default store;

