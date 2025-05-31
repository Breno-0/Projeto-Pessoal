var database = require("../database/config");

function pegar() {

    var instrucaoSql = `select sum(soad) as 'SOAD', 
sum(slipknot) as 'Slipknot', 
sum(metallica) as 'Metallica', 
sum(blackSabbath) as 'BlackSabbath' 
from usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegar
}
