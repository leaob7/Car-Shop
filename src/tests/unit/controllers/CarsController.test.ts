import chai from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { validCar, updatedCar } from '../../../../__tests__/utils/CarsMock'
import CarsController from '../../../controllers/CarsController';

const { expect } = chai;

describe('Cars Controller', () => {
  const carsController = new CarsController();

  const res = {} as Response;
  const req = {} as Request;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(null);
  })

  afterEach(() => {
    sinon.restore();
  })

  describe('#create', () => {

    it('retorna com código 500', async () => {
      sinon.stub(carsController.service, "create").throws();
      await carsController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 201', async () => {
      sinon.stub(carsController.service, "create").resolves(validCar);
      await carsController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.equal(true);
    })
  })

  describe('#read', () => {

    it('retorna com código 500', async () => {
      sinon.stub(carsController.service, "read").throws();
      await carsController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 200', async () => {
      sinon.stub(carsController.service, "read").resolves([validCar]);
      await carsController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    })
  })

  describe('#readOne', () => {

    it('retorna com código 500', async () => {
      sinon.stub(carsController.service, "readOne").throws();
      await carsController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 200', async () => {
      req.params = { id: validCar._id.toString() }
      sinon.stub(carsController.service, "readOne").resolves(validCar);
      await carsController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    })

  })

  describe('#update', () => {
    it('retorna com código 500', async () => {
      sinon.stub(carsController.service, "update").throws();
      await carsController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 200', async () => {
      req.params = { id: updatedCar._id }
      sinon.stub(carsController.service, "update").resolves(updatedCar);
      await carsController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    })
  })

  describe('#delete', () => {
    it('retorna com código 500', async () => {
      sinon.stub(carsController.service, "delete").throws();
      await carsController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 204', async () => {
      req.params = { id: validCar._id.toString() }
      sinon.stub(carsController.service, "delete").resolves(validCar);
      await carsController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.equal(true);
    })
  })

})
