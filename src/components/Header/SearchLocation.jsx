import { useContext, useState } from "react";
import search from "../../assets/search.svg";
import { SearchContext } from "../../context";
import { getLocationByName } from "../../data/location-data";

const SearchLocation = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { setSelectedLocation } = useContext(SearchContext);

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const fetchedLocation = getLocationByName(searchTerm);
		setSelectedLocation({ ...fetchedLocation });
	};

	return (
		<form onSubmit={handleSubmit}>
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
