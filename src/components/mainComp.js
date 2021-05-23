import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginComp from "./auth/login";
import SignUpComp from "./auth/signUp";
// import SimpleMap from "./mapsAPI/simpleMap";
import NavBar from "./navbar";
import Footer from "./navbar/footer";
import HomeComp from "./homeComp";
import InterestComp from "./planner/interest";
import TripResultComp from "./planner/result";
import AllTripsComp from "./trip/allTrips";
import OneTripComp from "./trip/oneTrip";
import SearchTripComp from "./searchTrips";
import SearchResultComp from "./searchTrips/searchResult";

export default function MainComp() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + "/pattern.png"
					})`,
					backgroundRepeat: "repeat",
					width: "100%",
					minHeight: "150vh",
				}}
			>
				<Grid container direction="column">
					<Grid item style={{ marginBottom: "20px" }}>
						<NavBar />
					</Grid>
					<Grid item>
						<Container>
							<Switch>
								<Route exact path="/">
									<HomeComp />
								</Route>
								<Route path="/login">
									<LoginComp />
								</Route>
								<Route path="/chooseInterest/:cityName">
									<InterestComp />
								</Route>
								<Route path="/myTrips">
									<AllTripsComp />
								</Route>
								<Route path="/tripDetail/:tripId">
									<OneTripComp />
								</Route>
								<Route path="/trip">
									<TripResultComp />
								</Route>
								<Route path="/signup">
									<SignUpComp />
								</Route>
								<Route path="/searchTrip">
									<SearchTripComp />
								</Route>
								<Route path="/searchResult">
									<SearchResultComp />
								</Route>
							</Switch>
						</Container>
					</Grid>
					<Grid item>
						<Footer />
					</Grid>
				</Grid>
			</div>
		</>
	);
}
