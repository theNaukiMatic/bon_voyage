import {
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	TextField,
} from "@material-ui/core";

import React from "react";
const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 240,
	},
}));

export default function AddInfo() {
	const classes = useStyles();
	// const [selectedDate, setSelectedDate] = React.useState(
	// 	new Date("2014-08-18T21:11:54")
	// );
	return (
		<FormControl>
			<Grid container direction="column" spacing={4}>
				<Grid item container direction="row" spacing={4}>
					<Grid item>
						<TextField
							id="date"
							label="Start Date"
							type="date"
							defaultValue="2021-04-08"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item>
						<TextField
							id="date"
							label="Start Time"
							type="time"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item>
						<TextField
							id="date"
							label="End Time"
							type="time"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
				</Grid>
				<Grid item>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">
							Choose Starting Location
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
		</FormControl>
	);
}
