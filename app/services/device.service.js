const { Device } = require('../models');

function list() {
  return Device.findAll().then(devices => devices);
}

module.exports = { list };
