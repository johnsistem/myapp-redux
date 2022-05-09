import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
	sampleData: sampleReducer,
	usersData: usersReducer
});
