const http = require("http");
const soap = require("soap");
const fs = require("fs");
const path = require("path");

const PORT = 8000;

const cursoController = require("./controllers/cursoController");
const alunoController = require("./controllers/alunoController");
const matriculaController = require("./controllers/matriculaController");

const cursoWsdl = fs.readFileSync(
     path.join(__dirname, "wsdl/cursoService.wsdl"),
     "utf8"
);

const alunoWsdl = fs.readFileSync(
     path.join(__dirname, "wsdl/alunoService.wsdl"),
     "utf8"
);

const matriculaWsdl = fs.readFileSync(
     path.join(__dirname, "wsdl/matriculaService.wsdl"),
     "utf8"
);

const server = http.createServer((req, res) => {
     res.end("Web Service SOAP - Catálogo de Cursos");
});

soap.listen(server, "/curso", cursoController, cursoWsdl);
soap.listen(server, "/aluno", alunoController, alunoWsdl);
soap.listen(server, "/matricula", matriculaController, matriculaWsdl);

server.listen(PORT, () => {
     console.log(`Servidor rodando na porta ${PORT}`);
});