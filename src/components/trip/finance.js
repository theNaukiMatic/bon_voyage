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

import { postFinanceRequest } from "../../store/features/trip/postFin";
import { fetchCalcFin } from "../../store/features/trip/calcTripFin";
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
					{"₹ " + msg.expended}
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
					{"₹ " + msg.expended}
				</Typography>
			</Paper>
		</>
	);
}
export default function TripFinance({ tripId }) {
	const myId = localStorage.getItem("userId");
	const chats = useSelector((state) => state.trips.tripFinance);
	const [msg, setMsg] = useState(0);
	const dispatch = useDispatch();
	function handlePostFin() {
		dispatch(
			postFinanceRequest({
				tripId: tripId,
				msg: msg,
			})
		);
	}
	useEffect(() => {
		dispatch(fetchCalcFin(tripId));
	}, [chats, tripId, dispatch]);
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
					Trip Finance History
				</Typography>
				<Box
					style={{
						height: "600px",
						overflowY: "scroll",
						backgroundColor: "lightgrey",
					}}
				>
					{chats.data.splitWise !== undefined &&
						chats.data.splitWise.map((msg) => (
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
							type="number"
							value={msg}
							onChange={(e) => setMsg(e.target.value)}
						/>
						<Button
							variant="contained"
							color="secondary"
							style={{
								width: 200,
								marginLeft: 10,
								fontWeight: 600,
							}}
							onClick={handlePostFin}
						>
							Add Expense
						</Button>
					</Box>
				</Paper>
			</Paper>
		);
	}
}
