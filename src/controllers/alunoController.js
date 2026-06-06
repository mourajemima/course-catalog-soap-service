const AlunoService = require("../services/AlunoService");

module.exports = {
    AlunoService: {
        AlunoServicePort: {

            cadastrarAluno(args) {
                return AlunoService.cadastrarAluno(args);
            },

            consultarAluno(args) {
                return AlunoService.consultarAluno(args);
            },

            listarAlunos() {
                return AlunoService.listarAlunos();
            },

            atualizarAluno(args) {
                return AlunoService.atualizarAluno(args);
            },

            removerAluno(args) {
                return AlunoService.removerAluno(args);
            }

        }
    }

};
