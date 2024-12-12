const jsonServer=require('json-server')

const Apserver=jsonServer.create()

const middleware=jsonServer.defaults()
const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

Apserver.use(middleware)
Apserver.use(route)

// to run server

Apserver.listen(PORT,()=>{
    console.log(`media player server running at ${PORT} and waiting for client request`);
    
})