const router = require('koa-router')()
const popService = require('../service/PopBlock');
router.prefix('/server')
router.get('/', async (ctx, next) => {   
  await next();
  ctx.body = ' World';
})


router.get('/init', async function (ctx, next) {
  ctx.set("Access-Control-Allow-Origin", "*");
  let u=JSON.stringify(ctx.request.url)
  let url=JSON.parse(u);
  let arr=url.split("=");
  let id= parseInt(arr[1]);
  let treeData = await popService.init(id);
  ctx.body={
    treeData
  }
})

module.exports = router;