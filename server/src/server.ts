import Koa from 'koa';
import koaCors from 'koa-cors';
import koaStatic from 'koa-static';
import * as path from 'path';
import passport from 'passport';
import appConfig from './configs/app.config';
import * as dbConnect from './db/index';
import router from './routes';

const app = new Koa();

dbConnect.connect();

app.use(koaStatic(path.join(__dirname, '..', '..', appConfig.CLIENT_PATH)));

app.use(koaCors());
app.use(router());

// @ts-ignore
app.use(passport.initialize());
app.use(passport.session());

app.listen(appConfig.PORT);

export default app;
