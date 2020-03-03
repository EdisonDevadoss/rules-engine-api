const ActionService = require('../services/action.service');

exports.list = (req, reply) => {
  ActionService.list()
    .then((actions) => {
      reply.code(200).send(actions);
    })
    .catch((error) => {
      reply.send(error);
    });
};
