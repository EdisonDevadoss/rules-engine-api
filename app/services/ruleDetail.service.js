const { RuleDetail } = require('../models');

function create(attributes) {
  return RuleDetail.create(attributes);
}

module.exports = { create };
