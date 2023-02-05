
const Todo=require('../model/todoItems')
const {ObjectId } = require('mongodb')

//create a new todo
const createTodo=async (req,res)=>{
const {title, description}=req.body
    //add doc to db
  try{
    const todo= await Todo.create({title,description})
    
    res.status(200).json(todo)
  }catch(error){
    res.status(400).json({error: error.message})

  }
}
//get all todo
const getTodo=async (req,res)=>{
  const todo=await Todo.find({})
  res.status(200).json(todo)
}
//get single todo

const getSingleTodo= async(req,res)=>{
const {id}=req.params

   if(ObjectId.isValid(id)){
     const todo=await Todo.findById({_id:id})

    if(todo){
      res.status(200).json(todo)
      }
      else{
        return res.status(404).json({error:'No such items'})
      }
  
   }else{
        return res.status(404).json({error: "No such item with that ID"})
   }
  
}
//delete an item

const deleteTodo=async (req,res)=>{
const {id}=req.params

   if(ObjectId.isValid(id)){
      const todo=await Todo.findOneAndDelete({_id:id})
      if(todo){
        res.status(200).json(todo)
      }
      else
      {
        return res.status(404).json({error:'No such item'})
      }
  
   }else{
        return res.status(404).json({error: "No such item with that ID"})
   }
  
}


//UPDATE a workout
const updateTodo=async (req,res)=>{
const {id}=req.params
    if(ObjectId.isValid(id)){
    const todo=await Todo.findOneAndUpdate({_id:id},{$set:req.body})
    if(todo){
         res.status(200).json(todo)
    }
    else{
         return res.status(404).json({error: "No such item"})
    }
  
   }else{
        return res.status(404).json({error: "No such item with that ID"})
   }
  
}




module.exports={
  createTodo,
  getTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo
 
}