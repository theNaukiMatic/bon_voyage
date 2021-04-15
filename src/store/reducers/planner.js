import { combineReducers } from "redux";
import cityInfoReducer from "../features/planner/cityInfoSlice";
import startLocReducer from "../features/planner/startLocSlice";

export default combineReducers({
	cityInfo: cityInfoReducer,
	startLoc: startLocReducer,
});
