const db = require("../database/connection");
const { validarToken } = require("../security/auth");
const logger = require("../logs/logger");

const AlunoService = {

    cadastrarAluno(args) {
        logger.registrar(
            "INFO",
            `Cadastro de aluno solicitado: ${args.nome}`
        );
        const stmt = db.prepare(`
        INSERT INTO alunos (nome, email)
        VALUES (?, ?)
    `);
        const result = stmt.run(args.nome, args.email);
        const novoAluno = db.prepare(`
        SELECT * FROM alunos WHERE id = ?
    `).get(result.lastInsertRowid);
        logger.registrar(
            "SUCESSO",
            `Aluno cadastrado ID=${novoAluno.id}`
        );
        return { aluno: novoAluno };
    },

    consultarAluno(args) {
        logger.registrar(
            "INFO",
            `Consulta de aluno ID=${args.idAluno}`
        );
        const aluno = db.prepare(`
        SELECT * FROM alunos WHERE id = ?
    `).get(args.idAluno);
        if (!aluno) {
            logger.registrar(
                "ERRO",
                `Aluno ID=${args.idAluno} não encontrado`
            );
            throw new Error("Aluno não encontrado");
        }
        return { aluno };
    },

    listarAlunos() {
        logger.registrar(
            "INFO",
            "Listagem de alunos executada"
        );
        const alunos = db.prepare(`
        SELECT * FROM alunos
    `).all();
        return { alunos };
    },

    atualizarAluno(args) {
        logger.registrar(
            "INFO",
            `Atualização do aluno ID=${args.idAluno}`
        );
        const aluno = db.prepare(`
        SELECT * FROM alunos WHERE id = ?
    `).get(args.idAluno);
        if (!aluno) {
            logger.registrar(
                "ERRO",
                `Aluno ID=${args.idAluno} não encontrado para atualização`
            );
            throw new Error("Aluno não encontrado");
        }
        db.prepare(`
        UPDATE alunos
        SET nome = ?, email = ?
        WHERE id = ?
    `).run(args.nome, args.email, args.idAluno);
        const alunoAtualizado = db.prepare(`
        SELECT * FROM alunos WHERE id = ?
    `).get(args.idAluno);
        logger.registrar(
            "SUCESSO",
            `Aluno ID=${args.idAluno} atualizado`
        );
        return { aluno: alunoAtualizado };
    },

    removerAluno(args) {
        logger.registrar(
            "INFO",
            `Tentativa de remoção do aluno ID=${args.idAluno}`
        );
        if (!args.token) {
            logger.registrar(
                "ERRO",
                `Token não informado para remover aluno ID=${args.idAluno}`
            );
            throw new Error("Token não informado");
        }
        validarToken(args.token);
        const aluno = db.prepare(`
        SELECT * FROM alunos WHERE id = ?
    `).get(args.idAluno);
        if (!aluno) {
            logger.registrar(
                "ERRO",
                `Aluno ID=${args.idAluno} não encontrado para remoção`
            );
            throw new Error("Aluno não encontrado");
        }
        const matriculas = db.prepare(`
        SELECT *
        FROM matriculas
        WHERE idAluno = ?
    `).all(args.idAluno);
        if (matriculas.length > 0) {
            logger.registrar(
                "ERRO",
                `Tentativa de remover aluno ID=${args.idAluno} com matrícula vinculada`
            );
            throw new Error(
                "Não é possível remover o aluno. Existem matrículas associadas."
            );
        }
        db.prepare(`
        DELETE FROM alunos
        WHERE id = ?
    `).run(args.idAluno);
        logger.registrar(
            "SUCESSO",
            `Aluno ID=${args.idAluno} removido`
        );
        return {
            mensagem: "Aluno removido com sucesso"
        };
    }

};

module.exports = AlunoService;
