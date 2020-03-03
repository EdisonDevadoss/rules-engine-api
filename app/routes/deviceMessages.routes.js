const { createDeviceMessageSchema } = require('./deviceMessages.schema');
const devicesController = require('../controllers/deviceMessages.controller');

function deviceMessages(fastify, opts, next) {
  fastify.post('/device_messages', createDeviceMessageSchema, devicesController.create);
  next();
}

module.exports = deviceMessages;
