import * as Koa from 'koa';
import * as koaCors from 'koa-cors';

import { routes } from './routes';

const app = new Koa();

app.use(koaCors());
app.use(routes);

app.listen(process.env.PORT || 4000);

export default app;
