import * as parkingLot from '../consts/parkingLot';

const initialState = {
	parkingLots: [],
	searchResults: [],
	loading: false,
	error: null,
};

export default function parkingLotReducer(state = initialState, action) {
	switch (action.type) {
		case parkingLot.GET_PARKING_LOTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case parkingLot.GET_PARKING_LOTS_SUCCESS:
			return {
				...state,
				loading: false,
				parkingLots: action.parkingLots,
				error: null,
			};
		case parkingLot.GET_PARKING_LOTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case parkingLot.SEARCH_PARKING_LOTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case parkingLot.SEARCH_PARKING_LOTS_SUCCESS:
			return {
				...state,
				loading: false,
				searchResults: action.results,
				error: null,
			};
		case parkingLot.SEARCH_PARKING_LOTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
