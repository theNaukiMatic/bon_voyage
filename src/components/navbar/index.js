import {
	AppBar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../store/features/auth/loginSlice";

const useStyles = makeStyles((theme) => ({
	root: { flexGrow: 1 },
	title: { flexGrow: 1 },
}));
export default function NavBar() {
	const auth = useSelector((state) => state.auth.login);
	const dispatch = useDispatch();
	var [loginVisible, setLoginVisible] = useState("block");
	var [logoutVisible, setLogoutVisible] = useState("none");

	const classes = useStyles();
	const history = useHistory();
	function handleLoginButton() {
		history.push("/login");
	}
	function handleHomeButton() {
		history.push("/");
	}
	function handleTripButton() {
		history.push("/myTrips");
	}
	function handleLogoutButton() {
		dispatch(logoutUser());
	}
	function handleSearchTrip() {
		history.push("/searchTrip");
	}
	useEffect(() => {
		if (auth.isAuthenticated) {
			setLoginVisible("none");
			setLogoutVisible("block");
		} else {
			setLoginVisible("block");
			setLogoutVisible("none");
		}
	}, [auth]);

	return (
		<>
			<div className={classes.root}>
				<Box style={{ backgroundColor: "#fc9403", height: 10 }}></Box>
				<AppBar position="static">
					<Container>
						<Toolbar>
							{/* <Button color="inherit"  > */}

							<Box
								style={{ cursor: "pointer" }}
								onClick={handleHomeButton}
							>
								<Typography
									variant="h5"
									className={classes.title}
								>
									{" "}
									bon voyage
								</Typography>
							</Box>

							{/* </Button> */}
							<Box style={{ marginLeft: "auto" }}>
								<Button
									color="inherit"
									// variant="outlined"
									onClick={handleTripButton}
								>
									Your Trips
								</Button>
							</Box>
							<Box style={{ marginLeft: "10px" }}>
								<Button
									color="inherit"
									// variant="outlined"
									onClick={handleSearchTrip}
								>
									Search Trips
								</Button>
							</Box>
							<Box
								display={loginVisible}
								style={{ marginLeft: "10px" }}
							>
								<Button
									color="inherit"
									// variant="outlined"
									onClick={handleLoginButton}
								>
									LOGIN
								</Button>
							</Box>

							<Box
								display={logoutVisible}
								style={{ marginLeft: "10px" }}
							>
								<Button
									color="inherit"
									// variant="outlined"
									onClick={handleLogoutButton}
								>
									Logout
								</Button>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</div>
		</>
	);
}
