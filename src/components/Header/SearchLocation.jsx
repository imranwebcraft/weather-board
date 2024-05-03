import { useContext, useState } from "react";
import search from "../../assets/search.svg";
import { SearchContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

const SearchLocation = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { setSelectedLocation } = useContext(SearchContext);

	const doSearch = useDebounce((searchTerm) => {
		const fetchedLocation = getLocationByName(searchTerm);
		setSelectedLocation({ ...fetchedLocation });
	}, 500);

	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		doSearch(value);
	};

	return (
		<form>
			<div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
				<input
					className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
					type="search"
					placeholder="Search Location"
					value={searchTerm}
					onChange={handleSearch}
					required
				/>
				<button type="submit">
					<img src={search} />
				</button>
			</div>
		</form>
	);
};

export default SearchLocation;
