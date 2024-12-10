import * as types from '../consts/parkingLot';
import { parkingLotService } from '../services/parkingLotService';

export const fetchParkingLots = (lat, lng) => async (dispatch) => {
	dispatch({ type: types.FETCH_PARKING_LOTS_REQUEST });

	try {
		const parkingLots = await parkingLotService.getNearbyParkingLots(lat, lng);
		dispatch({
			type: types.FETCH_PARKING_LOTS_SUCCESS,
			payload: parkingLots,
		});
	} catch (error) {
		dispatch({
			type: types.FETCH_PARKING_LOTS_FAILURE,
			payload: error.message,
		});
	}
};
