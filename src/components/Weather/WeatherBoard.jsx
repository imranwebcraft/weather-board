import { useContext } from "react";
import ToggoleFavorite from "./ToggoleFavorite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";
import { WeatherContext } from "../../context";

const WeatherBoard = () => {
	const { loading } = useContext(WeatherContext);

	return (
		<main>
			<section className="">
				<div className="container">
					<div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
						<div className="grid md:grid-cols-2 gap-10 md:gap-6">
							{loading.status ? (
								<p>{loading.message}</p>
							) : (
								<>
									<ToggoleFavorite />
									<WeatherHeadline />
									<WeatherCondition />
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default WeatherBoard;
