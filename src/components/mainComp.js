import { Container, Grid } from "@material-ui/core";
import { GoogleApiWrapper } from "google-maps-react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginComp from "./auth/login";
import SignUpComp from "./auth/signUp";
import SimpleMap from "./mapsAPI/simpleMap";
import NavBar from "./navbar";
import Footer from "./navbar/footer";
import PlannerComp from "./planner";
import LocationSearchInput from "./mapsAPI/autoComplete";
import HomeComp from "./homeComp";
import InterestComp from "./planner/interest";

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
								{/* <LocationSearchInput /> */}

								<HomeComp />
							</Route>
							<Route path="/login">
								<LoginComp />
							</Route>
							<Route path="/chooseInterest">
								<InterestComp />
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
