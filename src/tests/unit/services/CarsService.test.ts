import { expect } from 'chai';
import * as sinon from 'sinon';
import CarsModel from '../../../models/CarsModel';
import { coverageCar, validCar, updatedCar } from '../../../../__tests__/utils/CarsMock'
import CarsService from '../../../services/CarsService';
 
describe('Cars Service', () => {

  const carsModel = new CarsModel;
  const genericService = new CarsService(carsModel);


  describe('#create', () => {
  
    before(() => {
      sinon.stub(genericService, "create").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })
  
    it('Deve retornar o objeto criado', async () => {
      const response = await genericService.create(coverageCar);

      expect(response).to.be.an('object');
      expect(response).to.have.property('_id');
      expect(response).to.deep.equal(validCar);
    })

  })

  describe('#read', () => {

    const responseMock = [validCar];

    before(() => {
      sinon.stub(genericService, "read").resolves(responseMock);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar um array', async () => {
      const response = await genericService.read();

      expect(response).to.be.an('array');
      expect(response).to.be.deep.equal(responseMock);
    })
  })

  describe('#readOne', () => {

    before(() => {
      sinon.stub(genericService, "readOne").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar o objeto correto', async () => {
      const response = await genericService.readOne(`${validCar._id}`);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(validCar);
    })
  })

  describe('#update', () => {

    before(() => {
      sinon.stub(genericService, "update").resolves(updatedCar);
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
      const response = await genericService.update(`${validCar._id}`, updatedCarBody);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(updatedCar);
    })
  })

  describe('#delete', () => {

    before(() => {
      sinon.stub(genericService, "delete").resolves(validCar);
    })

    after(() => {
      sinon.restore()
    })

    it('Deve retornar o objeto deletado', async () => {
      const response = await genericService.delete(`${validCar._id}`);

      expect(response).to.be.an('object');
      expect(response).to.be.deep.equal(validCar);
    })
  })

})