require('dotenv').config()
const mongoose = require('mongoose')
let gfs;



mongoose
    .connect(process.env.MONGODB_URI, {useNewUrlParser:true,useUnifiedTopology:true
    }).then(()=>{
        console.log(`DB Connected`)
    }).catch((err)=>console.log(err)) 

/* mongoose.connection
    .once('open', () => { 
        gfs= Grid()
     })
    .on('error', (error) => {
      console.warn('Some error', error); */