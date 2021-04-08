import { combineReducers } from "redux";
import loginReducer from "../features/auth/loginSlice";

export default combineReducers({
	login: loginReducer,
});
