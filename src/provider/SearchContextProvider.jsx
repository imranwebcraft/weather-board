import { useState } from "react";
import { SearchContext } from "../context";

const SearchContextProvider = ({ children }) => {
	const [selectedLocation, setSelectedLocation] = useState({
		location,
		latitude: 0,
		longitude: 0,
	});

	const value = { selectedLocation, setSelectedLocation };
	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};

export default SearchContextProvider;
