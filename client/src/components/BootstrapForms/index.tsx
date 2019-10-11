import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.scss'

export const InputElement = (props: any) => (
    <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        {
            props.topTextMuted && (
                <Form.Text className='text-muted'>{props.topTextMuted}</Form.Text>
            )
        }
        <Form.Control type={props.type} placeholder={props.placeholder} />
    </Form.Group>
);
