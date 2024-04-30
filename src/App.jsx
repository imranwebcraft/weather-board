import Page from "./Page";
import { WeatherContextProvider } from "./provider";

function App() {
	return (
		<WeatherContextProvider>
			<Page />
		</WeatherContextProvider>
	);
}

export default App;
