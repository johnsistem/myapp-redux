import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import numberReducer from "./numerReducer";

export default combineReducers({
	sampleData: sampleReducer,
	numberData:numberReducer
});
