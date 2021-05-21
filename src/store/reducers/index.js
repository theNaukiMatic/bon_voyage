import { combineReducers } from "redux";
import authReducer from "./auth";
import cityInfoReducer from "./planner";
import tripsReducer from "./trip";
export default combineReducers({
	auth: authReducer,
	cityInfo: cityInfoReducer,
	trips: tripsReducer,
});
