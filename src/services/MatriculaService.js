const db = require("../database/connection");

const MatriculaService = {

    realizarMatricula(args) {
        const aluno = db.prepare(`
            SELECT *
            FROM alunos
            WHERE id = ?
        `).get(args.idAluno);
        if (!aluno) {
            throw new Error("Aluno não encontrado");
        }
        const curso = db.prepare(`
            SELECT *
            FROM cursos
            WHERE id = ?
        `).get(args.idCurso);
        if (!curso) {
            throw new Error("Curso não encontrado");
        }
        const result = db.prepare(`
            INSERT INTO matriculas
            (idAluno, idCurso, status)
            VALUES (?, ?, ?)
        `).run(
            args.idAluno,
            args.idCurso,
            "ativa"
        );
        const matricula = db.prepare(`
            SELECT *
            FROM matriculas
            WHERE id = ?
        `).get(result.lastInsertRowid);
        return { matricula };
    },

    consultarMatricula(args) {
        const matricula = db.prepare(`
            SELECT *
            FROM matriculas
            WHERE id = ?
        `).get(args.idMatricula);
        if (!matricula) {
            throw new Error("Matrícula não encontrada");
        }
        return { matricula };
    },

    listarMatriculasPorAluno(args) {
        const matriculas = db.prepare(`
            SELECT *
            FROM matriculas
            WHERE idAluno = ?
        `).all(args.idAluno);
        return { matriculas };
    },

    cancelarMatricula(args) {
        const matricula = db.prepare(`
            SELECT *
            FROM matriculas
            WHERE id = ?
        `).get(args.idMatricula);
        if (!matricula) {
            throw new Error("Matrícula não encontrada");
        }
        db.prepare(`
            UPDATE matriculas
            SET status = 'cancelada'
            WHERE id = ?
        `).run(args.idMatricula);
        const matriculaAtualizada = db.prepare(`
            SELECT *
            FROM matriculas
            WHERE id = ?
        `).get(args.idMatricula);
        return {
            matricula: matriculaAtualizada
        };
    }

};

module.exports = MatriculaService;