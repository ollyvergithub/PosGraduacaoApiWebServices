const app = require("./app");
const db = require("./mongoosedb")

db.init()

const port = process.env.PORT || 3005

app.listen(port, ()=>{
    console.log(`App ouvindo a porta ${port}`)
})