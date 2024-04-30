import { useContext } from "react";
import { WeatherContext } from "../../context";
import getFormattedDate from "../../utils/getTime";

const WeatherHeadline = () => {
	const { weatherData } = useContext(WeatherContext);
	const { location, temp, time } = weatherData;

	return (
		<div>
			<div className="max-md:flex items-center justify-between md:-mt-10">
				<img
					src="./assets/cloud.svg"
					alt="cloud"
				/>
				<div className="max-md:flex items-center max-md:space-x-4">
					<h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
						{Math.round(temp)}°
					</h1>
					<div className="flex items-center space-x-4 md:mb-4">
						<img src="./assets/pin.svg" />
						<h2 className="text-2xl lg:text-[50px]">{location}</h2>
					</div>
				</div>
			</div>
			<p className="text-sm lg:text-lg">
				{getFormattedDate(time, "time", false)} -{" "}
				{getFormattedDate(time, "date", false)}
			</p>
		</div>
	);
};

export default WeatherHeadline;
