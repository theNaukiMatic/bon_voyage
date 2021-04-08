import { baseUrl } from "../../../baseUrl";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginSlice = createSlice({
	name: "login",
	initialState: {
		isLoading: false,
		isAuthenticated: localStorage.getItem("token") ? true : false,
		token: localStorage.getItem("token"),
		userId: localStorage.getItem("userId"),
	},
	reducers: {
		//login reducers
		loginRequest: (state, action) => ({
			...state,
			isLoading: true,
			isAuthenticated: false,
		}),
		loginSuccess: (state, action) => ({
			...state,
			isLoading: false,
			isAuthenticated: true,
			errMess: null,
			token: action.token,
			userId: action.user.userId,
		}),
		loginFailed: (state, action) => ({
			...state,
			isLoading: false,
			isAuthenticated: false,
			errMess: action.message,
		}),

		//logout reducers
		logoutRequest: (state, action) => ({
			...state,
			isLoading: true,
			isAuthenticated: false,
		}),
		logoutSuccess: (state, action) => ({
			...state,
			isLoading: false,
			isAuthenticated: false,
			token: null,
		}),
	},
});

export const {
	loginRequest,
	loginFailed,
	loginSuccess,
	logoutRequest,
	logoutSuccess,
} = loginSlice.actions;

//action creators
//authentication process
export const requestLogin = (creds) => {
	return {
		type: loginRequest.type,
		creds,
	};
};

export const receiveLogin = (response) => {
	return {
		type: loginSuccess.type,
		token: response.token,
		user: response,
	};
};

export const loginError = (message) => {
	return {
		type: loginFailed.type,
		message,
	};
};

export const loginUser = (creds) => (dispatch) => {
	// We dispatch requestLogin to kickoff the call to the API
	dispatch(requestLogin(creds));
	const call = {
		url: baseUrl + "users/login",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: creds,
	};
	return axios(call)
		.then((response) => {
			if (response.data.success) {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("userId", response.data.userId);
				dispatch(receiveLogin(response.data));
				alert("Login success");
			} else {
				var error = new Error("Error " + response.data.status);
				error.response = response;
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => {
			dispatch(loginError(error.message));
			// console.log(error);
			alert(error);
		});
};

export const requestLogout = () => {
	return {
		type: logoutRequest.type,
	};
};

export const receiveLogout = () => {
	return {
		type: logoutSuccess.type,
	};
};
// Logs the user out
export const logoutUser = () => (dispatch) => {
	dispatch(requestLogout());
	const call = {
		url: baseUrl + "users/logout",
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	return axios(call)
		.then((response) => {
			if (response.data.success) {
				localStorage.removeItem("token");
				localStorage.removeItem("userId");
				dispatch(receiveLogout());
				alert("logout success");
			} else {
				var error = new Error("Error " + response.data.status);
				error.response = response;
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => {
			dispatch(loginError(error.message));
			alert(error);
		});
};

export default loginSlice.reducer;
