import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postSearchTrip } from "../../store/features/trip/searchTrip";

export default function SearchTripComp() {
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();
	function handleSearch() {
		dispatch(postSearchTrip(searchTerm));
		history.push("/searchResult");
	}
	return (
		<Paper elevation={10} style={{ padding: "50px", borderRadius: 20 }}>
			<Typography variant="h2">Search an existing Trip</Typography>
			<Typography variant="body1" color="textSecondary">
				{" "}
				Make sure you enter correct spelling.
			</Typography>
			<TextField
				variant="outlined"
				label="Enter Search Term"
				fullWidth
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				style={{ marginBottom: "20px" }}
			/>
			<Button
				fullWidth
				color="secondary"
				variant="contained"
				onClick={handleSearch}
			>
				Search Trip
			</Button>{" "}
		</Paper>
	);
}
