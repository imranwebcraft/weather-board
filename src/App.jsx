import Page from "./Page";
import {
	FavouriteContextProvider,
	SearchContextProvider,
	WeatherContextProvider,
} from "./provider";

function App() {
	return (
		<SearchContextProvider>
			<WeatherContextProvider>
				<FavouriteContextProvider>
					<Page />
				</FavouriteContextProvider>
			</WeatherContextProvider>
		</SearchContextProvider>
	);
}

export default App;
