import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import facebookIcon from './assets/facebook-icon.svg';
import twitterIcon from './assets/twitter-icon.svg';
import SVG from 'react-inlinesvg';


export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fistName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        if (this.nameIsValid(value)) {
          this.setState((prevObject) => ({
            ...prevObject,
            firstName: value,
            errors: {
              ...prevObject.errors,
              firstName: '',
            },
          }));
        }
        else {
          this.setState((prevObject) => ({
            ...prevObject,
            errors: {
              ...prevObject.errors,
              firstName: 'First name isn\'t valid, needs to have at least 3 characters',
            },
          }));
        }
        break;
      case 'lastName':
        if (this.nameIsValid(value)) {
          this.setState((prevObject) => ({
            ...prevObject,
            lastName: value,
            errors: {
              ...prevObject.errors,
              lastName: '',
            },
          }));
        }
        else {
          this.setState((prevObject) => ({
            ...prevObject,
            errors: {
              ...prevObject.errors,
              lastName: 'Last name isn\'t valid, needs to have at least 3 characters',
            },
          }));
        }
        break;
      case 'email':
        if (this.emailIsValid(value)) {
          this.setState((prevObject) => ({
            ...prevObject,
            email: value,
            errors: {
              ...prevObject.errors,
              email: '',
            },
          }));
        }
        else {
          this.setState((prevObject) => ({
            ...prevObject,
            errors: {
              ...prevObject.errors,
              email: 'Email isn\'t valid',
            },
          }));
        }
        break;
      case 'password':
        if (this.passwordIsValid(value)) {
          this.setState((prevObject) => ({
            ...prevObject,
            password: value,
            errors: {
              ...prevObject.errors,
              password: '',
            },
          }));
        }
        else {
          this.setState((prevObject) => ({
            ...prevObject,
            errors: {
              ...prevObject.errors,
              password: 'Password isn\'t valid, at least 1 upper and 1 lower letter, 1 number, more than 8 characters',
            },
          }));
        }
        break;
    }
  }

  nameIsValid = (name) => {
    return name.length > 3;
  }

  emailIsValid = (email) => {
    var passwordRegex = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');
    return passwordRegex.test(email);
  }

  passwordIsValid = (password) => {
    var passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    return passwordRegex.test(password);
  }

  render() {
    const { errors } = this.state;
    return (
      <Container className='registrationWrapper formWrapper'>
        <h1>Create Account</h1>
        <section className='socialIcons'>
          <SVG src={facebookIcon} className='facebookIcon' />
          <SVG src={twitterIcon} className='twitterIcon' />
        </section>
        <form method='post'>
          <fieldset>
            <legend>OR use your email for registration:</legend>
            <Row>
              <Col
                className='inputItem'
                md={6}
                xs={12}
              >
                <label htmlFor='firstName'>First name</label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  required
                  placeholder='John'
                  onChange={this.handleChange}
                />
                <div className='error-messages'>{errors.firstName}</div>
              </Col>
              <Col
                className='inputItem'
                md={6}
                xs={12}
              >
                <label htmlFor='lastName'>Last name</label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  required
                  placeholder='Doe'
                  onChange={this.handleChange}
                />
                <div className='error-messages'>{errors.lastName}</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className='inputItem'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='jonhdoe@gmail.com'
                  onChange={this.handleChange}
                />
                <div className='error-messages'>{errors.email}</div>
              </Col>
              <Col xs={12} className='inputItem'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  minLength='4'
                  required
                  placeholder='4 + characters'
                  onChange={this.handleChange}
                />
                <div className='error-messages'>{errors.password}</div>
              </Col>
              <Col xs={12} className='inputItem'>
                <input
                  name='submit'
                  type='submit'
                  value='Sign up'
                />
              </Col>
            </Row>
          </fieldset>
        </form>
      </Container>
    );
  }
}

