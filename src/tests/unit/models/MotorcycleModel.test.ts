import chai from 'chai';
import * as sinon from 'sinon';
import { validMotorcycle, coverageMotorcycle, updatedMotorcycle } from '../../../../__tests__/utils/MotorcyclesMock'
import { Motorcycle } from '../../../interfaces/MotorcycleInterface';
import MotorcycleModel from '../../../models/MotorcycleModel';

const { expect } = chai;

describe('Motorcycle Model', () => {

const motorcyleModel = new MotorcycleModel();

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
      sinon.stub(motorcyleModel, "create").resolves(validMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto criado', async () => {
      const response = await motorcyleModel.create(coverageMotorcycleMock);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(validMotorcycle);
    })
  })

  describe('#read', () => {
      const readResponse = [validMotorcycle];

      before(() => {
        sinon.stub(motorcyleModel, "read").resolves(readResponse as Motorcycle[]);
      })
  
      after(() => {
        sinon.restore();
      })
  
      it('Deve retornar todos os objetos', async () => {
        const response = await motorcyleModel.read();
  
        expect(response).to.be.an('array');
        expect(response).to.deep.equal(readResponse);
      })
    })

  describe('#readOne', () => {

    before(() => {
      sinon.stub(motorcyleModel, "readOne").resolves(validMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto correto', async () => {
      const response = await motorcyleModel.readOne(`${validMotorcycle._id}`);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(validMotorcycle);
    })
  })

  describe('#update', () => {
    before(() => {
      sinon.stub(motorcyleModel, "update").resolves(updatedMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto atualizado', async () => {
      const response = await motorcyleModel.update(`${validMotorcycle._id}`, bodyUpdateMock);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(updatedMotorcycle);
    })
  })

  describe('#delete', () => {
    before(() => {
      sinon.stub(motorcyleModel, "delete").resolves(validMotorcycleMock);
    })

    after(() => {
      sinon.restore();
    })

    it('Deve retornar o objeto removido', async () => {
      const response = await motorcyleModel.delete(`${validMotorcycle._id}`);

      expect(response).to.be.an('object');
      expect(response).to.deep.equal(validMotorcycle);
    })
  })

})
