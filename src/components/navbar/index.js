import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
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
	function handleLogoutButton() {
		dispatch(logoutUser());
		// alert("haha");
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
				<AppBar position="static">
					<Toolbar>
						<Button color="inherit" onClick={handleHomeButton}>
							<Typography variant="h6" className={classes.title}>
								bon voyage
							</Typography>
						</Button>
						<Box
							display={loginVisible}
							style={{ marginLeft: "auto" }}
						>
							<Button
								color="inherit"
								variant="outlined"
								onClick={handleLoginButton}
							>
								LOGIN
							</Button>
						</Box>
						<Box
							display={logoutVisible}
							style={{ marginLeft: "auto" }}
						>
							<Button
								color="inherit"
								variant="outlined"
								onClick={handleLogoutButton}
							>
								Logout
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
}
