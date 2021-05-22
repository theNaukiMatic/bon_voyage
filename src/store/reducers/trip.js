import { combineReducers } from "redux";
import getMyTripsReducer from "../features/trip/myTrips";
import getTripDetailRed from "../features/trip/tripDetail";
import getTripChatRed from "../features/trip/tripChat";
import getTripFinRed from "../features/trip/tripFinance";
import postFinRed from "../features/trip/postFin";
import postMsgRed from "../features/trip/postMsg";
import postSearchTrip from "../features/trip/searchTrip";

import calcFinRed from "../features/trip/calcTripFin";

export default combineReducers({
	myTrips: getMyTripsReducer,
	tripDetail: getTripDetailRed,
	tripChat: getTripChatRed,
	tripFinance: getTripFinRed,
	postMsg: postMsgRed,
	postFin: postFinRed,
	searchTrip: postSearchTrip,
	calcFinance: calcFinRed,
});
