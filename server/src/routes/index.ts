import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-body';

import { STATUS_CODES } from 'http';

import sendEmail from '../helpers/sendEmail';
import { registrationMail } from '../data/emails/registration';

export const apiRouter = new Router({ prefix: '/sport-news' });
export const parseBody = koaBody();

apiRouter
  .all('register', '/register', parseBody, (ctx: Koa.Context) => {
    ctx.response.body = 'Registration';
  })
  .post('sendEmail', '/sendEmail', parseBody, (ctx: Koa.Context) => {
    console.log('uuuuu', ctx.request.body)
    sendEmail(registrationMail, ctx.request.body.email);
  })
  .all('not-found', '*', (ctx: Koa.Context) => {
    ctx.response.status = 404;
    ctx.response.body = { error: STATUS_CODES[ctx.response.status] };
  });

export const routes = apiRouter.routes();
