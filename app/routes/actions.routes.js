const { listActionsSchema } = require('./actions.schema');
const actionsController = require('../controllers/actions.controller');

function actions(fastify, opts, next) {
  fastify.get('/actions', listActionsSchema, actionsController.list);
  next();
}

module.exports = actions;
