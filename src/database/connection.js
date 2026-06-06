const Database = require("better-sqlite3");

const db = new Database("./src/database/database.sqlite");

console.log("Banco SQLite conectado.");

db.prepare(`    
CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS cursos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    categoria TEXT NOT NULL,
    cargaHoraria INTEGER NOT NULL
)
`).run();

const quantidadeCursos = db.prepare(`
    SELECT COUNT(*) as total
    FROM cursos
`).get();

if (quantidadeCursos.total === 0) {
    const stmt = db.prepare(`
        INSERT INTO cursos
        (nome, categoria, cargaHoraria)
        VALUES (?, ?, ?)
    `);
    stmt.run("Arquitetura SOA", "Arquitetura", 40);
    stmt.run("Web Services SOAP", "Integração", 30);
    stmt.run("Node.js para APIs", "Desenvolvimento", 50);
    console.log("Cursos iniciais inseridos.");
}

db.prepare(`
CREATE TABLE IF NOT EXISTS matriculas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idAluno INTEGER NOT NULL,
    idCurso INTEGER NOT NULL,
    status TEXT NOT NULL,
    FOREIGN KEY(idAluno) REFERENCES alunos(id),
    FOREIGN KEY(idCurso) REFERENCES cursos(id)
)
`).run();

module.exports = db;
