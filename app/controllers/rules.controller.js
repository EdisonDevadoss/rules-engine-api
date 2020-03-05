const RuleService = require('../services/rule.service');

exports.create = (req, reply) => {
  const attributes = req.body.rule;
  RuleService.create(attributes)
    .then((rule) => {
      reply.code(201).send(rule);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.list = (req, reply) => {
  RuleService.list()
    .then((rules) => {
      reply.code(200).send(rules);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.getById = (req, reply) => {
  const { id } = req.params;
  RuleService.getById(id)
    .then((ruleResult) => {
      reply.code(200).send(ruleResult);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.update = (req, reply) => {
  const { id } = req.params;
  const attributes = req.body.rule;
  RuleService.update(id, attributes)
    .then((updatedRule) => {
      reply.code(200).send(updatedRule);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.delete = (req, reply) => {
  const { ids } = req.query;
  RuleService.destroy(ids)
    .then(() => {
      reply.code(200).send({ message: 'Rules deleted successfully' });
    })
    .catch((error) => {
      reply.send(error);
    });
};
