import React from 'react';
import { Form } from 'react-bootstrap';
import './style.scss'

export const InputElement = (props: any) => (
    <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        {
            props.topTextMuted && (
                <Form.Text className='text-muted'>{props.topTextMuted}</Form.Text>
            )
        }
        <Form.Control
            {...props.input}
            type={props.type}
            placeholder={props.placeholder}
            isInvalid={props.isInvalid}
        />
    </Form.Group>
);
