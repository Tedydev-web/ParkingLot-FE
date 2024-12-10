import { call, put, takeLatest } from 'redux-saga/effects';
import * as parkingLot from '../consts/parkingLot';
import { parkingLotService } from '../../services/parkingLotService';
import { 
  getParkingLotsSuccess, 
  getParkingLotsFailure,
  searchParkingLotsSuccess, 
  searchParkingLotsFailure 
} from '../actions/parkingLot';

function* getParkingLotsSaga() {
  try {
    const parkingLots = yield call(parkingLotService.getParkingLots);
    yield put(getParkingLotsSuccess(parkingLots));
  } catch (error) {
    yield put(getParkingLotsFailure(error.message));
  }
}

function* searchParkingLotsSaga(action) {
  try {
    const results = yield call(parkingLotService.searchParkingLots, action.keyword);
    yield put(searchParkingLotsSuccess(results));
  } catch (error) {
    yield put(searchParkingLotsFailure(error.message));
  }
}

export default function* parkingLotSaga() {
  yield takeLatest(parkingLot.GET_PARKING_LOTS_REQUEST, getParkingLotsSaga);
  yield takeLatest(parkingLot.SEARCH_PARKING_LOTS_REQUEST, searchParkingLotsSaga);
} 