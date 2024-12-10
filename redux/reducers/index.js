import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import placeReducer from './placeReducer';
import navigationReducer from './navigationReducer';
import boxVisibleReducer from './boxVisibleReducer';
import parkingLotReducer from './parkingLotReducer';

const rootReducer = combineReducers({
	searchReducer,
	placeReducer,
	navigationReducer,
	boxVisibleReducer,
	parkingLotReducer,
});

export default rootReducer;
