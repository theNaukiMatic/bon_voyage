import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { postSignUp } from "../../store/features/auth/signUpSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: { flexGrow: 1 },
	card: { flexGrow: 1 },
}));

export default function SignUpComp() {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	function handleLoginButton() {
		history.push("/login");
	}
	function handleSubmit() {
		const creds = {
			email: email,
			firstname: firstName,
			lastname: lastName,
			password: password,
			username: userName,
		};
		dispatch(postSignUp(creds));
		history.push("/login");
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
						Sign Up
					</Typography>
					<form noValidate>
						<Grid container direction="column" spacing={4}>
							<Grid item>
								<TextField
									label="Email"
									type="email"
									required
									autoComplete="current-email"
									style={{ width: "100%" }}
									value={email}
									onChange={(e) => setemail(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="User Name"
									required
									style={{ width: "100%" }}
									value={userName}
									onChange={(e) =>
										setUserName(e.target.value)
									}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="First Name"
									required
									style={{ width: "100%" }}
									value={firstName}
									onChange={(e) =>
										setFirstName(e.target.value)
									}
								/>
							</Grid>
							<Grid item>
								<TextField
									label="Last Name"
									required
									style={{ width: "100%" }}
									value={lastName}
									onChange={(e) =>
										setLastName(e.target.value)
									}
								/>
							</Grid>
							<Grid item>
								<TextField
									id="standard-password-input"
									label="Password"
									type="password"
									required
									autoComplete="current-password"
									style={{ width: "100%" }}
									value={password}
									onChange={(e) =>
										setpassword(e.target.value)
									}
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
										onClick={handleLoginButton}
									>
										Already have an account ?
									</Button>
								</Grid>
								<Grid item xs={12} sm={3}>
									<Button
										color="secondary"
										variant="contained"
										style={{ width: "100%" }}
										onClick={handleSubmit}
									>
										SignUp
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
