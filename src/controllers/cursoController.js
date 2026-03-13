const CursoService = require('../services/CursoService');

module.exports = {
    CursoService: {
        CursoServicePort: {
            listarCursos() {
                return CursoService.listarCursos();
            },

            consultarCurso(args) {
                return CursoService.consultarCurso(args);
            },

            buscarPorCategoria(args) {
                return CursoService.buscarPorCategoria(args);
            }
        }
    }
};