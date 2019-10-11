import React from 'react';
import { Button } from 'react-bootstrap';
import { Logo } from '../Logo';
import './index.scss';

export const UnathourizedLayout = ({ children }: any): JSX.Element => (
    <div className='unathourized-wrapper'>
        <div className='unathourized-header'>
            <Logo />
            <div className='btn-wrapper'>
                <Button variant='link'>Don’t have an account?</Button>
                <Button variant='outline-danger'>Get Started</Button>
            </div>
        </div>
        <div className='unathourized-layout'>
            <div className='bg-img'></div>
            <div className='page-content'>{children}</div>
        </div>
    </div>
)
