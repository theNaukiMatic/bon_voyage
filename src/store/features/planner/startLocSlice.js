import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { gMapsKey } from "../../../baseUrl";
const startLocSlice = createSlice({
	name: "startLoc",
	initialState: {
		isLoading: false,
		cityData: null,
		success: false,
	},
	reducers: {
		startLocRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		startLocSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: null,
			cityData: action.data,
			success: true,
		}),
		startLocFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
			cityData: null,
		}),
	},
});
export const { startLocFailed, startLocRequest, startLocSuccess } =
	startLocSlice.actions;

export const requestStartLoc = () => {
	return {
		type: startLocRequest.type,
	};
};

export const receiveStartLoc = (response) => {
	return {
		type: startLocSuccess.type,
		data: response,
	};
};

export const startLocError = (message) => {
	return {
		type: startLocFailed.type,
		message,
	};
};
export const getStartLoc = (query) => (dispatch) => {
	dispatch(requestStartLoc());
	const call = {
		url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=place_id,name,formatted_address,type&key=${gMapsKey}`,
		method: "GET",
		Headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	};
	return axios(call)
		.then((response) => {
			dispatch(receiveStartLoc(response.data));
		})
		.catch((error) => {
			dispatch(startLocError(error.message));
			alert(error);
		});
};

export default startLocSlice.reducer;
