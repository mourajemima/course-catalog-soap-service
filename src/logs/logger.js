const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "soap.log");

function registrar(tipo, mensagem) {
    const dataHora = new Date().toISOString();
    const linha =
        `[${dataHora}] [${tipo}] ${mensagem}\n`;
    fs.appendFileSync(logPath, linha);
}

module.exports = {
    registrar
};