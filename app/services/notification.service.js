const { Notification } = require('../models');

function create(attributes) {
  return Notification.create(attributes);
}

function list() {
  return Notification.findAll();
}

module.exports = { create, list };
