import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const cityInfoSlice = createSlice({
	name: "cityInfo",
	initialState: {
		isLoading: false,
		cityData: null,
		success: false,
	},
	reducers: {
		cityInfoRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		cityInfoSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: null,
			cityData: action.data,
			success: true,
		}),
		cityInfoFailed: (state, action) => ({
			...state,
			isLoading: false,
			isAuthenticated: false,
			errMess: action.message,
		}),
	},
});
export const {
	cityInfoFailed,
	cityInfoRequest,
	cityInfoSuccess,
} = cityInfoSlice.actions;

export const requestCityInfo = () => {
	return {
		type: cityInfoRequest.type,
	};
};

export const receiveCityInfo = (response) => {
	return {
		type: cityInfoSuccess.type,
		data: response,
	};
};

export const cityInfoError = (message) => {
	return {
		type: cityInfoFailed.type,
		message,
	};
};
export const getCityData = (cityName) => (dispatch) => {
	dispatch(requestCityInfo());
	const call = {
		url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cityName}&type=tourist_attraction&rankby=prominence&key=AIzaSyArM7cAmAWdHA2I6iL0XLLo979LOyy-920`,
		method: "GET",
		Headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	};
	return axios(call)
		.then((response) => {
			dispatch(receiveCityInfo(response.data.results));
			// alert("city info success");
		})
		.catch((error) => {
			dispatch(cityInfoError(error.message));
			alert(error);
		});
};

export default cityInfoSlice.reducer;