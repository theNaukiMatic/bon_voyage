import React from "react";
import MainComp from "./components/mainComp";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = configureStore({
	reducer: rootReducer,
});

function App() {
	return (
		<>
			<Provider store={store}>
				<MainComp />
			</Provider>
		</>
	);
}

export default App;
