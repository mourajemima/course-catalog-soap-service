# Web Service SOAP - Catálogo de Cursos

Projeto desenvolvido para a disciplina Programação Orientada a Serviços da UERN.

O sistema implementa um Web Service SOAP para gerenciamento de alunos, cursos e matrículas utilizando arquitetura orientada a serviços (SOA).

## Requisitos de Ambiente

- Node.js (versão 18 ou superior)
- NPM
- soap
- SQLite
- better-sqlite3
- JSON Web Token (JWT)
- SoapUI

## Instalação

Clone o repositório:
```
git clone https://github.com/mourajemima/course-catalog-soap-service.git
cd course-catalog-soap-service
``` 

Instale as dependências: 
```
npm install
```

## Execução

Inicie o servidor: 
```
node src/server.js
```

O serviço será iniciado na porta: 
```
http://localhost:8000
```

Os contratos WSDL podem ser acessados em: 
```
http://localhost:8000/curso?wsdl
http://localhost:8000/aluno?wsdl
http://localhost:8000/matricula?wsdl
```

## Banco de Dados
O projeto utiliza SQLite para persistência dos dados.

O arquivo do banco é gerado automaticamente após a primeira execução do servidor.

## Segurança com JWT

A operação protegida é: removerAluno.

Para gerar um token execute:

```
node src/security/gerarToken.js
```

O token será exibido no terminal.

O token possui validade de 12 horas.

Para executar a operação removerAluno é necessário informar o token no XML da requisição SOAP.

## Logs
O sistema registra eventos do AlunoService.

Os logs são armazenados em: src/logs/soap.log

São registrados:

- Consultas
- Cadastros
- Atualizações
- Remoções
- Erros
- Falhas de autenticação

O arquivo de log é criado automaticamente durante a execução do sistema.

## Testes

Teste foram realizados utilizando: 

- SoapUI
- Postman

Foram testadas:

- Operações funcionais
- Mensagens XML
- Falhas de autenticação
- Erros de negócio
- Operações protegidas por JWT

