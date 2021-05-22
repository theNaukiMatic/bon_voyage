import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";

function OneTrip({ name, address }) {
	return (
		<>
			<Grid item sm={3}>
				{(() => {
					if (name === "null") {
						return (
							<>
								<Paper
									style={{
										padding: "20px",
										backgroundColor: "lightblue",
									}}
									elevation={10}
								>
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
								<Paper
									style={{ padding: "20px" }}
									elevation={10}
								>
									<Typography>{name}</Typography>
									<Typography color="textSecondary">
										{address}
									</Typography>
								</Paper>
							</>
						);
					}
				})()}
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

								{data.cityData.result[0].path.map((onePath) => {
									return (
										<>
											<OneTrip
												name={onePath.placeName}
												address={onePath.placeAddress}
											/>
										</>
									);
								})}
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
