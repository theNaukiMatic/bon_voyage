import {
	Avatar,
	Box,
	Button,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../loadingComp";
import { postMessageRequest } from "../../store/features/trip/postMsg";
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
						{new Intl.DateTimeFormat("default", {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							hour12: true,
						}).format(new Date(Date.parse(msg.updatedAt)))}
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
					{new Intl.DateTimeFormat("default", {
						year: "numeric",
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						hour12: true,
					}).format(new Date(Date.parse(msg.updatedAt)))}
				</Typography>
				<Typography variant="h5" color="textSecondary" align="right">
					{" "}
					{msg.message}
				</Typography>
			</Paper>
		</>
	);
}
export default function TripChatComp({ tripId }) {
	const myId = localStorage.getItem("userId");
	const chats = useSelector((state) => state.trips.tripChat);
	function updateScroll() {
		var element = document.getElementById("charBox");
		if (element != null) element.scrollTop = element.scrollHeight;
	}
	useEffect(() => {
		if (!(chats.isLoading || !chats.success)) updateScroll();
	}, [chats]);
	const dispatch = useDispatch();
	const [myMessage, setMyMessage] = useState("");
	function handleMsgSend() {
		dispatch(
			postMessageRequest({
				tripId: tripId,
				msg: myMessage,
			})
		);
	}
	if (chats.isLoading || !chats.success) {
		return (
			<Box height={700}>
				<LoadingComp />
			</Box>
		);
	} else if (chats.data === "Join this trip to view message") {
		return <>Join this trip to view messages</>;
	} else {
		return (
			<Paper style={{ padding: 40 }} elevation={10}>
				<Typography
					variant="h5"
					style={{ fontWeight: 600, marginBottom: 20 }}
					gutterBottom
				>
					Trip Chat
				</Typography>
				<Box
					style={{
						height: "600px",
						overflowY: "scroll",
						backgroundColor: "lightgrey",
					}}
					id="charBox"
				>
					{chats.data.messages.map((msg) => (
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
				<Paper elevation={10} style={{ padding: 10 }}>
					<Box display="flex">
						<TextField
							fullWidth
							variant="outlined"
							value={myMessage}
							onChange={(e) => setMyMessage(e.target.value)}
						/>
						<Button
							variant="contained"
							color="secondary"
							style={{
								width: 100,
								marginLeft: 10,
								fontWeight: 600,
							}}
							onClick={handleMsgSend}
						>
							Send
						</Button>
					</Box>
				</Paper>
			</Paper>
		);
	}
}
