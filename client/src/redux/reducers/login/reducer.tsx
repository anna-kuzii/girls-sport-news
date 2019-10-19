import { AnyAction } from 'redux';
import {
    AUTH_PENDING,
    AUTH_SUCCESS,
    AUTH_FAILURE,
} from './constants';
import { IAuth } from './login.model';

export const initialState = {
    loading: false,
    loaded: false,
    error: null,
};

export default function reducer(state: IAuth = initialState, action: AnyAction): IAuth {
    switch (action.type) {
        case AUTH_PENDING:
            return {
                ...state,
                error: null,
                loading: true,
                loaded: false,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                loaded: false,
            };
        default:
            return state;
    }
}
