const { Action } = require('../models');

function list() {
  return Action.findAll().then(actions => actions);
}

module.exports = { list };
