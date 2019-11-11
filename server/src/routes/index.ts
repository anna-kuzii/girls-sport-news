// @ts-ignore
import combineRouters from 'koa-combine-routers';
import rootRouter from './root';
import authRouter from './auth';

// @ts-ignore
const router = combineRouters(
    // @ts-ignore
    authRouter,
    rootRouter
);

export default router;
