import { useState } from "react";
import { FavouriteContext } from "../context";

const FavouriteContextProvider = ({ children }) => {
	// State
	const [favourites, setFavourites] = useState("favourites", []);

	const addToFavourites = (latitude, longitude, location) => {
		setFavourites([
			...favourites,
			{
				latitude: latitude,
				longitude: longitude,
				location: location,
			},
		]);
	};

	const removeFromFavourites = (location) => {
		const filtered = favourites.filter(
			(favorite) => favorite.location !== location
		);
		setFavourites(filtered);
	};

	const value = { favourites, addToFavourites, removeFromFavourites };
	return (
		<FavouriteContext.Provider value={value}>
			{children}
		</FavouriteContext.Provider>
	);
};

export default FavouriteContextProvider;
