import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
import { loginUser } from "./loginSlice";
const signUpSlice = createSlice({
	name: "signUp",
	initialState: {
		isLoading: false,
		data: null,
		success: false,
	},
	reducers: {
		sendRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		sendSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: null,
			data: action.data,
			success: true,
		}),
		sendFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const { sendFailed, sendRequest, sendSuccess } = signUpSlice.actions;

export const requestSend = () => {
	return {
		type: sendRequest.type,
	};
};

export const receiveSend = (response) => {
	return {
		type: sendSuccess.type,
		data: response,
	};
};

export const sendError = (message) => {
	return {
		type: sendFailed.type,
		message,
	};
};
export const postSignUp = (creds) => (dispatch) => {
	dispatch(requestSend());
	const call = {
		url: baseUrl + "users/signup",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: creds,
	};
	return axios(call)
		.then((response) => {
			dispatch(receiveSend(response.data));
			dispatch(
				loginUser({
					username: creds.username,
					password: creds.password,
				})
			);
		})
		.catch((error) => {
			dispatch(sendError(error.message));
			alert(error);
		});
};
export default signUpSlice.reducer;
