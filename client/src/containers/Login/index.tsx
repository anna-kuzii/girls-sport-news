import React from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { Form as FinalForm, Field, FormRenderProps } from 'react-final-form';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { UnathourizedLayout } from '../../components/UnathourizedLayout';
import { InputElement } from '../../components/BootstrapForms/Input';
import { isValid, IValidationValues } from '../../utils/validation';
import { EMAIL_REGEXP } from '../../constants/common.constants';
import { login } from '../../redux/actions/login';
import { authLoading, authError } from '../../redux/selectors/auth';
import { ILoginForm } from '../../redux/reducers/login/login.model';
import './style.scss';

const EMAIL_FIELD = 'email';
const PASSWORD_FIELD = 'password';

const validationRequirements = {
    [EMAIL_FIELD]: {
        isRequired: true,
        pattern: EMAIL_REGEXP,
        maxLength: 256,
    },
    [PASSWORD_FIELD]: {
        isRequired: true,
        maxLength: 256,
    },
};

export const Login = (): JSX.Element => {
    const dispatch = useDispatch();
    const loading = useSelector(authLoading);
    const loginError = useSelector(authError);

    const onSubmit = (values: ILoginForm): void => {
        dispatch(login(values));
    };
    const forgotPasswordLink = (<Link to='/forgot-password'>Forgot password?</Link>);
    const loginWrapperClassName = classnames('login-wrapper', {'login-error': loginError });

    return (
        <UnathourizedLayout>
            <div className={loginWrapperClassName}>
                <FinalForm
                    onSubmit={onSubmit}
                    validate={(val: ILoginForm): IValidationValues => isValid(val, validationRequirements)}
                    render={({ handleSubmit, errors, touched }: FormRenderProps<ILoginForm>): React.ReactElement => {
                        const isSubmitDisabled = touched &&
                            ((touched[EMAIL_FIELD] && !!errors[EMAIL_FIELD]) ||
                                (touched[PASSWORD_FIELD] && !!errors[PASSWORD_FIELD]));
                        const isInvalid = (field: string): boolean => loginError ||
                            (touched && touched[field] && !!errors[field]);

                        return (
                            <form onSubmit={handleSubmit}>
                                <h2>Log in to Sport News</h2>
                                {
                                    loginError && (
                                        <span className='error-message'>Incorrect user ID or password. Try again.</span>
                                    )
                                }
                                <Field
                                    name={EMAIL_FIELD}
                                    placeholder='Email@gmail.com'
                                    type='email'
                                    label='Email address'
                                    component={InputElement}
                                    isInvalid={isInvalid(EMAIL_FIELD)}
                                />
                                <Field
                                    name={PASSWORD_FIELD}
                                    placeholder='Enter your password'
                                    type='password'
                                    label='Password'
                                    topTextMuted={forgotPasswordLink}
                                    component={InputElement}
                                    isInvalid={isInvalid(PASSWORD_FIELD)}
                                />
                                <Button
                                    variant='danger'
                                    type='submit'
                                    disabled={isSubmitDisabled}
                                >
                                    {
                                        loading ? <FontAwesomeIcon icon={faSpinner} spin={true} /> : 'Log in'
                                    }
                                </Button>
                            </form>
                        );
                    }}
                />
            </div>
        </UnathourizedLayout>
    );
};
