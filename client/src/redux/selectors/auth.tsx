import { createSelector } from 'reselect';
import { IStore } from '../reducers';
import { IAuth } from '../reducers/login/login.model';

const authState = (state: IStore): IAuth => state.auth;

export const authLoading = createSelector(
    authState,
    (auth: IAuth): boolean => auth.loading,
);

export const authLoaded = createSelector(
    authState,
    (auth: IAuth): boolean => auth.loaded,
);

export const authError = createSelector(
    authState,
    (auth: IAuth): any => auth.error,
);
