import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";
import ChooseCity from "./planner/chooseCity";
import SearchTripComp from "./searchTrips";

export default function HomeComp() {
	return (
		<>
			<Typography variant="h1"> Welcome to bon voyage !</Typography>
			<Typography variant="h5" color="textSecondary">
				One Stop for all your travel planning needs.
			</Typography>
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<ChooseCity />
			<Box marginTop={5}></Box>
			<SearchTripComp />
		</>
	);
}
