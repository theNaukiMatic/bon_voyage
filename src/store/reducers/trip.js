import { combineReducers } from "redux";
import getMyTripsReducer from "../features/trip/myTrips";
import getTripDetailRed from "../features/trip/tripDetail";
import getTripChatRed from "../features/trip/tripChat";
import getTripFinRed from "../features/trip/tripFinance";

import postMsgRed from "../features/trip/postMsg";

export default combineReducers({
	myTrips: getMyTripsReducer,
	tripDetail: getTripDetailRed,
	tripChat: getTripChatRed,
	tripFinance: getTripFinRed,
	postMsg: postMsgRed,
});
