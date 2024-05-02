import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="font-roboto text-light bg-no-repeat bg-cover">
			<App />
		</div>
	</React.StrictMode>
);
