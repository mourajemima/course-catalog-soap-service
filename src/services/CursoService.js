const { cursos } = require('../data/database');

const CursoService = {

    listarCursos() {
        return {
            cursos: cursos.map(curso => ({
                id: curso.id,
                nome: curso.nome,
                categoria: curso.categoria,
                cargaHoraria: curso.cargaHoraria
            }))
        };
    },

    consultarCurso(args) {
        const id = parseInt(args.idCurso);
        const curso = cursos.find(c => c.id === id);
        if (!curso) {
            throw new Error("Curso não encontrado");
        }
        return { curso };
    },

    buscarPorCategoria(args) {
        const categoria = args.categoria;
        const resultado = cursos.filter(
            curso => curso.categoria.toLowerCase() === categoria.toLowerCase()
        );
        return { cursos: resultado };
    }

};

module.exports = CursoService;