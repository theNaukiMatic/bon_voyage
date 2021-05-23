import {
	Card,
	CardContent,
	Grid,
	Typography,
	Button,
	CardActionArea,
	Divider,
	TextField,
	Paper,
} from "@material-ui/core";
import { gMapsKey } from "../../baseUrl";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../loadingComp";
import ChooseCity from "./chooseCity";
import { Rating } from "@material-ui/lab";
import AddInfo from "./addInfo";
import { sendTripForm } from "../../store/features/planner/sendTripSlice";
import { Redirect, useHistory, useParams } from "react-router";
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
	const data = useSelector((state) => state.cityInfo.cityInfo);
	if (data.isLoading || !data.success) {
		return <LoadingComp />;
	} else {
		return (
			<Grid item sm={4}>
				<Card
					elevation={10}
					style={{
						width: "400px",
						// minHeight: "500px",
					}}
				>
					{city.photos !== undefined && (
						<img
							// style={{ maxHeight: "400px", width: "100%" }}
							src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${city.photos[0].photo_reference}&key=${gMapsKey}`}
							alt={city.name}
						/>
					)}

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
	}
};

//this componrnt will handle all the data
const DataDisplay = ({ data, addCity, removeCity, SelectedCity }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	function dateConverter(date) {
		var dateParts = date.split("-");
		var newDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
		return newDate;
	}
	function timeConverter(time) {
		var newTime = time + ":00";
		return newTime;
	}
	const [tripDate, setTripDate] = useState("2021-06-16");
	const [startTime, setStartTime] = useState("09:00");
	const [endTime, setEndTime] = useState("18:00");
	const [startLocId, setStartLocId] = useState("");
	const [tripName, setTripName] = useState("");

	const temp = useSelector((state) => state.cityInfo.sendTrip);
	const temp2 = useSelector((state) => state.cityInfo.cityInfo);
	const prams = useParams();
	useEffect(() => {
		if (temp.success) {
			history.push("/trip");
		}
	}, [temp, history]);

	function handleFinalSubmit() {
		const start = timeConverter(startTime);
		const end = timeConverter(endTime);
		const date = dateConverter(tripDate) + " " + timeConverter(startTime);
		var tempList = [startLocId];
		var finalList = tempList.concat(SelectedCity);
		const dataPacket = {
			cityName: tripName,
			start: start,
			end: end,
			date: date,
			placeId: finalList,
		};
		dispatch(sendTripForm(dataPacket));
		console.log(dataPacket);
		Redirect("/trip");
	}
	if (temp2.isLoading || !temp2.success) {
		return <LoadingComp />;
	} else {
		return (
			<>
				<>
					<div class="mapouter">
						<div class="gmap_canvas">
							<iframe
								title="gmap"
								width="1225"
								height="500"
								src={`https://maps.google.com/maps?q=${prams.cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								style={{ borderRadius: 20 }}
							></iframe>
						</div>
					</div>
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
					<Paper
						elevation={10}
						style={{
							padding: 20,
							marginTop: 20,
							borderRadius: 20,
						}}
					>
						<Typography>Enter Trip Name</Typography>

						<TextField
							variant="outlined"
							value={tripName}
							onChange={(e) => setTripName(e.target.value)}
							fullWidth
							helperText="set a good name for your Trip"
						/>
					</Paper>

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
						schedule so that you can have the best possible Trip.
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
			</>
		);
	}
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
