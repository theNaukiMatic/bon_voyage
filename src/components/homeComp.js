import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";
import ChooseCity from "./planner/chooseCity";
import SearchTripComp from "./searchTrips";

export default function HomeComp() {
	const place = "bikaner";
	return (
		<>
			<Typography variant="h1"> Welcome to bon voyage !</Typography>
			<Typography variant="h5" color="textSecondary">
				One Stop for all your travel planning needs.
			</Typography>
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe
						title="gmap"
						width="1225"
						height="500"
						src={`https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						style={{ borderRadius: 20 }}
					></iframe>
				</div>
			</div>
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<ChooseCity />
			<Box marginTop={5}></Box>
			<SearchTripComp />
		</>
	);
}
