// a Redux store is created using the createStore function from Redux.
// The store is initialized with the actionReducer function, which is responsible for managing the state of the application.

import { createStore } from "redux";
import { actionReducer } from "./actionReducer";

// Define the type for the state managed by the Redux store
export type RootState = ReturnType<typeof actionReducer>;

const store = createStore(actionReducer);

export default store;


