import axios from "axios";
import data from "../../data";
export const ADD_JWT_TOKEN = "ADD_JWT_TOKEN";
export const REMOVE_JWT_TOKEN = "REMOVE_JWT_TOKEN";

export const signup = (userSignupBodyInfo) => {

    return dispatch => {

        axios.post(`${data.apiDomain}/api/users/signup`, userSignupBodyInfo)
            .then(res => {
                dispatch({ type: ADD_JWT_TOKEN, payload: userSignupBodyInfo });
            }).catch(err => {
                console.log(err);
                dispatch({ type: REMOVE_JWT_TOKEN });
            })

    };

};

export const Logon = (userData) => {

    return dispatch => {

        dispatch({ type: REMOVE_JWT_TOKEN });

    };

};