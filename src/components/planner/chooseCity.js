import {
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 120,
	},
}));

export default function ChooseCity() {
	const classes = useStyles();
	return (
		<>
			{" "}
			<Grid container direction="row">
				<Grid item sm={4}>
					<Typography variant="h4">Cities available :</Typography>
				</Grid>
				<Grid item sm={4}>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">
							Choose City
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							// value={age}
							// onChange={handleChange}
						>
							<MenuItem value={10}>Jaipur</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</>
	);
}
