import {
	Avatar,
	Box,
	Button,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import React from "react";
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
						{msg.authorName}
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
					{msg.authorName}
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
export default function TripChatComp() {
	const myId = "602260c56ccd705380f5676d";
	const chats = [
		{
			_id: "60a27b78428ecd5c9ea7c1e3",
			message: "I am so exited about this trip !",
			authorId: "afadsfasdfasdfadsfdasf",
			authorName: "Vishal Muwal",
			createdAt: "2021-05-17T14:19:36.981Z",
			updatedAt: "2021-05-17T14:29:10.099Z",
			__v: 0,
		},
		{
			_id: "60a27c36e91e7c5ee4c463c1",
			message: "me too!",
			authorId: "afadsfasdfasdfadsfdasf",
			authorName: "Ishan Agrawal",
			createdAt: "2021-05-17T14:22:46.659Z",
			updatedAt: "2021-05-17T14:22:46.659Z",
			__v: 0,
		},
		{
			_id: "60a27c36e91e7c5ee4c463c1",
			message: "Dont forget to pack important stuff.",
			authorId: "afadsfasdfasdfadsfdasf",
			authorName: "Ishan Agrawal",
			createdAt: "2021-05-17T14:22:46.659Z",
			updatedAt: "2021-05-17T14:22:46.659Z",
			__v: 0,
		},
		{
			_id: "60a27c36e91e7c5ee4c463c1",
			message: "And leave on time",
			authorId: "afadsfasdfasdfadsfdasf",
			authorName: "Ishan Agrawal",
			createdAt: "2021-05-17T14:22:46.659Z",
			updatedAt: "2021-05-17T14:22:46.659Z",
			__v: 0,
		},
		{
			_id: "60a27c36e91e7c5ee4c463c1",
			message: "When are we leaving?",
			authorId: "602260c56ccd705380f5676d",
			authorName: "Nikhil Kumar",
			createdAt: "2021-05-17T14:22:46.659Z",
			updatedAt: "2021-05-17T14:22:46.659Z",
			__v: 0,
		},
		{
			_id: "60a27b78428ecd5c9ea7c1e3",
			message: "tommorow evening",
			authorId: "afadsfasdfasdfadsfdasf",
			authorName: "Vishal Muwal",
			createdAt: "2021-05-17T14:19:36.981Z",
			updatedAt: "2021-05-17T14:29:10.099Z",
			__v: 0,
		},
		{
			_id: "60a27b78428ecd5c9ea7c1e3",
			message: "i will be there by 6 pm",
			authorId: "afadsfasdfasdfadsfdasf",
			authorName: "Vishal Muwal",
			createdAt: "2021-05-17T14:19:36.981Z",
			updatedAt: "2021-05-17T14:29:10.099Z",
			__v: 0,
		},
		{
			_id: "60a27c36e91e7c5ee4c463c1",
			message: "ok",
			authorId: "602260c56ccd705380f5676d",
			authorName: "Nikhil Kumar",
			createdAt: "2021-05-17T14:22:46.659Z",
			updatedAt: "2021-05-17T14:22:46.659Z",
			__v: 0,
		},
	];
	// const scrollToMyRef = () => {
	// 	const scroll =
	// 		this.chatContainer.current.scrollHeight -
	// 		this.chatContainer.current.clientHeight;
	// 	this.chatContainer.current.scrollTo(0, scroll);
	// };
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
			>
				{chats.map((msg) => (
					<>
						{(() => {
							if (msg.authorId === myId) {
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
