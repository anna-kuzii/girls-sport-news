import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

// TODO change to Link when we will have routing
export const Logo = (): JSX.Element => (
    <a href='/' className='logo'>Sport News</a>
);
