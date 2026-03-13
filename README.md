# Web Service SOAP - Catálogo de Cursos

Este projeto implementa um Web Service SOAP para gerenciamento de cursos, alunos e matrículas.

## Requisitos de Ambiente

- Node.js (versão 18 ou superior)
- NPM
- Biblioteca soap para Node.js

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

## Execução do Serviço

Execute o servidor: 
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

## Consumo do Serviço

O serviço pode ser consumido utilizando ferramentas como: 

- SoapUI
- Postman
- Clientes SOAP

Passos para consumir: 

1. Executar o servidor 
2. Abrir uma ferramenta de teste de APIs
3. Conferir o WSDL do serviço
4. Escolher a operação desejada
5. Enviar a requisição SOAP: 
    1. Adicionar o XML no Body da requisição contendo os parâmetros necessários. 

