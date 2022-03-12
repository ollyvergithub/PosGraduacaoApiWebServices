const Todo = require("../models/Todo")

module.exports = class TodoService {

    static async getTodo(id){
        try {
            const todo = await Todo.findOne({_id: id});
            return todo
        }catch (e) {
            console.log("Erro ao buscar todos os todos ", e)
        }
    }

    static async getAllTodos(){
        try {
            const allTodos = await Todo.find();
            return allTodos
        }catch (e) {
            console.log("Erro ao buscar todos os todos ", e)
        }
    }

    static async addTodo(data){
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished
            };
            const response = await new Todo(newTodo).save();
            return response
        }catch (e) {
            console.log("Erro ao buscar criar um novo Todo ", e)
        }
    }

    static async updateTodo(id, todo){
        try {
            const response = await Todo.updateOne( {_id: id}, todo);
            return response
        }catch (e) {
            console.log("Erro ao buscar atualizar um Todo ", e)
        }
    }

    static async deleteTodo(id){
            const response = await Todo.deleteOne({_id: id});
            return response
        }catch (e) {
            console.log("Erro ao buscar deletar Todo ", e)
        }

}