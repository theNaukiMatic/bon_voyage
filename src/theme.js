import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	palette: {
		secondary: {
			main: "#fc9403",
			contrastText: "#FFFFFF",
		},
		primary: {
			main: "#2f70d6",
		},
	},
	typography: {
		fontFamily: ["Abril Fatface", "cursive"].join(","),
	},
});
