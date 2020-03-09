const { EmptyResultError, DatabaseError } = require('sequelize');
const { split, size } = require('lodash');
const { RuleDetail } = require('../models');

function create(attributes) {
  return RuleDetail.create(attributes);
}

function list(params) {
  const queries = size(params) > 0 ? { rule_id: params.rule_id } : {};
  return RuleDetail.findAll({ where: { ...queries } });
}

function getById(id) {
  return RuleDetail.findByPk(id).then((ruleResult) => {
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
  return RuleDetail.destroy({ where: { id: splittedIDs } }).catch((error) => {
    if (error instanceof DatabaseError) {
      throw new DatabaseError('Bad request please check parameters');
    }
    else {
      return error;
    }
  });
}

module.exports = {
  create,
  list,
  getById,
  update,
  destroy
};
