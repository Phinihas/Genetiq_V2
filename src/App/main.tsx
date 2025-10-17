import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../contexts/ThemeContext";
import "../i18n"; // Initialize i18n

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<ThemeProvider>
			<StrictMode>
				<App />
				<ToastContainer />
			</StrictMode>
		</ThemeProvider>
	</Provider>,
);
