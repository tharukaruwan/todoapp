import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { save, load } from "redux-localstorage-simple";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore (
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(thunk, save())),
);

export default store;