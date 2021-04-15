import {
	Card,
	CardContent,
	Grid,
	Typography,
	Button,
	Paper,
	CardMedia,
	CardActionArea,
} from "@material-ui/core";
import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useSelector } from "react-redux";
import LoadingComp from "../loadingComp";
import ChooseCity from "./chooseCity";
import { Rating } from "@material-ui/lab";
import { ChangeHistory } from "@material-ui/icons";
import AddInfo from "./addInfo";

const DataDisplay = ({ data }) => {
	return (
		<>
			<AddInfo />
			<Typography variant="h3">
				Choose Loaction of Your Interest
			</Typography>
			<Grid container spacing={4} direction="row">
				{data.map((city) => (
					<Grid item sm={4}>
						<Card
							style={{
								width: "400px",
							}}
						>
							<CardContent>
								<Typography variant="h5">
									{city.name}
								</Typography>
								<Rating value={city.rating} readOnly />
								<Typography
									variant="body1"
									color="textSecondary"
								>
									{city.formatted_address}
								</Typography>
							</CardContent>
							<CardActionArea>
								<Button>Select</Button>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default function InterestComp() {
	const data = useSelector((state) => state.cityInfo.cityInfo);

	return (
		<>
			{(() => {
				if (data.isLoading) {
					return <LoadingComp />;
				} else if (data.success) {
					return <DataDisplay data={data.cityData} />;
				} else {
					return <ChooseCity />;
				}
			})()}
		</>
	);
}
