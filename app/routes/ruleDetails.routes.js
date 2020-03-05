const { createRuleDetailSchema } = require('./ruleDetails.schema');
const ruleDetailsController = require('../controllers/ruleDetails.controller');

function ruleDetails(fastify, opts, next) {
  fastify.post('/rule_details', createRuleDetailSchema, ruleDetailsController.create);
  next();
}

module.exports = ruleDetails;
