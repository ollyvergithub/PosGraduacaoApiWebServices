const mongoose = require("mongoose");
const user = ""
const pass = ""
const database = "PosGraduacaoWebServicesEApiUnidade02TodoList"
const uri = "mongodb://localhost:27017"

module.exports = {
    init: () => {
        mongoose.connect( `${uri}/${database}`)
            .then((res) => console.log(`Connection Succesful ${res}`))
            .catch((err) => console.log(`Error in DB connection ${err}`));
    },
};
