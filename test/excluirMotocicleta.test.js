const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Moto Market API - Delete Motorcycle', () => {
  describe('DELETE /motos', () => {
    it('TST-5 - Excluir motocicleta cadastrada ', async () => {
      // Cria uma moto
      const motoOriginal = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: 2005,
        km: 70000,
        valor: 40000.00,
        comentario: 'Moto em excelente estado'
      };

      const resCreate = await request(app)
        .post('/motos')
        .send(motoOriginal);

      expect(resCreate.status).to.equal(201);
      expect(resCreate.body).to.include(motoOriginal);

      const id = resCreate.body.id;

      // Excluit a moto
      const resDelete = await request(app)
        .delete(`/motos/${id}`);  

      expect(resDelete.status).to.equal(200);
      expect(resDelete.body.message).to.equal('Moto excluída com sucesso');

    });

    it('TST-5 - Excluir motocicleta não cadastrada ', async () => {

      const id = 12345678; // ID que não existe

      // Excluit a moto
      const resDelete = await request(app)
        .delete(`/motos/${id}`);  

      expect(resDelete.status).to.equal(404);
      expect(resDelete.body.error).to.equal('Moto não encontrada');

    });


  });
});

// Additional tests can be uncommented and modified as needed