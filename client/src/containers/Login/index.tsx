import React from 'react';
import { Form as FinalForm, Field, FormRenderProps } from 'react-final-form';
import { Button } from 'react-bootstrap';
import { UnathourizedLayout } from '../../components/UnathourizedLayout';
import { InputElement } from '../../components/BootstrapForms';
import { isValid, IValidationValues } from '../../utils/validation';
import { EMAIL_REGEXP } from '../../constants/common.constants';
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

    const onSubmit = (): void => {
        // TODO add logic
    };
    const forgotPasswordLink = (<a href='#'>Forgot password?</a>);

    return (
        <UnathourizedLayout>
            <div className='login-wrapper'>
                <FinalForm
                    onSubmit={onSubmit}
                    validate={(val: any): IValidationValues => isValid(val, validationRequirements)}
                    render={({ handleSubmit, errors, touched }: FormRenderProps): React.ReactElement => (
                        <form onSubmit={handleSubmit}>
                            <h2>Log in to Sport News</h2>
                            <Field
                                name={EMAIL_FIELD}
                                placeholder='Email@gmail.com'
                                type='email'
                                label='Email address'
                                component={InputElement}
                                isInvalid={touched && touched[EMAIL_FIELD] && !!errors[EMAIL_FIELD]}
                            />
                            <Field
                                name={PASSWORD_FIELD}
                                placeholder='Enter your password'
                                type='password'
                                label='Password'
                                topTextMuted={forgotPasswordLink}
                                component={InputElement}
                                isInvalid={touched && touched[PASSWORD_FIELD] && !!errors[PASSWORD_FIELD]}
                            />
                            <Button
                                variant='danger'
                                type='submit'
                            >
                                Log in
                            </Button>
                        </form>
                    )}
                />
            </div>
        </UnathourizedLayout>
    );
};
