const { listDevicesSchema } = require('./devices.schema');
const devicesController = require('../controllers/devices.controller');

function devices(fastify, opts, next) {
  fastify.get('/devices', listDevicesSchema, devicesController.list);
  next();
}

module.exports = devices;
