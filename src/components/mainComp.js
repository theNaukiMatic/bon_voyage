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

export default function MainComp() {
	return (
		<>
			<Grid container direction="column">
				<Grid item style={{ marginBottom: "20px" }}>
					<NavBar />
				</Grid>
				<Grid item>
					<Container>
						<Switch>
							<Route exact path="/">
								{/* <SimpleMap /> */}

								<HomeComp />
							</Route>
							<Route path="/login">
								<LoginComp />
							</Route>
							<Route path="/chooseInterest">
								<InterestComp />
							</Route>
							<Route path="/myTrips">
								<AllTripsComp />
							</Route>
							<Route path="/tripDetail">
								<OneTripComp />
							</Route>
							<Route path="/trip">
								<TripResultComp />
							</Route>
							<Route path="/signup">
								<SignUpComp />
							</Route>
						</Switch>
					</Container>
				</Grid>
				<Grid item>
					<Footer />
				</Grid>
			</Grid>
		</>
	);
}
