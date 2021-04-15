import { Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import ChooseCity from "./planner/chooseCity";
const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 120,
	},
	paper: { padding: 50 },
}));
export default function HomeComp() {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h1"> Welcome to bon voyage !</Typography>
			<Typography variant="h5" color="textSecondary">
				One Stop for all your travel planning needs.
			</Typography>
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<Paper className={classes.paper} elevation={10}>
				<Typography variant="h2">Start Planning Your Trip</Typography>
				<ChooseCity />
			</Paper>
		</>
	);
}
