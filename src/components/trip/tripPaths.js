import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function TripPathsComp({ paths }) {
	return (
		<>
			<Paper style={{ padding: 60 }} elevation={10}>
				{paths.map((path) => (
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
			<Paper style={{ padding: 20, marginTop: 20 }}>
				<Typography variant="h4">Trip Chat</Typography>
			</Paper>
		</>
	);
}
