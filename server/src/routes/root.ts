import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';
import { STATUS_CODES } from 'http';
import appConfig from '../configs/app.config';
import sendEmail from '../helpers/sendEmail';
import { registrationMail } from '../data/emails/registration';

export const apiRouter = new Router({ prefix: appConfig.API_PREFIX });
export const parseBody = koaBody();

apiRouter
  .post('sendEmail', '/sendEmail', parseBody, (ctx: Koa.Context) => {
    sendEmail(registrationMail, ctx.request.body.email);
  })
  .all('not-found', '*', (ctx: Koa.Context) => {
    ctx.response.status = 404;
    ctx.response.body = { error: STATUS_CODES[ctx.response.status] };
  });

export default apiRouter;
