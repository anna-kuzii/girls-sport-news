import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './registration.scss';


const Registration = () => {
  render()
  {

    return (
      <Container className='formWrapper'>
        <Row>
          <h1>Create Account</h1>
          <img/>
          <img/>
        </Row>
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
              <Col xs={12}>
                <label htmlFor='email'>Email</label>
                <input type='email'
                       name='email'
                       id='email'
                       required={required}
                       placeholder='jonhdoe@gmail.com'/>
              </Col>
              <Col xs={12}>
                <label htmlFor='password'>Email</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  minLength='4'
                  required={required}
                  placeholder='4 + characters'/>
              </Col>
              <Col xs={12}>
                <input name='submit'
                       type='submit'
                       value='Sign up'/>
              </Col>
            </Row>
          </fieldset>
        </form>
      </Container>
    );

  }
};

export default Registration;
