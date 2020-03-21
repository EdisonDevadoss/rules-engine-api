const { EmptyResultError, DatabaseError } = require('sequelize');
const { split, size, map } = require('lodash');
const { SqlRuleDetail, Rule } = require('../models');

function create(attributes) {
  return SqlRuleDetail.create(attributes);
}

function list(params) {
  const queries = size(params) > 0 ? { rule_id: params.rule_id } : {};
  return SqlRuleDetail.findAll({
    where: { ...queries },
    order: [['updated_at', 'DESC']],
    include: [{ model: Rule, as: 'rules', attributes: ['name'] }]
  }).then((ruleDetails) => {
    const data = map(ruleDetails, ruleDetail => ({
      rule_name: ruleDetail.rules.name,
      ...ruleDetail.dataValues
    }));
    return data;
  });
}

function getById(id) {
  return SqlRuleDetail.findByPk(id).then((ruleResult) => {
    if (ruleResult) {
      return ruleResult;
    }
    throw new EmptyResultError('No rule detail found');
  });
}

function update(id, attributes) {
  return getById(id).then(ruleResult => ruleResult.update(attributes));
}

function destroy(ids) {
  const splittedIDs = split(ids, ',');
  return SqlRuleDetail.destroy({ where: { id: splittedIDs } }).catch((error) => {
    if (error instanceof DatabaseError) {
      throw new DatabaseError('Bad request please check parameters');
    }
    else {
      return error;
    }
  });
}

module.exports = {
  create, list, getById, update, destroy
};
