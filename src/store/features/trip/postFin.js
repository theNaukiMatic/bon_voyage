import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
import { fetchTripFinance } from "./tripFinance";
const postFin = createSlice({
	name: "postFin",
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
			success: false,
		}),
	},
});
export const { sendFailed, sendRequest, sendSuccess } = postFin.actions;

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
export const postFinanceRequest = (data) => (dispatch) => {
	dispatch(requestSend());
	const call = {
		url: baseUrl + `splitWise/${data.tripId}`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
			// "Access-Control-Allow-Origin": "*",
		},
		data: {
			expended: data.msg,
		},
	};
	return axios(call)
		.then((response) => {
			dispatch(receiveSend(response.data));
			dispatch(fetchTripFinance(data.tripId));
		})
		.catch((error) => {
			dispatch(sendError(error.message));
			alert(error);
		});
};
export default postFin.reducer;
