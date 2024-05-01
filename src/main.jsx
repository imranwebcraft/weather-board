import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import bodyBackgroundImage1 from "./assets/body-bg.png";
import bodyBackgroundImage2 from "./assets/body-bg2.jpg";
import bodyBackgroundImage3 from "./assets/body-bg3.jpg";
import bodyBackgroundImage4 from "./assets/body-bg4.jpg";
import "./index.css";

const bgImageArray = [
	bodyBackgroundImage2,
	bodyBackgroundImage3,
	bodyBackgroundImage4,
	bodyBackgroundImage1,
];

const getRandomArrayLength = Math.random() * bgImageArray.length;
const randomBgImage = bgImageArray[Math.floor(getRandomArrayLength)];

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div
			style={{ backgroundImage: `url(${randomBgImage})` }}
			className="font-roboto text-light bg-no-repeat bg-cover"
		>
			<App />
		</div>
	</React.StrictMode>
);
