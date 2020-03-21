const SqlRuleDetailService = require('../services/sqlRuleDetail.service');

exports.create = (req, reply) => {
  const attributes = req.body.sqlRuleDetail;
  SqlRuleDetailService.create(attributes)
    .then((sqlRuleDetail) => {
      reply.code(201).send(sqlRuleDetail);
    })
    .catch((error) => {
      reply.send(error);
    });
};


exports.list = (req, reply) => {
  const { query } = req;
  SqlRuleDetailService.list(query)
    .then((rules) => {
      reply.code(200).send(rules);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.getById = (req, reply) => {
  const { id } = req.params;
  SqlRuleDetailService.getById(id)
    .then((ruleResult) => {
      reply.code(200).send(ruleResult);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.update = (req, reply) => {
  const { id } = req.params;
  const attributes = req.body.sqlRuleDetail;
  SqlRuleDetailService.update(id, attributes)
    .then((updatedRule) => {
      reply.code(200).send(updatedRule);
    })
    .catch((error) => {
      reply.send(error);
    });
};

exports.delete = (req, reply) => {
  const { ids } = req.query;
  SqlRuleDetailService.destroy(ids)
    .then(() => {
      reply.code(200).send({ message: 'Rules deleted successfully' });
    })
    .catch((error) => {
      reply.send(error);
    });
};
