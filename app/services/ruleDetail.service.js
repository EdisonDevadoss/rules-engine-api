const { EmptyResultError } = require('sequelize');
const { RuleDetail } = require('../models');

function create(attributes) {
  return RuleDetail.create(attributes);
}

function list() {
  return RuleDetail.findAll();
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

module.exports = {
  create, list, getById, update
};
