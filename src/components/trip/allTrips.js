import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import InterestComp from "../planner/interest";
import { fetchMyTrips } from "../../store/features/trip/myTrips";
import LoadingComp from "../loadingComp";

function TripCard({ trip }) {
	const history = useHistory();
	function handleTripClick() {
		history.push(`/tripDetail/${trip._id}`);
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
				elevation={10}
			>
				<Typography variant="h5" style={{ fontWeight: 600 }}>
					{trip.tripName}
				</Typography>
				<Typography variant="body">{trip.date}</Typography>
			</Paper>
		</>
	);
}

export default function AllTripsComp() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMyTrips());
	}, []);
	const trips = useSelector((state) => state.trips.myTrips);
	if (trips.isLoading || !trips.success) {
		return <LoadingComp />;
	} else {
		return (
			<>
				<Typography variant="h2">Your Trips</Typography>
				<Box display="flex">
					{" "}
					{trips.data.map((trip) => (
						<TripCard trip={trip} />
					))}
				</Box>
				<Divider style={{ marginBottom: 20 }} />
				<InterestComp />
			</>
		);
	}
}
