import chai from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { validMotorcycle, updatedMotorcycle } from '../../../../__tests__/utils/MotorcyclesMock';
import MotorcycleController from '../../../controllers/MotorcycleController';
import { MockMotorcycle, MockUpdatedMotorcycle } from '../../../interfaces/MockInterfaces';

const { expect } = chai;

describe('Motorcycle Controller', () => {
  const motorcycleController = new MotorcycleController();
  const validMotorcycleMock = validMotorcycle as MockMotorcycle;
  const updatedMotorcycleMock = updatedMotorcycle as MockUpdatedMotorcycle;

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
      sinon.stub(motorcycleController.service, "create").throws();
      await motorcycleController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 201', async () => {
      sinon.stub(motorcycleController.service, "create").resolves(validMotorcycleMock);
      await motorcycleController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.equal(true);
    })
  })

  describe('#read', () => {

    it('retorna com código 500', async () => {
      sinon.stub(motorcycleController.service, "read").throws();
      await motorcycleController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 200', async () => {
      sinon.stub(motorcycleController.service, "read").resolves([validMotorcycleMock]);
      await motorcycleController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    })
  })

  describe('#readOne', () => {

    it('retorna com código 500', async () => {
      sinon.stub(motorcycleController.service, "readOne").throws();
      await motorcycleController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 200', async () => {
      req.params = { id: validMotorcycle._id.toString() }
      sinon.stub(motorcycleController.service, "readOne").resolves(validMotorcycleMock);
      await motorcycleController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    })

  })

  describe('#update', () => {
    it('retorna com código 500', async () => {
      sinon.stub(motorcycleController.service, "update").throws();
      await motorcycleController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 200', async () => {
      req.params = { id: updatedMotorcycleMock._id }
      sinon.stub(motorcycleController.service, "update").resolves(updatedMotorcycleMock);
      await motorcycleController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    })
  })

  describe('#delete', () => {
    it('retorna com código 500', async () => {
      sinon.stub(motorcycleController.service, "delete").throws();
      await motorcycleController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(500)).to.be.equal(true);
    })

    it('retorna com código 204', async () => {
      req.params = { id: validMotorcycleMock._id.toString() }
      sinon.stub(motorcycleController.service, "delete").resolves(validMotorcycleMock);
      await motorcycleController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.equal(true);
    })
  })

})
