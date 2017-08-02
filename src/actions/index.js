const API_KEY = 'f4a33d0900bf2f8766f2875833144727';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// middlewares = actions pass through them before going to the reducers

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	// & for adding additional query
	const url = `${ROOT_URL}&q=${city},us`;
	return {
		type: FETCH_WEATHER
	};
}
