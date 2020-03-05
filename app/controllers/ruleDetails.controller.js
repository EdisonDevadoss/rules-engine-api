const RuleDetailService = require('../services/ruleDetail.service');

exports.create = (req, reply) => {
  const attributes = req.body.rule;
  RuleDetailService.create(attributes)
    .then((ruleDetail) => {
      reply.code(201).send(ruleDetail);
    })
    .catch((error) => {
      reply.send(error);
    });
};
