import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

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
			{trips.map((trip) => (
				<TripCard tripName={trip.tripName} />
			))}
		</>
	);
}
