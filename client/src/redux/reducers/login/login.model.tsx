import { IError } from '../../common.model';

export interface IAuth {
    loading: boolean;
    loaded: boolean;
    error: IError;
}

export interface ILoginForm {
    email: string;
    password: string;
}
