import chai from 'chai';
import chaiHttp = require('chai-http');
import mongoose from 'mongoose';
import * as sinon from 'sinon';
import { coverageCar, validCar, updatedCar } from '../../../../__tests__/utils/CarsMock'
import CarsService from '../../../services/CarsService';
import CarsController from '../../../controllers/CarsController';
import { request, response } from 'express';
import CarsModel from '../../../models/CarsModel';

chai.use(chaiHttp);

const { expect, should } = chai;

describe('Cars Controller', () => {

  const carsService = new CarsService();
  const carsController = new CarsController(carsService)

  // describe('#create', () => { }

  // describe('#read', () => { }

  // describe('#readOne', () => { }

  // describe('#update', () => { }

  // describe('#delete', () => { }

})
