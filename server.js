const express= require('express')
const app= express();
const rout1=require('./Routes/token1')
const mongoose=require('mongoose')

app.use(express.json())




mongoose.connect('mongodb://localhost:27017/JWT')
.then(()=>{
  app.listen(3200,()=>{
    console.log('runing on port 3200..')
})
 console.log("mongoo conected")
})
.catch((error)=>console.log(error,"error"))


app.use('/api/token',rout1)