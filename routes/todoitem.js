
const express= require('express') 
const {
	createTodo,
	getTodo,
	getSingleTodo,
	deleteTodo,
	updateTodo
}=require('../controller/todoController')

const router=express.Router() 

//GET all todo
router.get('/',getTodo )

//GET single todo item
router.get('/:id',getSingleTodo)

//POST new todo
router.post('/',createTodo)

//DELETE  todo
router.delete('/:id',deleteTodo)

//UPDATE a todo
router.patch('/:id',updateTodo)

module.exports=router
