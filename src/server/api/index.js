import { STATUS_CODES } from 'http'
import Router from 'koa-router'
import koaBody from 'koa-body'
import send from 'koa-send'
import { LOADABLE_FILE } from '../../config/paths'

const parseBody = koaBody()

export const apiRouter = new Router()

export function setApiRoutes() {
  apiRouter.stack.length = 0

  apiRouter
    .all('home', '/', (ctx) => {
      ctx.send(LOADABLE_FILE)
    })
    .all('register', '/register', parseBody, (ctx) => {
      ctx.response.status = 200
      ctx.response.body = 'Registration'
    })
    .all('not-found', '*', (ctx) => {
      ctx.response.status = 404
      ctx.response.body = { error: STATUS_CODES[ctx.response.status] }
    })
}
