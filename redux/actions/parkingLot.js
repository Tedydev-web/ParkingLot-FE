import * as parkingLot from '../consts/parkingLot';

export const getParkingLotsRequest = () => ({
  type: parkingLot.GET_PARKING_LOTS_REQUEST
});

export const getParkingLotsSuccess = (parkingLots) => ({
  type: parkingLot.GET_PARKING_LOTS_SUCCESS,
  parkingLots
});

export const getParkingLotsFailure = (error) => ({
  type: parkingLot.GET_PARKING_LOTS_FAILURE, 
  error
});

export const searchParkingLotsRequest = (keyword) => ({
  type: parkingLot.SEARCH_PARKING_LOTS_REQUEST,
  keyword
});

export const searchParkingLotsSuccess = (results) => ({
  type: parkingLot.SEARCH_PARKING_LOTS_SUCCESS,
  results
});

export const searchParkingLotsFailure = (error) => ({
  type: parkingLot.SEARCH_PARKING_LOTS_FAILURE,
  error
}); 