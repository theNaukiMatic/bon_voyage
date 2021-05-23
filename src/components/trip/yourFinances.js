import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";

export default function YourFinancesComp(tripId) {
	const finance = useSelector((state) => state.trips.calcFinance);
	if (finance.isLoading || !finance.success) {
		return <LoadingComp />;
	} else {
		return (
			<Paper elevation={10} style={{ padding: 20, marginTop: 20 }}>
				<Typography
					variant="h5"
					style={{ fontWeight: 600, marginBottom: 20 }}
					gutterBottom
				>
					Calculated Finances
				</Typography>
				{finance.data.splitWise !== undefined &&
					finance.data.splitWise.map((member) => {
						return (
							<>
								<Paper
									elevation={10}
									style={{
										padding: 20,
										marginBottom: 20,
										borderRadius: 20,
									}}
								>
									<Typography
										style={{
											fontWeight: 600,
										}}
										variant="h6"
									>
										{member.username}
									</Typography>
									{member.toPay >= 0 && (
										<Typography
											variant="h4"
											style={{ color: "red" }}
										>
											owes ₹ {member.toPay}
										</Typography>
									)}
									{member.toPay < 0 && (
										<Typography
											variant="h4"
											style={{ color: "green" }}
										>
											will get ₹ {-member.toPay}
										</Typography>
									)}
								</Paper>
							</>
						);
					})}
			</Paper>
		);
	}
}
