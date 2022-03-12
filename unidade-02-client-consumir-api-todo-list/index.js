const axios = require("axios")

getAllTodos()

async function getAllTodos() {
    try {
        const todos = await axios.get("http://localhost:3005/todos")
        console.log(todos.data)
    }catch (e) {
        console.log("Erro ao buscar todos os Todos")
    }
}

