const db = require("../database/connection");

const CursoService = {

    listarCursos() {
        const cursos = db.prepare(`
            SELECT * FROM cursos
        `).all();
        return { cursos };
    },

    consultarCurso(args) {
        const curso = db.prepare(`
            SELECT * FROM cursos
            WHERE id = ?
        `).get(args.idCurso);
        if (!curso) {
            throw new Error("Curso não encontrado");
        }
        return { curso };
    },

    buscarPorCategoria(args) {
        const cursos = db.prepare(`
            SELECT *
            FROM cursos
            WHERE categoria = ?
        `).all(args.categoria);
        return { cursos };
    }

};

module.exports = CursoService;