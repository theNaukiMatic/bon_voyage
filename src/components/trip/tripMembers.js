import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function TripMembersComp({ members }) {
	return (
		<Paper elevation={10} style={{ padding: 20, marginTop: 20 }}>
			<Typography
				variant="h5"
				style={{ fontWeight: 600, marginBottom: 20 }}
				gutterBottom
			>
				Trip Members
			</Typography>
			{members.map((member) => {
				return (
					<Paper
						elevation={10}
						style={{
							padding: 20,
							display: "flex",
							alignItems: "center",
							marginBottom: 20,
							borderRadius: 20,
						}}
					>
						<Avatar src="" alt={member.username} />
						<Typography
							style={{ fontWeight: 600, marginLeft: 10 }}
							variant="h6"
						>
							{member.username}
						</Typography>
					</Paper>
				);
			})}
		</Paper>
	);
}
