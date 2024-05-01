import { useContext } from "react";
import { WeatherContext } from "../../context";
import CloudyIcon from "../../assets/icons/cloud.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import TempMaxIcon from "../../assets/icons/temp-max.svg";
import TempMinIcon from "../../assets/icons/temp-min.svg";
import WindIcon from "../../assets/icons/wind.svg";

const WeatherCondition = () => {
	const { weatherData } = useContext(WeatherContext);
	const { maxTemp, minTemp, humidity, cloudPercentage, wind, climate } =
		weatherData;

	return (
		<div>
			<p className="text-sm lg:text-lg font-bold uppercase mb-8">
				The climate is{" "}
				<span className="decoration-4 underline underline-offset-2 ml-2 decoration-amber-500">
					{climate}
				</span>
			</p>
			<ul className="space-y-6 lg:space-y-6">
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Temp max</span>
					<div className="inline-flex space-x-4">
						<p>{Math.floor(Math.round(maxTemp / 10))}°</p>
						<img
							src={TempMaxIcon}
							alt="temp-max"
						/>
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Temp min</span>
					<div className="inline-flex space-x-4">
						<p>{Math.floor(Math.round(minTemp / 10))}°</p>
						<img
							src={TempMinIcon}
							alt="temp-min"
						/>
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Humadity</span>
					<div className="inline-flex space-x-4">
						<p>{humidity}%</p>
						<img
							src={HumidityIcon}
							alt="humidity"
						/>
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Cloudy</span>
					<div className="inline-flex space-x-4">
						<p>{cloudPercentage}%</p>
						<img
							src={CloudyIcon}
							alt="cloudy"
						/>
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Wind</span>
					<div className="inline-flex space-x-4">
						<p>{wind}km/h</p>
						<img
							src={WindIcon}
							alt="wind"
						/>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default WeatherCondition;
