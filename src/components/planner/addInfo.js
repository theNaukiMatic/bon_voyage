import {
	Button,
	Divider,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import StartLocComp from "./startLoc";

import { getStartLoc } from "../../store/features/planner/startLocSlice";

import { useDispatch } from "react-redux";

import React from "react";

export default function AddInfo({
	tripDate,
	setTripDate,
	startTime,
	setStartTime,
	endTime,
	setEndTime,
	startLocId,
	setStartLocId,
}) {
	const dispatch = useDispatch();
	const [startLoc, setStartLoc] = React.useState("");
	const handleStartLoc = () => {
		dispatch(getStartLoc(startLoc));
	};
	return (
		<>
			<Paper elevation={10} style={{ padding: 40, borderRadius: 20 }}>
				<Typography variant="h3">
					Provide More Data for your Trip
				</Typography>
				<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
				{/* <FormControl> */}
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
								label="Trip Date"
								type="date"
								value={tripDate}
								onChange={(e) => setTripDate(e.target.value)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item>
							<TextField
								id="startTime"
								label="Start Time"
								value={startTime}
								type="time"
								onChange={(e) => setStartTime(e.target.value)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item>
							<TextField
								id="endTime"
								label="End Time"
								value={endTime}
								type="time"
								onChange={(e) => setEndTime(e.target.value)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={4}>
							{/* <FormControl className={classes.formControl}> */}
							<TextField
								variant="outlined"
								label="Search Your Starting Location"
								fullWidth
								value={startLoc}
								onChange={(e) => setStartLoc(e.target.value)}
							/>
							{/* </FormControl> */}
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
				</Grid>
				<StartLocComp setStartLocId={setStartLocId} />
			</Paper>
		</>
	);
}
