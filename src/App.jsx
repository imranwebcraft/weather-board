import Page from "./Page";
import { SearchContextProvider, WeatherContextProvider } from "./provider";
import FavouriteContextProvider from "./provider/FavouriteContextProvider";

function App() {
	return (
		<WeatherContextProvider>
			<FavouriteContextProvider>
				<SearchContextProvider>
					<Page />
				</SearchContextProvider>
			</FavouriteContextProvider>
		</WeatherContextProvider>
	);
}

export default App;
