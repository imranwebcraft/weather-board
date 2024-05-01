import Page from "./Page";
import { WeatherContextProvider } from "./provider";
import FavouriteContextProvider from "./provider/FavouriteContextProvider";

function App() {
	return (
		<WeatherContextProvider>
			<FavouriteContextProvider>
				<Page />
			</FavouriteContextProvider>
		</WeatherContextProvider>
	);
}

export default App;
