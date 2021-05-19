import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import FinanceComp from "./finance";
import TripChatComp from "./tripChat";
import TripPathsComp from "./tripPaths";

export default function OneTripComp() {
	const tripData = {
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
	return (
		<>
			<Typography variant="h2" gutterBottom>
				{tripData.tripName}
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<TripPathsComp paths={tripData.path} />
				</Grid>
				<Grid item xs={8}>
					<TripChatComp />
					<FinanceComp />
				</Grid>
			</Grid>
		</>
	);
}
