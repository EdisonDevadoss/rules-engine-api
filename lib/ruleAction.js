const logger = require('../logger');
const sendMail = require('./sendGrid');
const NotificationService = require('../app/services/notification.service');

const ruleAction = {
  log(value, ruleDetailId) {
    logger.info(`${value.fact} is not ${value.operator} to ${value.value}`);
    const logAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'log',
      message: `${value.fact} is not ${value.operator} to ${value.value}`
    };
    NotificationService.create(logAttributes);
  },
  mail(value, ruleDetailId) {
    const message = `${value.fact} is ${value.operator} to ${value.value}`;
    sendMail(message);
    const mailAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'mail',
      message: `${value.fact} is ${value.operator} to ${value.value}`
    };
    NotificationService.create(mailAttributes);
  },
  notification(value, ruleDetailId) {
    const notificationAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'notification',
      message: `${value.fact} is ${value.operator} to ${value.value}`
    };
    NotificationService.create(notificationAttributes);
  }
};
module.exports = ruleAction;
