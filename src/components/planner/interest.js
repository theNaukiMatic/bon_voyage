import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export default function InterestComp() {
	const data = [
		"Hawal Mahal",
		"Pink City",
		"Amer Fort",
		"Rambagh Palace",
		"Jantar Mantar",
		"Jal Mahal",
		"Birla Mandir",
		"Jaipur Wax Museum",
	];
	return (
		<Grid container spacing={4} direction="column">
			{data.map((city) => (
				<Grid item>
					<Card
						style={{ width: "400px", backgroundColor: "lightgray" }}
					>
						<CardContent>
							<Grid container>
								<Grid item sm={8}>
									<Typography variant="h6">{city}</Typography>
								</Grid>
								<Grid item sm={2}>
									<Button>
										<ArrowUpwardIcon />
									</Button>
								</Grid>
								<Grid item sm={2}>
									<Button>
										<ArrowDownwardIcon />
									</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
