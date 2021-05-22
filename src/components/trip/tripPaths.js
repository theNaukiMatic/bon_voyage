import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function TripPathsComp({ paths }) {
	return (
		<>
			<Paper style={{ padding: 20 }} elevation={10}>
				<Typography
					variant="h5"
					style={{ fontWeight: 600, marginBottom: 20 }}
					gutterBottom
				>
					Trip Plan
				</Typography>
				{paths[0].path.map((path) => (
					<>
						<Paper
							elevation={10}
							style={{
								padding: 20,
								// margin: 20,
								backgroundColor: "lightblue",
							}}
						>
							{(() => {
								if (path.placeId === "wait") {
									return (
										<>
											<Typography
												style={{ fontWeight: 600 }}
											>
												Wait for 1hr
											</Typography>
										</>
									);
								} else {
									return (
										<>
											<Typography
												style={{ fontWeight: 600 }}
											>
												{path.placeName}
											</Typography>
											<Typography>
												{path.placeAddress}
											</Typography>
											<Typography
												style={{
													fontWeight: 600,
													color: "red",
												}}
											>
												Time elapsed ={" "}
												{
													path.timeAfterVisit
														.$numberDecimal
												}{" "}
												hrs
											</Typography>
										</>
									);
								}
							})()}
						</Paper>
						<Box
							style={{
								display: "flex",
								justifyContent: "center",
								color: "grey",
							}}
						>
							||
						</Box>
					</>
				))}
				<Paper
					elevation={10}
					style={{
						padding: "20px",
						// margin: 20,
						backgroundColor: "lightGrey",
					}}
				>
					<Typography style={{ fontWeight: 600 }}>End</Typography>
				</Paper>
			</Paper>
		</>
	);
}
