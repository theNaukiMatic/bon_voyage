import { combineReducers } from "redux";
import cityInfoReducer from "../features/planner/cityInfoSlice";

export default combineReducers({
	cityInfo: cityInfoReducer,
});
