import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { authenticationSaga } from './sagas/authSaga';

export default function* rootSaga(): SagaIterator<void> {
    const sagas = [fork(authenticationSaga)];
    yield all(sagas);
}
