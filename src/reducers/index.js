import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
	weathe: WeatherReducer
});

export default rootReducer;
