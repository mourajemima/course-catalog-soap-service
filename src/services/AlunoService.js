const { alunos } = require("../data/database");

let nextId = alunos.length + 1;

const AlunoService = {

    cadastrarAluno(args) {
        const novoAluno = {
            id: nextId++,
            nome: args.nome,
            email: args.email
        };
        alunos.push(novoAluno);
        return { aluno: novoAluno };
    },

    consultarAluno(args) {
        const aluno = alunos.find(a => a.id === parseInt(args.idAluno));
        if (!aluno) {
            throw new Error("Aluno não encontrado");
        }
        return { aluno };
    },

    listarAlunos() {
        return { alunos };
    }

};

module.exports = AlunoService;