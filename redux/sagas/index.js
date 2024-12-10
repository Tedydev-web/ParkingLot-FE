import { all, fork } from 'redux-saga/effects';
import searchSaga from './searchSaga';
import placeSaga from './placeSaga';
import navigationSaga from './navigationSaga';
import parkingLotSaga from './parkingLotSaga';

export default function* rootSaga() {
	yield all([
		fork(searchSaga), 
		fork(placeSaga), 
		fork(navigationSaga),
		fork(parkingLotSaga)
	]);
}
