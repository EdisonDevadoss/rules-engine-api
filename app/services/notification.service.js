const { Notification } = require('../models');

function create(attributes) {
  return Notification.create(attributes);
}

module.exports = { create };
