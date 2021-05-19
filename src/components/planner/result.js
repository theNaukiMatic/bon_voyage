import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";

function OneTrip({ name, address, timeTaken }) {
	return (
		<>
			<Grid item sm={3}>
				{(() => {
					if (name === "wait") {
						return (
							<>
								<Paper style={{ padding: "20px" }}>
									<Typography variant="h4">
										{" "}
										Wait for 1 hr
									</Typography>
								</Paper>
							</>
						);
					} else {
						return (
							<>
								<Paper style={{ padding: "20px" }}>
									<Typography>{name}</Typography>
									<Typography color="textSecondary">
										{address}
									</Typography>
								</Paper>
							</>
						);
					}
				})()}
				<Paper
					style={{
						padding: "10px",
						backgroundColor: "lightgrey",
					}}
				>
					<Typography> Time Spent = {timeTaken} hrs</Typography>
				</Paper>
			</Grid>
			<Grid item>
				<ArrowRightAltIcon style={{ marginTop: "50px" }} />
			</Grid>
		</>
	);
}
export default function TripResultComp() {
	const data = useSelector((state) => state.cityInfo.sendTrip);
	return (
		<>
			{(() => {
				if (!data.isLoading && data.success) {
					return (
						<>
							<Typography variant="h2">All done !</Typography>
							<Typography variant="h5" color="textSecondary">
								These were the top 5 best possible trips for you
								based on the given time limit and your choices
								of places.
							</Typography>
							<Divider
								style={{
									marginTop: "20px",
									marginBottom: "20px",
								}}
							/>
							<Grid container spacing={4}>
								<Grid item>
									{" "}
									<Paper
										style={{
											padding: "20px",
											marginTop: "30px",
										}}
									>
										<Typography variant="h4">
											Start
										</Typography>
									</Paper>
								</Grid>
								<Grid item>
									<ArrowRightAltIcon
										style={{ marginTop: "50px" }}
									/>
								</Grid>

								<OneTrip
									name="Hawa Mahal"
									address="Jaipur"
									timeTaken="4"
								/>
								<OneTrip name="wait" address="" timeTaken="" />
								<OneTrip
									name="Red Fort"
									address="Pink City"
									timeTaken="3"
								/>
								<OneTrip
									name="Akshar dham"
									address="Jaipur"
									timeTaken="2"
								/>
								<OneTrip name="wait" address="" timeTaken="" />
								<Grid item>
									{" "}
									<Paper
										style={{
											padding: "20px",
											marginTop: "30px",
										}}
									>
										<Typography variant="h4">
											End
										</Typography>
									</Paper>
								</Grid>
							</Grid>
						</>
					);
				} else {
					return (
						<>
							<LoadingComp />
						</>
					);
				}
			})()}
		</>
	);
}
