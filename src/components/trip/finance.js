import { Paper, Typography } from "@material-ui/core";
import React from "react";

export default function FinanceComp() {
	return (
		<Paper style={{ padding: 40, marginTop: 20 }} elevation={10}>
			<Typography
				variant="h5"
				style={{ fontWeight: 600, marginBottom: 20 }}
				gutterBottom
			>
				Trip Finance
			</Typography>
		</Paper>
	);
}
