import React from "react";
import MainComp from "./components/mainComp";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
const store = configureStore({
	reducer: rootReducer,
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<MainComp />
				</Provider>
			</ThemeProvider>
		</>
	);
}

export default App;
