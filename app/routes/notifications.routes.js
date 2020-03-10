const { listNotificationsSchema } = require('./notifications.schema');
const notificationsController = require('../controllers/notifications.controller');

function notifications(fastify, opts, next) {
  fastify.get('/notifications', listNotificationsSchema, notificationsController.list);
  next();
}

module.exports = notifications;
