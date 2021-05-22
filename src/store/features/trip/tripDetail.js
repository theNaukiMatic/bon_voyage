import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
const getTripDetail = createSlice({
	name: "getTripDetail",
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
export const { sendFailed, sendRequest, sendSuccess } = getTripDetail.actions;

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
export const fetchTripDetails = (tripId) => (dispatch) => {
	dispatch(requestSend());
	const call = {
		url: baseUrl + `trips/tripInfo/${tripId}`,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + localStorage.getItem("token"),
			"Access-Control-Allow-Origin": "*",
		},
	};
	return axios(call)
		.then((response) => {
			dispatch(receiveSend(response.data));
		})
		.catch((error) => {
			alert(baseUrl + `tripInfo/${tripId}`);
			dispatch(sendError(error.message));
			alert(error);
		});
};
export default getTripDetail.reducer;
