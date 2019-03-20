const router = require('koa-router')()
// 外层必须是async,即异步函数，里面可以有也可以没有await
router.get('/', async (ctx, next) => {


   global.console.log('index2')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/testAsync',async (ctx) =>{
  // node 中没有window 全局变量是global

  // async await用同步的写法完成异步的过程
  // a的结果等待伪代码A（A是Promise对象，若不是A执行完也会返回一个promise对象）执行完，a的结果得到后B开始执行
  // 有多个await的时候，依次向下执行
  // const a = await A;
  // const b = await B;
  // const c = await C;
  global.console.log('start',new Date().getTime())//1
  // 异步结束之后返回的结果 a的结果就是resolve()返回的结果
  const a = await new Promise((resolve,reject) => {
    setTimeout(function () {
      resolve('a')
      global.console.log('async a',new Date().getTime())//2 1s后执行
    },1000)
  })
  const b = await 123
  // const b = await Promise.resolve(123)
  const c = await new Promise((resolve,reject) => {
    setTimeout(function () {
      resolve('abc')
      global.console.log('async c',new Date().getTime())//3  2执行完2s后执行
    },2000)
  })
  ctx.body = {
    a,
    b,
    c
  }
    // {
    //     "a": "a",
    //     "b": 123,
    //     "c": "abc"
    // }

})

module.exports = router
