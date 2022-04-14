import { expect } from 'chai';
import * as sinon from 'sinon';
import { coverageCar, validCar, updatedCar } from '../../../../__tests__/utils/CarsMock'
import CarsModel from '../../../models/CarsModel';
 
describe('Cars Model', () => {
  const carsModel = new CarsModel();


  describe('#create', () => {
  
    before(() => {
      sinon.stub(carsModel, "create").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })
  
    it('Deve retornar o objeto criado', async () => {
      const response = await carsModel.create(coverageCar);

      expect(response).to.be.an('object');
      expect(response).to.have.property('_id');
      expect(response).to.deep.equal(validCar);
    })

  })

  describe('#read', () => {

    const responseMock = [validCar];

    before(() => {
      sinon.stub(carsModel, "read").resolves(responseMock);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar um array', async () => {
      const response = await carsModel.read();

      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(responseMock);
    })
  })

  describe('#readOne', () => {

    before(() => {
      sinon.stub(carsModel, "readOne").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar o objeto correto', async () => {
      const response = await carsModel.readOne(`${validCar._id}`);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(validCar);
    })
  })

  describe('#update', () => {

    before(() => {
      sinon.stub(carsModel, "update").resolves(updatedCar);
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
      const response = await carsModel.update(`${validCar._id}`, updatedCarBody);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(updatedCar);
    })
  })

  describe('#delete', () => {

    before(() => {
      sinon.stub(carsModel, "delete").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar o objeto deletado', async () => {
      const response = await carsModel.delete(`${validCar._id}`);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(validCar);
    })
  })

})