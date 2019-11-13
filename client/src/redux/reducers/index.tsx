import auth from './login/reducer';
import { IAuth } from './login/login.model';

export interface IStore {
    auth: IAuth;
}

export default {
    auth,
};
