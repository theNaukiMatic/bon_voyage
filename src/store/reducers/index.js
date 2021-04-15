import { combineReducers } from "redux";
import authReducer from "./auth";
import cityInfoReducer from "./planner";
export default combineReducers({
	auth: authReducer,
	cityInfo: cityInfoReducer,
});
