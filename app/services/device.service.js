const { Device } = require('../models');

function list() {
  return Device.findAll({ order: [['updated_at', 'DESC']] });
}

module.exports = { list };
