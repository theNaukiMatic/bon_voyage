import { combineReducers } from "redux";
import loginReducer from "../features/auth/loginSlice";
import signUpReducer from "../features/auth/signUpSlice";

export default combineReducers({
	login: loginReducer,
	signUp: signUpReducer,
});
