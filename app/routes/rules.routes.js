const {
  createRuleSchema,
  listRulesSchema,
  getRuleByIdSchema,
  updateRuleSchema,
  deleteRuleSchema
} = require('./rules.schema');
const rulesController = require('../controllers/rules.controller');

function rules(fastify, opts, next) {
  fastify.post('/rules', createRuleSchema, rulesController.create);
  fastify.get('/rules', listRulesSchema, rulesController.list);
  fastify.get('/rules/:id', getRuleByIdSchema, rulesController.getById);
  fastify.put('/rules/:id', updateRuleSchema, rulesController.update);
  fastify.delete('/rules', deleteRuleSchema, rulesController.delete);
  next();
}

module.exports = rules;
