import { createStore } from "redux";

const authState = {
  isAuthenticated: false,
  cart: []
}

const authReducer = (state = authState, action) => {
  if(action.type === "login") {
    return {
      isAuthenticated: true,
      cart: []
    }
  }

  if(action.type === "logout") {
    return {
      isAuthenticated: false,
      cart: []
    }
  }

  return state;
}

const store = createStore(authReducer);

export default store;