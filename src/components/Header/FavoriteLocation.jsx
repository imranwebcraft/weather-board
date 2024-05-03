import heart from "../../assets/heart.svg";

const FavoriteLocation = ({ onToggole }) => {


	return (
		<div
			onClick={onToggole}
			className="p-2 hover:bg-black/30 cursor-pointer flex flex-wrap gap-2 items-center rounded-md transition-all duration-200"
		>
			<img
				src={heart}
				alt="heart-icon"
			/>
			<span>Favourite Locations</span>
		</div>
	);
};

export default FavoriteLocation;
