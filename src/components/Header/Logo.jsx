import logo from "../../assets/logo.svg";

const Logo = () => {
	return (
		<a>
			<img
				className="h-9"
				src={logo}
				alt="Weather App"
			/>
		</a>
	);
};

export default Logo;
