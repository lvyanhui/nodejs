const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
	let stime = new Date().getTime()
	await next()
	let etime = new Date().getTime()
	
	ctx.response.type = 'text/html'
	ctx.response.body = '<h1> Hello World </h1>'
	console.log(`request address: ${ctx.path}, response time: ${etime-stime}ms`);
})

app.use(async (ctx, next) => {
	console.log('middle ware 1 doSomething')
	await next();
	console.log('middle ware 1 end')
})

app.use(async (ctx, next) => {
	console.log('middle ware 2 doSomething')
	await next();
	console.log('middle ware 2 end')
})

app.use(async (ctx, next) => {
	console.log('middle ware 3 doSomething')
	await next();
	console.log('middle ware 3 end')
})

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})

