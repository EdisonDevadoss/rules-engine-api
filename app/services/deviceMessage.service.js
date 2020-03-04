const { DeviceMessage } = require('../models');

function create(attributes) {
  return DeviceMessage.create(attributes);
}

module.exports = { create };
