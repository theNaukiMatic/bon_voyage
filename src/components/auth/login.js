import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, useHistory } from "react-router-dom";
// import LoadingComp from "../loadingComp";

//redux functions
import { loginUser } from "../../store/features/auth/loginSlice";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
	root: { flexGrow: 1 },
	card: { flexGrow: 1 },
}));

export default function LoginComp() {
	const auth = useSelector((state) => state.auth.login);
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const [userName, setUserName] = useState("");
	const [passWord, setPassword] = useState("");
	if (auth.isAuthenticated) {
		return <Redirect to="/" />;
	}
	function handleSignInButton() {
		history.push("/signup");
	}
	function handleLoginSubmit(e) {
		e.preventDefault();
		const creds = { username: userName, password: passWord };
		dispatch(loginUser(creds));
	}
	return (
		<>
			<Card
				className={classes.card}
				style={{ maxWidth: "500px", margin: "auto" }}
			>
				<CardContent
					style={{
						margin: "40px",
					}}
				>
					<Typography
						variant="h3"
						component="h3"
						style={{ marginBottom: "40px" }}
					>
						Login
					</Typography>
					<form noValidate>
						<Grid
							container
							direction="column"
							// style={{ height: "400px" }}
							spacing={4}
						>
							<Grid item>
								<TextField
									label="Email"
									type="email"
									value={userName}
									onChange={(e) =>
										setUserName(e.target.value)
									}
									required
									autoComplete="current-email"
									style={{ width: "100%" }}
								/>
							</Grid>
							<Grid item>
								<TextField
									id="standard-password-input"
									label="Password"
									type="password"
									value={passWord}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									required
									autoComplete="current-password"
									style={{ width: "100%" }}
								/>
							</Grid>
							<Grid
								item
								container
								spacing={4}
								style={{ marginTop: "10px" }}
							>
								<Grid item xs={12} sm={9}>
									<Button
										color="secondary"
										variant="outlined"
										style={{ width: "100%" }}
										onClick={handleSignInButton}
									>
										Dont have an account ?
									</Button>
								</Grid>
								<Grid item xs={12} sm={3}>
									<Button
										color="secondary"
										variant="contained"
										style={{ width: "100%" }}
										onClick={(e) => handleLoginSubmit(e)}
									>
										Login
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</>
	);
}
