import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { AnyAction } from 'redux';
import * as constants from '../reducers/login/constants';
import * as actions from '../actions/login';

export function* proceedAction(action: AnyAction): SagaIterator<void> {
    yield put(actions.loginPending());
    try {
        const { payload } = action;
        // TODO needs call to backend
        yield put(actions.loginSucess());
    } catch (error) {
        yield put(actions.loginFailure(error));
    }
}

/**
 * Watcher for Login Actions
 */
export function* authenticationSaga(): SagaIterator<void> {
    yield takeLatest(constants.USER_LOGIN, proceedAction);
}

export default authenticationSaga;
