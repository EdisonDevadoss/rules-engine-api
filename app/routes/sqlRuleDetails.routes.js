const SqlRuleDetailsController = require('../controllers/sqlRuleDetails.controller');

function sqlRuleDetails(fastify, opts, next) {
  fastify.post('/sql_rule_details', SqlRuleDetailsController.create);
  fastify.get('/sql_rule_details', SqlRuleDetailsController.list);
  fastify.get('/sql_rule_details/:id', SqlRuleDetailsController.getById);
  fastify.put('/sql_rule_details/:id', SqlRuleDetailsController.update);
  fastify.delete('/sql_rule_details', SqlRuleDetailsController.delete);
  next();
}

module.exports = sqlRuleDetails;
