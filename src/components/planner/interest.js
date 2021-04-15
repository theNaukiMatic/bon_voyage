import {
	Card,
	CardContent,
	Grid,
	Typography,
	Button,
	Paper,
	CardMedia,
	CardActionArea,
	Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";
import ChooseCity from "./chooseCity";
import { Rating } from "@material-ui/lab";
import { ChangeHistory } from "@material-ui/icons";
import AddInfo from "./addInfo";
const OnePlace = ({ city, addCity, removeCity }) => {
	const [buttonText, setButtonText] = useState("Add This Place");
	const [buttonStyle, setButtonStyle] = useState("outlined");
	const addPlace = (id) => {
		addCity(id);
		setButtonText("Remove this place");
		setButtonStyle("contained");
	};
	const removePlace = (id) => {
		removeCity(id);
		setButtonText("Add This Place");
		setButtonStyle("outlined");
	};
	const handleButtonClick = (id) => {
		if (buttonText === "Add This Place") {
			addPlace(id);
		} else {
			removePlace(id);
		}
	};
	return (
		<Grid item sm={4}>
			<Card
				elevation={10}
				style={{
					width: "400px",
				}}
			>
				<CardContent>
					<Typography variant="h5">
						<img
							src={city.icon}
							alt="icon"
							style={{ height: ".8em" }}
						/>{" "}
						{city.name}
					</Typography>
					<Rating value={city.rating} readOnly />
					<Typography variant="body1" color="textSecondary">
						{city.formatted_address}
					</Typography>
				</CardContent>
				<CardActionArea>
					<Button
						variant={buttonStyle}
						color="primary"
						fullWidth
						onClick={() => handleButtonClick(city.place_id)}
					>
						{buttonText}
					</Button>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

const DataDisplay = ({ data, addCity, removeCity }) => {
	return (
		<>
			<AddInfo />
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<Typography variant="h3">
				Choose Locations of Your Interest
			</Typography>
			<Typography variant="body1" color="textSecondary">
				Select All the places you are interested in. Our Algorithm will
				try to fit most of them into your schedule so that you can have
				the best possible Trip.
			</Typography>
			<Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
			<Grid container spacing={4} direction="row">
				{data.map((city) => (
					<OnePlace
						city={city}
						addCity={addCity}
						removeCity={removeCity}
					/>
				))}
			</Grid>
		</>
	);
};

export default function InterestComp() {
	const data = useSelector((state) => state.cityInfo.cityInfo);
	var SelectedCity = [];
	const addCity = (city) => {
		console.log("city added" + city);
		SelectedCity.push(city);
	};
	const removeCity = (city) => {
		console.log("city remvoed" + city);
		SelectedCity.splice(SelectedCity.indexOf(city), 1);
	};
	useEffect(() => {
		console.log(SelectedCity);
	}, [SelectedCity]);

	return (
		<>
			{(() => {
				if (data.isLoading) {
					return <LoadingComp />;
				} else if (data.success) {
					return (
						<DataDisplay
							data={data.cityData}
							addCity={addCity}
							removeCity={removeCity}
						/>
					);
				} else {
					return <ChooseCity />;
				}
			})()}
		</>
	);
}
