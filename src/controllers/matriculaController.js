const MatriculaService = require("../services/MatriculaService");

module.exports = {
    MatriculaService: {
        MatriculaServicePort: {
            realizarMatricula(args) {
                return MatriculaService.realizarMatricula(args);
            },
            consultarMatricula(args) {
                return MatriculaService.consultarMatricula(args);
            },
            listarMatriculasPorAluno(args) {
                return MatriculaService.listarMatriculasPorAluno(args);
            },
            cancelarMatricula(args) {
                return MatriculaService.cancelarMatricula(args);
            }
        }
    }
};