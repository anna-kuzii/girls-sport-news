import Router from 'koa-router';
import appConfig from '../configs/app.config';
import signUp from '../controllers/authController';
import koaBody from "koa-body";

export const apiRouter = new Router({ prefix: appConfig.API_PREFIX });
export const parseBody = koaBody();

apiRouter.all('/register', parseBody, signUp);

export default apiRouter;
