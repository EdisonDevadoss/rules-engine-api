const { Action } = require('../models');

function list() {
  return Action.findAll({ order: [['updated_at', 'DESC']] });
}

module.exports = { list };
