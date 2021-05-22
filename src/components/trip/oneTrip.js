import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import LoadingComp from "../loadingComp";
import FinanceComp from "./finance";
import TripChatComp from "./tripChat";
import TripPathsComp from "./tripPaths";
import TripMembersComp from "./tripMembers";
import { fetchTripDetails } from "../../store/features/trip/tripDetail";
import { fetchTripChat } from "../../store/features/trip/tripChat";
import { fetchTripFinance } from "../../store/features/trip/tripFinance";

import { fetchCalcFin } from "../../store/features/trip/calcTripFin";
import YourFinancesComp from "./yourFinances";

export default function OneTripComp() {
	const params = useParams();
	const dispatch = useDispatch();
	const tripData = useSelector((state) => state.trips.tripDetail);
	useEffect(() => {
		dispatch(fetchTripDetails(params.tripId));
		dispatch(fetchTripChat(params.tripId));
		dispatch(fetchTripFinance(params.tripId));
		dispatch(fetchCalcFin(params.tripId));
	}, [dispatch, params.tripId]);
	// function refreshChat() {
	// 	dispatch(fetchTripChat(params.tripId));
	// }
	if (tripData.isLoading || !tripData.success) {
		return <LoadingComp />;
	} else {
		return (
			<>
				<Typography variant="h2" gutterBottom>
					{tripData.data.tripInfo.tripName}
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TripPathsComp paths={tripData.data.tripInfo.result} />
						<TripMembersComp
							members={tripData.data.tripInfo.users}
						/>
						<YourFinancesComp tripId={params.tripId} />
					</Grid>
					<Grid item xs={8}>
						<TripChatComp tripId={params.tripId} />
						<FinanceComp tripId={params.tripId} />
					</Grid>
				</Grid>
			</>
		);
	}
}
