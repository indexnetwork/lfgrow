import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import AppRoutes from "./routes";
import MainLayout from "./components/layout/MainLayout";

const App: React.VFC = () => (
	<Provider store={store}>
		<BrowserRouter>
			<MainLayout>
				<AppRoutes />
			</MainLayout>
		</BrowserRouter>
	</Provider>
);

export default App;
