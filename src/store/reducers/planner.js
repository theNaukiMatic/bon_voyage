import { combineReducers } from "redux";
import cityInfoReducer from "../features/planner/cityInfoSlice";
import startLocReducer from "../features/planner/startLocSlice";
import sendTripReducer from "../features/planner/sendTripSlice";

export default combineReducers({
	cityInfo: cityInfoReducer,
	startLoc: startLocReducer,
	sendTrip: sendTripReducer,
});
