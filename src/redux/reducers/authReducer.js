import {
  ADD_JWT_TOKEN,
  REMOVE_JWT_TOKEN
} from "../actions/authAtions";

const initState = {
  auth: null,
  email: null,
  name: null,
  gender: null
};

const authReducer = (state = initState, action) => {
  if (action.type === ADD_JWT_TOKEN) {
    return {
      auth: action.payload.auth,
      email: action.payload.email,
      name: action.payload.name,
      gender: action.payload.gender
    };
  } else if (action.type === REMOVE_JWT_TOKEN) {
    return {
      auth: null,
      email: null,
      name: null,
      gender: null
    };
  }
  return state;
};

export default authReducer;
