import { combineReducers } from "redux";
import getMyTripsReducer from "../features/trip/myTrips";
import getTripDetailRed from "../features/trip/tripDetail";
import getTripChatRed from "../features/trip/tripChat";

export default combineReducers({
	myTrips: getMyTripsReducer,
	tripDetail: getTripDetailRed,
	tripChat: getTripChatRed,
});
