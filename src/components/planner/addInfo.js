import {
	Button,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import StartLocComp from "./startLoc";

import { getStartLoc } from "../../store/features/planner/startLocSlice";

import { useDispatch } from "react-redux";

import React from "react";
const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 240,
	},
}));

export default function AddInfo() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [startLoc, setStartLoc] = React.useState("");
	const handleStartLoc = () => {
		dispatch(getStartLoc(startLoc));
	};
	return (
		<>
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<Typography variant="h3">
				Provide More Data for your Trip
			</Typography>
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<FormControl>
				<Grid container direction="column" spacing={4}>
					<Grid
						item
						container
						direction="row"
						spacing={4}
						alignItems="center"
					>
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
						<Grid item>
							<FormControl className={classes.formControl}>
								<TextField
									variant="outlined"
									label="Search Your Starting Location"
									fullWidth
									value={startLoc}
									onChange={(e) =>
										setStartLoc(e.target.value)
									}
								/>
							</FormControl>
						</Grid>
						<Grid item>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								startIcon={<SearchOutlined />}
								onClick={handleStartLoc}
							>
								{" "}
								Search{" "}
							</Button>
						</Grid>
					</Grid>
					<Grid item>
						<StartLocComp />
					</Grid>
				</Grid>
			</FormControl>
		</>
	);
}
