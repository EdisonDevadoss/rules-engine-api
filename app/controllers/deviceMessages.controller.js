const DeviceMessageService = require('../services/deviceMessage.service');

exports.create = (req, reply) => {
  const attributes = req.body.device;
  DeviceMessageService.create(attributes)
    .then((deviceMessage) => {
      reply.code(201).send(deviceMessage);
    })
    .catch((error) => {
      reply.send(error);
    });
};
