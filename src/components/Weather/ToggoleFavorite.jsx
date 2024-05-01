import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";

const ToggoleFavorite = () => {
	// state
	const [isFavorite, setIsFavorite] = useState(false);

	// Context

	const { weatherData } = useContext(WeatherContext);
	const { location, tatitude, longitude } = weatherData;

	const { favourites, addToFavourites, removeFromFavourites } =
		useContext(FavouriteContext);

	useEffect(() => {
		const found = favourites.find((f) => f.location === location);
		setIsFavorite(found);
	}, []);

	// Event Handlers
	const handleToggoleFavourite = () => {
		const found = favourites.find((fav) => fav.location === location);
		if (!found) {
			addToFavourites(tatitude, longitude, location);
		} else {
			removeFromFavourites(location);
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<div className="md:col-span-2">
			<div className="flex items-center justify-end space-x-6">
				<button
					onClick={handleToggoleFavourite}
					className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] hover:bg-[#a1a1a14d] duration-150"
				>
					<span>Add to Favourite</span>
					<img
						src={isFavorite ? RedHeartIcon : HeartIcon}
						alt="heart-icon"
					/>
				</button>
			</div>
		</div>
	);
};

export default ToggoleFavorite;
