import { Divider, Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import PlannerFormComp from "./plannerForm";

export default function PlannerComp() {
	return (
		<>
			<Typography variant="h2" style={{ marginTop: "40px" }}>
				Welcome to Bon-voyage !
			</Typography>
			<Typography variant="h6" style={{ color: "gray" }}>
				One stop for all your trip planning needs.
			</Typography>
			{/* <Divider /> */}

			<PlannerFormComp />
		</>
	);
}
