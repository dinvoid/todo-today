

const express =require('express')
const mongoose=require('mongoose')
const dotenv =require('dotenv').config()
const todoRoutes=require('./routes/todoitem')
const cors = require('cors')
const app=express()
mongoose.set('strictQuery', true);
//connect to mongoose

app.use(cors())
app.use(express.json())

//routes
app.use(('/api/item'),todoRoutes)


mongoose.connect(process.env.URI)
	.then(()=>{
	   //listen for request
       app.listen(process.env.PORT,()=>{
       console.log('Connecting to db and Listening on ports=',process.env.PORT)
       })
       })
    .catch((error)=>{
    	console.log(error);
  
	}) 