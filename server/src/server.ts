import Koa from 'koa';
import koaCors from 'koa-cors';
import koaStatic from 'koa-static';
import * as path from 'path';
import appConfig from './configs/app.config';

import { routes } from './routes';

const app = new Koa();

app.use(koaStatic(path.join(__dirname, '..', '..', appConfig.CLIENT_PATH)));

app.use(koaCors());
app.use(routes);

app.listen(appConfig.PORT);

export default app;
