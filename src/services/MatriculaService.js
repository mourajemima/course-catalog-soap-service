const { matriculas, alunos, cursos } = require("../data/database");

let nextId = matriculas.length + 1;

const MatriculaService = {

    realizarMatricula(args) {
        const idAluno = parseInt(args.idAluno);
        const idCurso = parseInt(args.idCurso);
        const aluno = alunos.find(a => a.id === idAluno);
        const curso = cursos.find(c => c.id === idCurso);
        if (!aluno) {
            throw new Error("Aluno não encontrado");
        }
        if (!curso) {
            throw new Error("Curso não encontrado");
        }
        const novaMatricula = {
            id: nextId++,
            idAluno,
            idCurso,
            status: "ativa"
        };
        matriculas.push(novaMatricula);
        return { matricula: novaMatricula };
    },

    consultarMatricula(args) {
        const id = parseInt(args.idMatricula);
        const matricula = matriculas.find(m => m.id === id);
        if (!matricula) {
            throw new Error("Matrícula não encontrada");
        }
        return { matricula };
    },

    listarMatriculasPorAluno(args) {
        const idAluno = parseInt(args.idAluno);
        const resultado = matriculas.filter(m => m.idAluno === idAluno);
        return { matriculas: resultado };
    },

    cancelarMatricula(args) {
        const id = parseInt(args.idMatricula);
        const matricula = matriculas.find(m => m.id === id);
        if (!matricula) {
            throw new Error("Matrícula não encontrada");
        }
        matricula.status = "cancelada";
        return { matricula };
    }

};

module.exports = MatriculaService;