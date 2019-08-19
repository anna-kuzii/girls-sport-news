import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './registration.scss';

const Registration = () => {
  render()
  {
    return (
      <Container className='formWrapper'>
        <h1>Create Account</h1>
        <img/>
        <img/>
        <form method='post'>
          <fieldset>
            <legend>OR use your email for registration:</legend>
            <Row>
              <Col>
                <label htmlFor='firstName'>First name</label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  required={required}
                  placeholder='John'/>
              </Col>
              <Col>
                <label htmlFor='lastName'>Last name</label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  required={required}
                  placeholder='Doe'/>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor='email'>Email</label>
                <input type='email'
                       name='email'
                       id='email'
                       required={required}
                       placeholder='jonhdoe@gmail.com'/>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor='password'>Email</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  minLength='4'
                  required={required}
                  placeholder='4 + characters'/>
              </Col>
            </Row>
            <input name='submit'
                   type='submit'
                   value='Sign up'/>
          </fieldset>
        </form>
      </Container>
    );
  }

};

export default Registration;
