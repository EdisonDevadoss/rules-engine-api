const RuleDetailService = require('../services/ruleDetail.service');

exports.create = (req, reply) => {
  const attributes = req.body.ruleDetail;
  RuleDetailService.create(attributes)
    .then((ruleDetail) => {
      reply.code(201).send(ruleDetail);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.list = (req, reply) => {
  RuleDetailService.list()
    .then((rules) => {
      reply.code(200).send(rules);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.getById = (req, reply) => {
  const { id } = req.params;
  RuleDetailService.getById(id)
    .then((ruleResult) => {
      reply.code(200).send(ruleResult);
    })
    .catch((error) => {
      reply.send(error);
    });
};


exports.update = (req, reply) => {
  const { id } = req.params;
  const attributes = req.body.ruleDetail;
  RuleDetailService.update(id, attributes)
    .then((updatedRule) => {
      reply.code(200).send(updatedRule);
    })
    .catch((error) => {
      reply.send(error);
    });
};