import axios from "axios";
import data from "../../data";
export const GET_ALL_TODOS = "GET_ALL_TODOS";
export const GET_A_TODO = "GET_A_TODO";

export const getAllToDos = () => {

  return (dispatch) => {

    // const authInfo = getState().auth;
    // const username = authInfo.username;
    // const role = authInfo.role;
    // const email = authInfo.email;
    // const authorization = 'Bearer ' + authInfo.auth;

    axios.get(`${data.apiDomain}/api/todo`, {
      headers: {
        'Content-Type': 'application/json',
        // authorization: authorization,
      }
    }).then(res => {
      dispatch({ type: GET_ALL_TODOS, payload: res.data });
    }).catch(err => {
      console.log(err);
    })
  };

};
