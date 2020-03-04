const DeviceService = require('../services/device.service');

exports.list = (req, reply) => {
  DeviceService.list()
    .then((devices) => {
      reply.code(200).send(devices);
    })
    .catch((error) => {
      reply.send(error);
    });
};
