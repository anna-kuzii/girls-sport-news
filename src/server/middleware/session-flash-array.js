
export default function (key='flash') {
  return async function sessionFlashArray(ctx, next) {
    ctx.flash = ctx.session[key] || []
    ctx.nextFlash = []
    ctx.addFlash = (message, type) => {
      ctx.nextFlash.push({ message, type })
    }
    await next()
    if (ctx.status === 302 && ctx.session) {
      ctx.session[key] = ctx.nextFlash // eslint-disable-line require-atomic-updates
    } else {
      delete ctx.session[key]
    }
  }
}
