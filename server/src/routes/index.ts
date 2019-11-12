import combineRouters from 'koa-combine-routers';
import rootRouter from './root';
import authRouter from './auth';

const router = combineRouters(
  authRouter,
  rootRouter
);

export default router;
