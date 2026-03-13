const cursos = [
    {
        id: 1,
        nome: "Arquitetura SOA",
        categoria: "Arquitetura",
        cargaHoraria: 40
    },
    {
        id: 2,
        nome: "Web Services SOAP",
        categoria: "Integração",
        cargaHoraria: 30
    },
    {
        id: 3,
        nome: "Node.js para APIs",
        categoria: "Desenvolvimento",
        cargaHoraria: 50
    }
];

const alunos = [
    { 
        id: 1, 
        nome: "Ana Silva", 
        email: "ana@email.com" 
    },
    { 
        id: 2, 
        nome: "Carlos Souza", 
        email: "carlos@email.com" 
    }
];

const matriculas = [
    { 
        id: 1, 
        idAluno: 1, 
        idCurso: 1, 
        status: "ativa" 
    }
];

module.exports = { 
    cursos,
    alunos,
    matriculas 
};