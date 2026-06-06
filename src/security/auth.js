const jwt = require("jsonwebtoken");
const logger = require("../logs/logger");

const SECRET = "soap-course-secret";

function gerarToken() {
    return jwt.sign(
        {
            usuario: "admin"
        },
        SECRET,
        {
            expiresIn: "12h"
        }
    );

}

function validarToken(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch (error) {
        logger.registrar(
            "ERRO",
            "Tentativa de acesso com token inválido ou expirado"
        );
        throw new Error("Token inválido ou expirado");
    }

}

module.exports = {
    gerarToken,
    validarToken
};