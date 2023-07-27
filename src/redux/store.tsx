
import { createStore } from "redux";
import { actionReducer } from "./actionReducer";

// Define the type for the state managed by the Redux store
export type RootState = ReturnType<typeof actionReducer>;

const store = createStore(actionReducer);

export default store;


