const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Moto Market API - Edit Motorcycle', () => {
  describe('PUT /motos', () => {
    it('TST-4 - Editar motocicleta já cadastrada', async () => {
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

      // Edita a moto
      const motoEditada = {
        fabricante: 'Yamaha',
        modelo: 'Tenere 700',
        ano: 2025,
        km: 5000,
        valor: 90000.00,
        comentario: 'Moto revisada'
      };

      const resEdit = await request(app)
        .put(`/motos/${id}`)
        .send(motoEditada);

      expect(resEdit.status).to.equal(200);
      expect(resEdit.body).to.include(motoEditada);

    });

  it('TST-4 - Editar motocicleta não cadastrada ', async () => {
      const id = 987458754; // ID que não existe  
      // Edita a moto
      const motoEditada = {
        fabricante: 'Yamaha',
        modelo: 'Tenere 700',
        ano: 2025,
        km: 5000,
        valor: 90000.00,
        comentario: 'Moto revisada'
      };

      const resEdit = await request(app)
        .put(`/motos/${id}`)
        .send(motoEditada);

      expect(resEdit.status).to.equal(404);
      expect(resEdit.body.error).to.equal('Moto não encontrada');

    });


    it('TST-4 - Tentar motocicleta já cadastrada deixando dado obrigatório em branco', async () => {
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

      // Edita a moto
      const motoEditada = {
        fabricante: null,
        modelo: null,
        ano: null,
        km: null,
        valor: null,
        comentario: 'Moto revisada'
      };

      const resEdit = await request(app)
        .put(`/motos/${id}`)
        .send(motoEditada);
      
      console.log(resEdit.body);
      expect(resEdit.status).to.equal(400);
      expect(resEdit.body.error).to.equal('Dados obrigatórios não preenchidos');  

    });

  });
});

// Additional tests can be uncommented and modified as needed