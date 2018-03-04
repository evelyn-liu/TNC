const router = require('koa-router')()
const userService = require('../service/PopBlock');
router.prefix('/server')
router.get('/', async (ctx, next) => {   
  await next();
  ctx.body = ' World';
})
