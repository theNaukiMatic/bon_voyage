import {
	Avatar,
	Box,
	Button,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import { ChatSharp } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";
function MsgOther({ msg }) {
	return (
		<>
			<Paper
				style={{
					padding: "5px 20px 5px 20px",
					margin: 10,
					borderRadius: 20,
				}}
				elevation={10}
			>
				<Box display="flex" alignItems="center">
					<Avatar src="" alt={msg.authorName} variant="small" />
					<Typography style={{ fontWeight: 600, marginLeft: 10 }}>
						{msg.author.username}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						style={{ marginLeft: "auto" }}
					>
						{/* {new Intl.DateTimeFormat("default", {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							hour12: true,
						}).format(new Date(Date.parse(msg.updatedAt)))} */}
					</Typography>
				</Box>

				<Typography variant="h5" color="textSecondary">
					{" "}
					{msg.message}
				</Typography>
			</Paper>
		</>
	);
}
function MsgMine({ msg }) {
	return (
		<>
			<Paper
				style={{
					padding: "5px 20px 5px 20px",
					margin: 10,
					backgroundColor: "lightblue",
					borderRadius: 20,
				}}
				elevation={10}
			>
				<Typography style={{ fontWeight: 600 }} align="right">
					{msg.author.username}
				</Typography>
				<Typography variant="body2" color="textSecondary" align="right">
					{/* {new Intl.DateTimeFormat("default", {
						year: "numeric",
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						hour12: true,
					}).format(new Date(Date.parse(msg.updatedAt)))} */}
				</Typography>
				<Typography variant="h5" color="textSecondary" align="right">
					{" "}
					{msg.message}
				</Typography>
			</Paper>
		</>
	);
}
export default function TripFinance() {
	const myId = localStorage.getItem("userId");
	const chats = useSelector((state) => state.trips.tripFinance);

	if (chats.isLoading || !chats.success) {
		return (
			<Box height={700}>
				<LoadingComp />
			</Box>
		);
	} else {
		return (
			<Paper style={{ padding: 40, marginTop: 20 }} elevation={10}>
				<Typography
					variant="h5"
					style={{ fontWeight: 600, marginBottom: 20 }}
					gutterBottom
				>
					Trip Finance
				</Typography>
				<Box
					style={{
						height: "600px",
						overflowY: "scroll",
						backgroundColor: "lightgrey",
					}}
				>
					{chats.data.splitWise.map((msg) => (
						<>
							{(() => {
								if (msg.author._id === myId) {
									return <MsgMine msg={msg} />;
								} else {
									return <MsgOther msg={msg} />;
								}
							})()}
						</>
					))}
				</Box>
				<Paper elevation={10} style={{ marginLeft: 10, padding: 10 }}>
					<Box display="flex">
						<TextField fullWidth variant="outlined" />
						<Button
							variant="contained"
							color="secondary"
							style={{
								width: 100,
								marginLeft: 10,
								fontWeight: 600,
							}}
						>
							Send
						</Button>
					</Box>
				</Paper>
			</Paper>
		);
	}
}