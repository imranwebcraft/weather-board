import { useContext } from "react";
import { FavouriteContext } from "../../context";

const FavoriteLocationModal = ({ onToggole }) => {
	const { favourites } = useContext(FavouriteContext);

	return (
		<div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
			<h3 className="text-lg font-bold px-4">Favourite Locations</h3>
			<ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
				{favourites.length ? (
					favourites.map((favourite) => (
						<li
							key={favourite.location}
							onClick={onToggole}
							className="hover:bg-gray-100 duration-150"
						>
							Dhaka
						</li>
					))
				) : (
					<>
						<p>No favourite location</p>
						<button
							onClick={onToggole}
							className=" bg-red-500 w-1/2 mx-auto h-full flex justify-center rounded-md text-white hover:bg-red-600 duration-200"
						>
							Close
						</button>
					</>
				)}
			</ul>
		</div>
	);
};

export default FavoriteLocationModal;
