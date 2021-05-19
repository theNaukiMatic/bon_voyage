import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import InterestComp from "../planner/interest";

function TripCard({ tripName }) {
	const history = useHistory();
	function handleTripClick() {
		history.push("/tripDetail");
	}
	return (
		<>
			<Paper
				onClick={handleTripClick}
				style={{
					padding: "20px",
					width: 300,
					margin: 10,
					backgroundColor: "lightgrey",
					cursor: "pointer",
				}}
			>
				<Typography variant="h5" style={{ fontWeight: 600 }}>
					{tripName}
				</Typography>
			</Paper>
		</>
	);
}

export default function AllTripsComp() {
	const trips = [
		{ tripName: "Jaipur Trip" },
		{ tripName: "Delhi Summer Trip" },
		{ tripName: "Hyderabad Trip" },
		{ tripName: "Bikaner Trip" },
	];

	return (
		<>
			<Typography variant="h2">Your Trips</Typography>
			<Box display="flex">
				{" "}
				{trips.map((trip) => (
					<TripCard tripName={trip.tripName} />
				))}
			</Box>
			<Divider style={{ marginBottom: 20 }} />
			<InterestComp />
		</>
	);
}
