const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Moto Market API - Add Motorcycle', () => {
  describe('POST /motos', () => {
    it('TST-1 - Cadastrar nova motocicleta com todos os campos obrigatórios preenchidos ', async () => {
      const motoId1 = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: 2005,
        km: 70000,
        valor: 40000.00,
        comentario: 'Moto em excelente estado'
      };

      const resId1 = await request(app)
        .post('/motos')
        .send(motoId1);

      expect(resId1.status).to.equal(201);
      expect(resId1.body).to.include(motoId1);
      expect(resId1.body.id).to.have.equal(1);

      const motoId2 = {
        fabricante: 'KTM',
        modelo: '990R Adventure',
        ano: 2010,
        km: 20000,
        valor: 60000.00,
        comentario: 'Moto em excelente estado'
      };

      const resId2 = await request(app)
        .post('/motos')
        .send(motoId2);

      expect(resId2.status).to.equal(201);
      expect(resId2.body).to.include(motoId2);
      expect(resId2.body.id).to.have.equal(2);
    });

    it('TST-2 - Cadastrar nova motocicleta com campo aobrigatório faltante - fabricante ', async () => {
      const moto = {
        fabricante: null,
        modelo: '950 Adventure',
        ano: 2005,
        km: 70000,
        valor: 40000.00,
        comentario: 'Moto em excelente estado'
      };

      const res = await request(app)
        .post('/motos')
        .send(moto);

      expect(res.status).to.equal(400);
      expect(res.body.error).to.equal('Dados obrigatórios não preenchidos');

    });    

    it('TST-2 - Cadastrar nova motocicleta com campo aobrigatório faltante - modelo ', async () => {
      const moto = {
        fabricante: 'KTM',
        modelo: null,
        ano: 2005,
        km: 70000,
        valor: 40000.00,
        comentario: 'Moto em excelente estado'
      };

      const res = await request(app)
        .post('/motos')
        .send(moto);

      expect(res.status).to.equal(400);
      expect(res.body.error).to.equal('Dados obrigatórios não preenchidos');

    });  
    it('TST-2 - Cadastrar nova motocicleta com campo aobrigatório faltante - ano ', async () => {
      const moto = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: null,
        km: 70000,
        valor: 40000.00,
        comentario: 'Moto em excelente estado'
      };

      const res = await request(app)
        .post('/motos')
        .send(moto);

      expect(res.status).to.equal(400);
      expect(res.body.error).to.equal('Dados obrigatórios não preenchidos');

    });  

    it('TST-2 - Cadastrar nova motocicleta com campo aobrigatório faltante - KM ', async () => {
      const moto = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: 2005,
        km: null,
        valor: 40000.00,
        comentario: 'Moto em excelente estado'
      };

      const res = await request(app)
        .post('/motos')
        .send(moto);

      expect(res.status).to.equal(400);
      expect(res.body.error).to.equal('Dados obrigatórios não preenchidos');

    });

    it('TST-2 - Cadastrar nova motocicleta com campo aobrigatório faltante - valor ', async () => {
      const moto = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: 2005,
        km: 70000,
        valor: null,
        comentario: 'Moto em excelente estado'
      };

      const res = await request(app)
        .post('/motos')
        .send(moto);

      expect(res.status).to.equal(400);
      console.log(res.body);
      expect(res.body.error).to.equal('Dados obrigatórios não preenchidos');

    });

    it('TST-3 - Verificar opcionalidade do campo comentário durante cadastro ', async () => {
      const motoId1 = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: 2005,
        km: 70000,
        valor: 40000.00,
        comentario: null
      };

      const resId1 = await request(app)
        .post('/motos')
        .send(motoId1);

      expect(resId1.status).to.equal(201);
      expect(resId1.body).to.include(motoId1);
      
      const motoId2 = {
        fabricante: 'KTM',
        modelo: '950 Adventure',
        ano: 2005,
        km: 70000,
        valor: 40000.00,
        comentario: "Validando comentário"
      };

      const resId2 = await request(app)
        .post('/motos')
        .send(motoId2);

      expect(resId2.status).to.equal(201);
      expect(resId2.body).to.include(motoId2);
    });    


  });
});

// Additional tests can be uncommented and modified as needed