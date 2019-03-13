// 执行app之间的处理过程 ctx是全局对象 request和response过程中都能调用
// 只要到达服务器的请求 都会执行中间件
// 当前中间件处理完毕 请交给下一个中间件处理
function pv(ctx) {
  global.console.log('pv',ctx.path)
}
module.exports = function () {
  return async function (ctx,next) {
  pv(ctx)
    // 当前中间件处理完毕 请交给下一个中间件处理,此处不能忘了写，这样就不能执行下一个中间件了，直接从这个中间件出去了
    await next()
  }
}