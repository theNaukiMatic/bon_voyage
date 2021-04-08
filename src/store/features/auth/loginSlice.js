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
			errMess: "",
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
	return axios(call).then((response) => {
		console.log(response);
	});

	// return fetch(baseUrl + "users/login", {
	// 	method: "Post",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify(creds),
	// })
	// 	.then(
	// 		(response) => {
	// 			if (response.ok) {
	// 				return response;
	// 			} else {
	// 				var error = new Error(
	// 					"Error " + response.status + ": " + response.statusText
	// 				);
	// 				error.response = response;
	// 				throw error;
	// 			}
	// 		},
	// 		(error) => {
	// 			throw error;
	// 		}
	// 	)
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		if (response.success) {
	// 			// If login was successful, set the token in local storage
	// 			localStorage.setItem("token", response.token);
	// 			localStorage.setItem("userId", response.userId);
	// 			dispatch(receiveLogin(response));
	// 		} else {
	// 			var error = new Error("Error " + response.status);
	// 			error.response = response;
	// 			alert(error.message);
	// 			throw error;
	// 		}
	// 	})
	// 	.catch((error) => dispatch(loginError(error.message)));
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
	localStorage.removeItem("token");
	console.log("logout started");
	return fetch(baseUrl + "users/logout", {
		method: "Get",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					console.log("reached here!");

					return response;
				} else {
					console.log("reached error else!");

					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				console.log("reached error!");
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => {
			if (response.success) {
				console.log("response.success");
				localStorage.removeItem("token");
				localStorage.removeItem("userId");
				dispatch(receiveLogout());
			} else {
				// console.log("resopnse.error");
				var error = new Error("Error " + response.status);
				error.response = response;
				// alert(error.message);
				throw error;
			}
		})
		.catch((error) =>
			console.log("there was an error during logout! : " + error)
		);
};

export default loginSlice.reducer;
