import { STATUS_CODES } from 'http';
import Router from 'koa-router';
import koaBody from 'koa-body';
import { registrationMail } from '../data/emails/registration';
import sendEmail from '../helpers/sendEmail';

const parseBody = koaBody();

export const apiRouter = new Router({ prefix: '/sport-news' });

export function setApiRoutes() {
  apiRouter.stack.length = 0;

  apiRouter
    .all('register', '/register', parseBody, (ctx) => {
      ctx.response.body = 'Registration';
    })
    .post('sendEmail', '/sendEmail', parseBody, (ctx) => {
      sendEmail(registrationMail, ctx.request.body.email)
    })
    .all('not-found', '*', (ctx) => {
      ctx.response.status = 404;
      ctx.response.body = { error: STATUS_CODES[ctx.response.status] };
    });
}
