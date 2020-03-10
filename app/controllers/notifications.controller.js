const NotificationService = require('../services/notification.service');

exports.list = (req, reply) => {
  NotificationService.list()
    .then((notifications) => {
      reply.code(200).send(notifications);
    })
    .catch((error) => {
      reply.send(error);
    });
};
