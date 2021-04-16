import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
const sendTripDataSlice = createSlice({
	name: "sendTripData",
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
			cityData: action.data,
			success: true,
		}),
		sendFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const {
	sendFailed,
	sendRequest,
	sendSuccess,
} = sendTripDataSlice.actions;

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
export const sendTripForm = (dataPacket) => (dispatch) => {
	dispatch(requestSend());
	const call = {
		url: baseUrl + "trips/makeTrip",
		method: "post",
		Headers: {
			"Content-Type": "application/json",
			// Authorization: "Bearer " + localStorage.getItem("token"),
			"Authorization":
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0YTNmZTJjZmU2MjUwMDBjZTQzNjQiLCJpYXQiOjE2MTg1NjMzOTksImV4cCI6MTYyMjE2MzM5OX0.TVG1jylt7WZpaOqinCQASsdU71NtNkVZzxMru11OnTc",
		},
		data: {
			cityName:dataPacket.cityName,
			start:dataPacket.start,
			end:dataPacket.end,
			date:dataPacket.date,
			placeId:dataPacket.placeId
		},
	};
	return axios(call)
		.then((response) => {
			dispatch(receiveSend(response.data));
		})
		.catch((error) => {
			dispatch(sendError(error.message));
			alert(error);
		});
};
export default sendTripDataSlice.reducer;
