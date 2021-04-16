import { CircularProgress } from "@material-ui/core";
import React from "react";

export default function LoadingComp() {
	return (
		<div>
			<CircularProgress color="secondary" />
		</div>
	);
}
