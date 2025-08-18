
# Moto Market API

API REST para cadastro, edição, listagem e exclusão de motocicletas.

## Tecnologias
- Node.js
- Express
- Swagger (OpenAPI)
- Mocha, Chai, Supertest (testes automatizados)

npm install

## Como rodar e testar

1. Instale as dependências:
   ```
   npm install
   ```

2. Para rodar a API manualmente:
   ```
   npm start
   ```
   ou
   ```
   node server.js
   ```
   A API estará disponível em http://localhost:3001

3. Para rodar os testes automatizados (NÃO é necessário subir o servidor manualmente):
   ```
   npm test
   ```
   Os testes sobem e fecham a API automaticamente em memória.

4. Para visualizar o relatório dos testes (Mochawesome):
   Abra o arquivo `mochawesome-report/mochawesome.html` após rodar `npm test`.

## Endpoints principais

### Listar todas as motos
- **GET** `/motos`
- Resposta: array de motos

### Cadastrar nova moto
- **POST** `/motos`
- Campos obrigatórios: `fabricante`, `modelo`, `ano`
- Exemplo de body:
  ```json
  {
    "fabricante": "Honda",
    "modelo": "CB500",
    "ano": 2020,
    "km": 15000,
    "valor": 25000.00,
    "comentario": "Moto em ótimo estado"
  }
  ```
- Resposta 201: moto cadastrada
- Resposta 400: `{ "error": "Dados obrigatórios não preenchidos" }`

### Editar moto
- **PUT** `/motos/{id}`
- Body: campos a serem atualizados (obrigatórios: `fabricante`, `modelo`, `ano`)
- Resposta 200: moto editada
- Resposta 404: `{ "error": "Moto não encontrada" }`
- Resposta 400: `{ "error": "Dados obrigatórios não preenchidos" }`

### Excluir moto
- **DELETE** `/motos/{id}`
- Resposta 200: `{ "message": "Moto excluída com sucesso" }`
- Resposta 404: `{ "error": "Moto não encontrada" }`

## Documentação interativa
Acesse o Swagger em: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

## Testes automatizados
- Para rodar os testes:
  ```

  ```
- Os testes cobrem cenários de cadastro, edição, exclusão e validação de erros.

## Observações
- Todos os dados ficam em memória (não há banco de dados).
- O campo `comentario` é opcional.
- O projeto segue boas práticas REST e inclui exemplos de respostas de erro e sucesso no Swagger.

---

Desenvolvido por Bruno Reis Castro
