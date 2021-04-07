import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
// import { AiFillGoogleCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
	root: { flexGrow: 1 },
	card: { flexGrow: 1 },
}));

export default function LoginComp() {
	const classes = useStyles();
	const history = useHistory();
	function handleSignInButton() {
		history.push("/signup");
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
