import { Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
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
			{/* <Typography variant="body1">
				Trip Score : {tripData.score}
			</Typography>
			<Typography variant="body1" gutterBottom>
				Trip Time Taken : {tripData.timeTaken}
			</Typography> */}

			<TripPathsComp paths={tripData.path} />
		</>
	);
}
