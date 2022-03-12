const TodoService = require("../services/TodoService")

exports.get = async (req, res) =>{
    let id = req.params.id
   try {
       const todo = await TodoService.getTodo(id)
       if (!todo){
           return res.status(404).json("Todo não encontrado")
       }else {
           res.json(todo)
       }
   }catch (e) {
       return res.status(500).json("Erro ao buscar um Todo em todoController ", e)
   }
}

exports.getAll = async (req, res) => {

    try {
        const todos = await TodoService.getAllTodos()

        if (!todos){
            return res.status(404).json("Não existe nenhum Todo criado!")
        }
        res.json(todos)

    }catch (e) {
        return res.status(500).json("Erro ao buscar todos os Todos em todoController ", e)
    }
}

exports.add = async (req, res) =>{
    try {
        const createdTodo = await TodoService.addTodo(req.body)
        res.status(201).json(createdTodo)
    }catch (e) {
        return res.status(500).json("Erro ao buscar criar um novo Todos em todoController ", e)
    }
}

exports.update = async (req, res) =>{
    let id = req.params.id
    try {
        const deletedTodo = await TodoService.updateTodo(id, req.body)
        res.json(deletedTodo)
    }catch (e) {
        console.log("Erro ao deletar ", e)
        return res.status(500).json("Erro ao deletar um Todo em todoController ", e)
    }
}

exports.delete = async (req, res) =>{
    let id = req.params.id
    try {
        const deletedTodo = await TodoService.deleteTodo(id)
        res.json(deletedTodo)
    }catch (e) {
        console.log("Erro ao deletar ", e)
        return res.status(500).json("Erro ao deletar um Todo em todoController ", e)
    }
}