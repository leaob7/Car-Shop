import chai from 'chai';
import * as sinon from 'sinon';
import { validMotorcycle, coverageMotorcycle, updatedMotorcycle } from '../../../utils/MotorcyclesMock'
import { Motorcycle } from '../../../interfaces/MotorcycleInterface';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';

const { expect } = chai;

describe('Motorcycle Service', () => {

const motorcycleService = new MotorcycleService();

const validMotorcycleMock = validMotorcycle as Motorcycle; 
const coverageMotorcycleMock = coverageMotorcycle as Motorcycle;
const updatedMotorcycleMock = updatedMotorcycle as Motorcycle;

const bodyUpdateMock = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'black',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125
} as Motorcycle;

  describe('#create', () => {

    before(() => {
      sinon.stub(motorcycleService, "create").resolves(validMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto criado', async () => {
      const response = await motorcycleService.create(coverageMotorcycleMock);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(validMotorcycle);
    })
  })

  describe('#read', () => {
      const readResponse = [validMotorcycle];

      before(() => {
        sinon.stub(motorcycleService, "read").resolves(readResponse as Motorcycle[]);
      })
  
      after(() => {
        sinon.restore();
      })
  
      it('Deve retornar todos os objetos', async () => {
        const response = await motorcycleService.read();
  
        expect(response).to.be.an('array');
        expect(response).to.deep.equal(readResponse);
      })
    })

  describe('#readOne', () => {

    before(() => {
      sinon.stub(motorcycleService, "readOne").resolves(validMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto correto', async () => {
      const response = await motorcycleService.readOne(`${validMotorcycle._id}`);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(validMotorcycle);
    })
  })

  describe('#update', () => {
    before(() => {
      sinon.stub(motorcycleService, "update").resolves(updatedMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto atualizado', async () => {
      const response = await motorcycleService.update(`${validMotorcycle._id}`, bodyUpdateMock);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(updatedMotorcycle);
    })
  })

  describe('#delete', () => {
    before(() => {
      sinon.stub(motorcycleService, "delete").resolves(validMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto removido', async () => {
      const response = await motorcycleService.delete(`${validMotorcycle._id}`);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(validMotorcycle);
    })
  })

})
