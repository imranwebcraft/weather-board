import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

// import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import ClearSkyImage from "./assets/body-bg4.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context";

const Page = () => {
	const { weatherData } = useContext(WeatherContext);
	const [climateImage, setClimateImage] = useState("");

	const getBackgroundImage = (climate) => {
		switch (climate) {
			case "Rain":
				return RainyDayImage;
			case "Clouds":
				return ScatterdCloudsImage;
			case "Clear":
				return ClearSkyImage;
			case "Snow":
				return SnowImage;
			case "Thunder":
				return ThunderStormImage;
			case "Fog":
				return WinterImage;
			case "Haze":
				return FewCloudsImage;
			case "Mist":
				return MistImage;
			default:
				return ClearSkyImage;
		}
	};

	useEffect(() => {
		const bgImage = getBackgroundImage(weatherData.climate);
		setClimateImage(bgImage);
	}, [weatherData.climate]);

	return (
		<div
			style={{ backgroundImage: `url('${climateImage}')` }}
			className="h-screen grid place-items-center bg-no-repeat bg-cover"
		>
			<Header />
			<WeatherBoard />
		</div>
	);
};

export default Page;
