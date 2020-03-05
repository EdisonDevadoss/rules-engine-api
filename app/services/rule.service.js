const { EmptyResultError, DatabaseError } = require('sequelize');
const { split } = require('lodash');
const { Rule } = require('../models');

function create(attributes) {
  return Rule.create(attributes);
}

function list() {
  return Rule.findAll();
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
  return Rule.destroy({ where: { id: splittedIDs } }).catch((error) => {
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
