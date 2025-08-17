# Moto Market API

API REST simples para cadastro, edição, exclusão e listagem de motocicletas (em memória).

## Endpoints

- `GET /motos` — Lista todas as motos
- `POST /motos` — Cadastra uma nova moto
- `PUT /motos/:id` — Edita uma moto existente
- `DELETE /motos/:id` — Exclui uma moto

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a API:
   ```bash
   npm start
   ```

A API estará disponível em `http://localhost:3001`.

## Observações
- Os dados são mantidos apenas em memória (serão perdidos ao reiniciar o servidor).
- Não há validações de campos, apenas CRUD básico.
