import * as types from '../consts/parkingLot';

const initialState = {
	parkingLots: [],
	loading: false,
	error: null,
};

export default function parkingLotReducer(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_PARKING_LOTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.FETCH_PARKING_LOTS_SUCCESS:
			return {
				...state,
				loading: false,
				parkingLots: action.payload,
			};
		case types.FETCH_PARKING_LOTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
}
