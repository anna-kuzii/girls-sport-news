import React, { Component } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Button, Form } from 'react-bootstrap';
import { UnathourizedLayout } from '../../components/UnathourizedLayout';
import { InputElement } from '../../components/BootstrapForms';
import './style.scss';

export const Login = (): JSX.Element => {

    const onSubmit = () => {};
    const forgotPasswordLink = (<a href='#'>Forgot password?</a>);

    return (
        <UnathourizedLayout>
            <div className='login-wrapper'>
                <FinalForm
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Log in to Sport News</h2>
                            <InputElement
                                name="emailAddress"
                                placeholder="Email@gmail.com"
                                type='email'
                                label='Email address'
                            />
                            <InputElement
                                name="password"
                                placeholder="Enter your password"
                                type='password'
                                label='Password'
                                topTextMuted={forgotPasswordLink}
                            />
                            <Button variant="danger" type="submit">Log in</Button>
                        </form>
                            )} />
            </div>
        </UnathourizedLayout>
    );
}
