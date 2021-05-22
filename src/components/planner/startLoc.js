import {
	Card,
	CardActionArea,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";

const useStyles = makeStyles({
	selected: {
		backgroundColor: "lightblue",
	},
	normal: {},
});
const OnePlace = ({ city, selectCity, SelectedCity }) => {
	const classes = useStyles();

	return (
		<Grid item sm={4}>
			<Card elevation={10}>
				{(() => {
					if (city.place_id === SelectedCity) {
						return (
							<CardActionArea
								style={{ padding: "20px" }}
								className={classes.selected}
								onClick={() => selectCity(city.place_id)}
							>
								<Typography variant="h5">
									{city.name}
								</Typography>
								<Typography
									variant="body1"
									color="textSecondary"
								>
									{city.formatted_address}
								</Typography>
							</CardActionArea>
						);
					} else {
						return (
							<CardActionArea
								style={{ padding: "20px" }}
								className={classes.normal}
								onClick={() => selectCity(city.place_id)}
							>
								<Typography variant="h5">
									{city.name}
								</Typography>
								<Typography
									variant="body1"
									color="textSecondary"
								>
									{city.formatted_address}
								</Typography>
							</CardActionArea>
						);
					}
				})()}
			</Card>
		</Grid>
	);
};

const SearchDisplay = ({ data, selectCity, SelectedCity }) => {
	return (
		<>
			<Typography variant="h5" style={{ marginTop: 20 }}>
				Search Results
			</Typography>
			<Divider style={{ marginBottom: "20px" }} />
			<Grid container direction="row">
				{data.map((city) => (
					<OnePlace
						city={city}
						selectCity={selectCity}
						SelectedCity={SelectedCity}
					/>
				))}
			</Grid>
		</>
	);
};

export default function StartLocComp({ setStartLocId }) {
	const data = useSelector((state) => state.cityInfo.startLoc);
	const [SelectedCity, setSelectedCity] = useState("");
	const selectCity = (city) => {
		console.log("city added" + city);
		setSelectedCity(city);
		setStartLocId(city);
	};

	return (
		<>
			{(() => {
				if (data.isLoading) {
					return <LoadingComp />;
				} else if (data.success) {
					return (
						<SearchDisplay
							data={data.cityData.candidates}
							selectCity={selectCity}
							SelectedCity={SelectedCity}
						/>
					);
				} else {
					return <></>;
				}
			})()}
		</>
	);
}
