// import json-server
const jsonSerevr = require('json-server')
// senerate a server using this.it could run json-server
const MPServer = jsonSerevr.create()
// create a  middleware to run properly
const middleware = jsonSerevr.defaults()
// to run any file of application
const router=jsonSerevr.router("DB.json")
// to run this port
const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`Media Player server started at port ${PORT}`);
})

