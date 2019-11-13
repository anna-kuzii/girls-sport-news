import { Action, AnyAction } from 'redux';
import * as constants from '../reducers/login/constants';
import { ILoginForm } from '../reducers/login/login.model';
import { IError } from '../common.model';

export const login = (payload: ILoginForm): AnyAction => ({
    type: constants.USER_LOGIN,
    payload,
});

export const loginPending = (): Action => ({
    type: constants.AUTH_PENDING,
});

export const loginSucess = (): Action => ({
    type: constants.AUTH_SUCCESS,
});

export const loginFailure = (error: IError): AnyAction => ({
    type: constants.AUTH_FAILURE,
    error,
});
