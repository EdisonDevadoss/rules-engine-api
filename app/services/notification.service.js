const { Notification } = require('../models');

function create(attributes) {
  return Notification.create(attributes);
}

function list() {
  return Notification.findAll({ order: [['updated_at', 'DESC']] });
}

module.exports = { create, list };
