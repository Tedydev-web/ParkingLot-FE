import { combineReducers } from 'redux';
import parkingLotReducer from './parkingLotReducer';
// Import các reducers khác

export default combineReducers({
	parkingLot: parkingLotReducer,
	// Các reducers khác
});
