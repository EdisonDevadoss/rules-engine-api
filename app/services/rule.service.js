const { EmptyResultError, DatabaseError } = require('sequelize');
const { split } = require('lodash');
const { Rule, RuleDetail, sequelize } = require('../models');

function create(attributes) {
  return Rule.create(attributes);
}

function list() {
  return Rule.findAll({ order: [['updated_at', 'DESC']] });
}

function getById(id) {
  return Rule.findByPk(id).then((ruleResult) => {
    if (ruleResult) {
      return ruleResult;
    }
    throw new EmptyResultError('No rule found');
  });
}

function update(id, attributes) {
  return getById(id).then(ruleResult => ruleResult.update(attributes));
}

function destroy(ids) {
  const splittedIDs = split(ids, ',');
  return sequelize.transaction(t => RuleDetail.destroy({
    where: { rule_id: splittedIDs },
    transaction: t
  })
    .then(() => Rule.destroy({ where: { id: splittedIDs }, transaction: t }))
    .catch((error) => {
      if (error instanceof DatabaseError) {
        throw new DatabaseError('Bad request please check parameters');
      }
      else {
        return error;
      }
    }));
}

module.exports = {
  create,
  list,
  getById,
  update,
  destroy
};
