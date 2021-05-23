import {
	Button,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCityData } from "../../store/features/planner/cityInfoSlice";

const useStyles = makeStyles((theme) => ({
	formControl: {
		width: "100%",
		justifyContent: "center",
	},
}));

export default function ChooseCity() {
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();
	const [cityName, setCityName] = React.useState(" ");
	const handleCitySearch = () => {
		dispatch(getCityData(cityName));
		history.push(`/chooseInterest/${cityName}`);
	};
	return (
		<>
			<Paper
				className={classes.paper}
				elevation={10}
				style={{ padding: "50px", borderRadius: 20 }}
			>
				<Typography variant="h2">Start Planning Your Trip</Typography>
				<Typography variant="body1" color="textSecondary">
					{" "}
					Lets start with the City you want to visit.
				</Typography>
				<Typography
					variant="body1"
					color="secondary"
					style={{ marginBottom: "20px" }}
				>
					{" "}
					Leave Empty to use your current location.
				</Typography>
				<TextField
					variant="outlined"
					label="Enter City Name"
					fullWidth
					value={cityName}
					onChange={(e) => setCityName(e.target.value)}
					style={{ marginBottom: "20px" }}
				/>
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					onClick={handleCitySearch}
				>
					Start Planning
				</Button>{" "}
			</Paper>
		</>
	);
}
