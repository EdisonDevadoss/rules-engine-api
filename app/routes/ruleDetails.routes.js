const ruleDetailsController = require('../controllers/ruleDetails.controller');

function ruleDetails(fastify, opts, next) {
  fastify.post('/rule_details', ruleDetailsController.create);
  fastify.get('/rule_details', ruleDetailsController.list);
  fastify.get('/rule_details/:id', ruleDetailsController.getById);
  fastify.put('/rule_details/:id', ruleDetailsController.update);
  next();
}

module.exports = ruleDetails;
