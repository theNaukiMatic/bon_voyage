import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginComp from "./auth/login";
import SignUpComp from "./auth/signUp";
import NavBar from "./navbar";
import Footer from "./navbar/footer";
import PlannerComp from "./planner";

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
								<PlannerComp />
							</Route>
							<Route path="/login">
								<LoginComp />
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
