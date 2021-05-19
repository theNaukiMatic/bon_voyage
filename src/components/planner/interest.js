import {
	Card,
	CardContent,
	Grid,
	Typography,
	Button,
	CardActionArea,
	Divider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../loadingComp";
import ChooseCity from "./chooseCity";
import { Rating } from "@material-ui/lab";
import AddInfo from "./addInfo";
import { sendTripForm } from "../../store/features/planner/sendTripSlice";
import { Redirect, useHistory } from "react-router";
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
					// minHeight: "500px",
				}}
			>
				{/* <img
					// style={{ maxHeight: "400px", width: "100%" }}
					src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${city.photos[0].photo_reference}&key=AIzaSyCH-n1ukoItZpb2gin5Ik8Vn2Hczdz0I5E`}
					alt={city.name}
				/> */}
				<CardActionArea
					onClick={() =>
						window.open(
							`https://www.google.com/maps/search/?api=1&query=${city.formatted_address}&query_place_id=${city.place_id}`,
							"_blank"
						)
					}
				>
					<CardContent style={{ marginBottom: "auto" }}>
						{" "}
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
				</CardActionArea>
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

//this componrnt will handle all the data
const DataDisplay = ({ data, addCity, removeCity, SelectedCity }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	function dateConverter(date) {
		var dateParts = date.split("-");
		var newDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
		// console.log(newDate);
		return newDate;
	}
	function timeConverter(time) {
		var newTime = time + ":00";
		return newTime;
	}
	const [tripDate, setTripDate] = useState("2021-04-16");
	const [startTime, setStartTime] = useState("09:00");
	const [endTime, setEndTime] = useState("18:00");
	const [startLocId, setStartLocId] = useState("");

	const temp = useSelector((state) => state.cityInfo.sendTrip);
	useEffect(() => {
		if (temp.success) {
			history.push("/trip");
		}
	}, [temp]);

	function handleFinalSubmit() {
		const start = timeConverter(startTime);
		const end = timeConverter(endTime);
		const date = dateConverter(tripDate) + " " + timeConverter(startTime);
		var tempList = [startLocId];
		var finalList = tempList.concat(SelectedCity);
		const dataPacket = {
			cityName: "Jaipur",
			start: start,
			end: end,
			date: date,
			placeId: finalList,
		};
		dispatch(sendTripForm(dataPacket));
		console.log(dataPacket);
		Redirect("/trip");
	}

	return (
		<>
			{(() => {
				if (temp.isLoading) {
					return <LoadingComp />;
				} else
					return (
						<>
							<AddInfo
								tripDate={tripDate}
								setTripDate={setTripDate}
								startTime={startTime}
								setStartTime={setStartTime}
								endTime={endTime}
								setEndTime={setEndTime}
								startLocId={startLocId}
								setStartLocId={setStartLocId}
							/>

							<Divider
								style={{
									marginTop: "20px",
									marginBottom: "20px",
								}}
							/>
							<Typography variant="h3">
								Choose Locations of Your Interest
							</Typography>
							<Typography variant="body1" color="textSecondary">
								Select All the places you are interested in. Our
								Algorithm will try to fit most of them into your
								schedule so that you can have the best possible
								Trip.
							</Typography>
							<Divider
								style={{
									marginTop: "20px",
									marginBottom: "20px",
								}}
							/>
							<Grid container spacing={4} direction="row">
								{data.map((city) => (
									<OnePlace
										city={city}
										addCity={addCity}
										removeCity={removeCity}
									/>
								))}
							</Grid>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								style={{ marginTop: "20px" }}
								onClick={handleFinalSubmit}
							>
								<Typography variant="h4">
									Generate Trip Plan !
								</Typography>
							</Button>
						</>
					);
			})()}
		</>
	);
};

export default function InterestComp() {
	const data = useSelector((state) => state.cityInfo.cityInfo);
	var SelectedCity = [];
	const addCity = (city) => {
		SelectedCity.push(city);
	};
	const removeCity = (city) => {
		SelectedCity.splice(SelectedCity.indexOf(city), 1);
	};
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
							SelectedCity={SelectedCity}
						/>
					);
				} else {
					return <ChooseCity />;
				}
			})()}
		</>
	);
}
