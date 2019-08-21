import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.scss'
import facebookIcon from './assets/facebook-icon.svg'
import twitterIcon from './assets/twitter-icon.svg'
import SVG from 'react-inlinesvg'


export const Registration = () => (

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
            />
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
            />
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
            />
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
            />
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
)

