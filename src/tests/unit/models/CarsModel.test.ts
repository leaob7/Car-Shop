import { expect } from 'chai';
import * as sinon from 'sinon';
import { coverageCar, validCar, updatedCar } from '../../../../__tests__/utils/CarsMock'
import CarsModel from '../../../models/CarsModel';
 
describe('Cars Model', () => {
  const genericModel = new CarsModel();


  describe('#create', () => {
  
    before(() => {
      sinon.stub(genericModel, "create").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })
  
    it('Deve retornar o objeto criado', async () => {
      const response = await genericModel.create(coverageCar);

      expect(response).to.be.an('object');
      expect(response).to.have.property('_id');
      expect(response).to.deep.equal(validCar);
    })

  })

  describe('#read', () => {

    const responseMock = [validCar];

    before(() => {
      sinon.stub(genericModel, "read").resolves(responseMock);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar um array', async () => {
      const response = await genericModel.read();

      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(responseMock);
    })
  })

  describe('#readOne', () => {

    before(() => {
      sinon.stub(genericModel, "readOne").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar o objeto correto', async () => {
      const response = await genericModel.readOne(`${validCar._id}`);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(validCar);
    })
  })

  describe('#update', () => {

    before(() => {
      sinon.stub(genericModel, "update").resolves(updatedCar);
    })

    after(() => {
      sinon.restore()
    })

    const updatedCarBody = {
      model: 'Uno da Escada',
      year: 1966,
      color: 'blue',
      buyValue: 3500,
      seatsQty: 2,
      doorsQty: 2
    }

    it('Deve retornar o objeto atualizado', async () => {
      const response = await genericModel.update(`${validCar._id}`, updatedCarBody);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(updatedCar);
    })
  })

  describe('#delete', () => {

    before(() => {
      sinon.stub(genericModel, "delete").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar o objeto deletado', async () => {
      const response = await genericModel.delete(`${validCar._id}`);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(validCar);
    })
  })

})