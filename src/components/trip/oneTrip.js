import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import LoadingComp from "../loadingComp";
import FinanceComp from "./finance";
import TripChatComp from "./tripChat";
import TripPathsComp from "./tripPaths";
import { fetchTripDetails } from "../../store/features/trip/tripDetail";
import { fetchTripChat } from "../../store/features/trip/tripChat";

export default function OneTripComp() {
	const params = useParams();
	const dispatch = useDispatch();
	const tripData = useSelector((state) => state.trips.tripDetail);
	useEffect(() => {
		dispatch(fetchTripDetails(params.tripId));
		dispatch(fetchTripChat(params.tripId));
	}, []);
	function refreshChat() {
		dispatch(fetchTripChat(params.tripId));
	}
	const tripData2 = {
		tripName: "Jaipur Trip",
		path: [
			{
				placeId: "ChIJlXJ26RuxbTkR0qsToxFP05c",
				placeName: "Jal Mahal",
				placeAddress:
					"Amer Rd, Jal Mahal, Amer, Jaipur, Rajasthan 302002, India",
			},
			{
				placeId: "ChIJaXD1f0yxbTkRvquNoSkESuk",
				placeName: "Jantar Mantar - Jaipur",
				placeAddress:
					"Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
			},
			{
				placeId: "wait",
				placeName: "null",
				placeAddress: "null",
			},
			{
				placeId: "wait",
				placeName: "null",
				placeAddress: "null",
			},
			{
				placeId: "wait",
				placeName: "null",
				placeAddress: "null",
			},
			{
				placeId: "wait",
				placeName: "null",
				placeAddress: "null",
			},
			{
				placeId: "ChIJaXD1f0yxbTkRvquNoSkESuk",
				placeName: "Jantar Mantar - Jaipur",
				placeAddress:
					"Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
			},
		],
		score: 232777.60604166667,
		timeTaken: 6.283055555555555,
	};
	if (tripData.isLoading || !tripData.success) {
		return <LoadingComp />;
	} else {
		return (
			<>
				<Typography variant="h2" gutterBottom>
					{tripData.data.tripInfo.tripName}
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TripPathsComp paths={tripData.data.tripInfo.result} />
					</Grid>
					<Grid item xs={8}>
						<TripChatComp />
						<FinanceComp />
					</Grid>
				</Grid>
			</>
		);
	}
}
