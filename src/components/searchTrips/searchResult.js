import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import LoadingComp from "../loadingComp";
import { fetchJoinTrip } from "../../store/features/trip/joinTrip";

export default function SearchResultComp() {
	const history = useHistory();
	const dispatch = useDispatch();
	function searchAgain() {
		history.push("/searchTrip");
	}

	const searchResult = useSelector((state) => state.trips.searchTrip);
	function handleJoinClick(tripId) {
		dispatch(fetchJoinTrip(tripId));
		history.push(`/tripDetail/${tripId}`);
	}
	if (searchResult.isLoading || !searchResult.success) {
		return <LoadingComp />;
	} else if (searchResult.data.length === 0) {
		return (
			<>
				<Paper elevation={10} style={{ padding: "50px" }}>
					<Typography variant="h2">Search Result</Typography>
					<Typography
						variant="body1"
						color="textSecondary"
						gutterBottom
					>
						{" "}
						Make sure you entered the correct spelling.
					</Typography>
					<Typography
						variant="h2"
						color="secondary"
						align="center"
						style={{ marginTop: 40, marginBottom: 40 }}
					>
						No result found!
					</Typography>
					<Button
						fullWidth
						variant="contained"
						color="secondary"
						onClick={searchAgain}
					>
						Search another term
					</Button>
				</Paper>
			</>
		);
	} else {
		return (
			<>
				<Paper elevation={10} style={{ padding: "50px" }}>
					<Typography variant="h2">Search Result</Typography>
					<Typography variant="body1" color="textSecondary">
						{" "}
						Make sure you entered the correct spelling.
					</Typography>
					<Grid container>
						{searchResult.data.map((result) => {
							return (
								<>
									<Grid item xs={4}>
										<Paper
											style={{
												padding: "20px",
												width: 300,
												// margin: 10,
												backgroundColor: "lightgrey",
												cursor: "pointer",
											}}
											elevation={10}
										>
											<Typography
												variant="h5"
												style={{ fontWeight: 600 }}
											>
												{result.tripName}
											</Typography>
											<Typography variant="body">
												{result.date}
											</Typography>
										</Paper>
										<Button
											fullWidth
											variant="contained"
											color="primary"
											style={{
												width: 340,
												marginBottom: 20,
											}}
											onClick={() =>
												handleJoinClick(result._id)
											}
										>
											Join Trip
										</Button>
									</Grid>
								</>
							);
						})}
					</Grid>
				</Paper>
			</>
		);
	}
}
