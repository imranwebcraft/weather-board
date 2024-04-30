import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherContextProvider = ({ children }) => {
	const { weatherData, loading, error } = useWeather();
	const value = { weatherData, loading, error };

	return (
		<WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;
