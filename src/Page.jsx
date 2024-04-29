import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

const Page = () => {
	return (
		<div className="h-screen grid place-items-center">
			<Header />
			<WeatherBoard />
		</div>
	);
};

export default Page;
