import chai from 'chai';
import chaiHttp = require('chai-http');
import mongoose from 'mongoose';
import * as sinon from 'sinon';
import { coverageMotorcycle, validMotorcycle, updatedMotorcycle } from '../../../../__tests__/utils/MotorcyclesMock';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleController from '../../../controllers/MotorcycleController';

chai.use(chaiHttp);

const { expect } = chai;

describe('Motorcycle Controller', () => {

  const motorcycleService = new MotorcycleService();
  const motorcycleController = new MotorcycleController(motorcycleService);

  // describe('#create', () => { }

  // describe('#read', () => { }

  // describe('#readOne', () => { }

  // describe('#update', () => { }

  // describe('#delete', () => { }

})
