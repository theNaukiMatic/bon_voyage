import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	Paper,
	Select,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
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
	const [cityName, setCityName] = React.useState("");
	const handleCitySearch = () => {
		dispatch(getCityData(cityName));
		history.push("/chooseInterest");
	};
	return (
		<>
			<Typography
				variant="body1"
				color="textSecondary"
				style={{ marginBottom: "20px" }}
			>
				{" "}
				Lets start with the City you want to visit.
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
			</Button>
		</>
	);
}
