import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: { flexGrow: 1 },
	title: { flexGrow: 1 },
}));
export default function NavBar() {
	const classes = useStyles();
	const history = useHistory();
	function handleLoginButton() {
		history.push("/login");
	}
	function handleHomeButton() {
		history.push("/");
	}

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

						<Button
							color="inherit"
							variant="outlined"
							onClick={handleLoginButton}
							style={{ marginLeft: "auto" }}
						>
							LOGIN
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
}
