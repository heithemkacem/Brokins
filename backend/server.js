//mongodb
require('./config/db')


const app = require('express')()
const port = 5008

// cors 
const cors = require("cors")
app.use(cors())

const userRouter= require('./routes/userRoutes')


const bodyParser = require('express').json
app.use(bodyParser())

app.use('/user', userRouter)
app.listen(port,()=>{
    console.log("Server is running on port",port)
})


/* AUTH_EMAIL=mailverifbrokins@gmail.com
AUTH_PASS=brokinsbot111 */