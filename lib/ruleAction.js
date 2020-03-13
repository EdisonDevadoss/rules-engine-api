const logger = require('../logger');
const sendMail = require('./sendGrid');
const NotificationService = require('../app/services/notification.service');

const ruleAction = {
  log(value, ruleDetailId, result) {
    const message = `${value.fact} is not ${value.operator} to ${value.value}`;
    logger.info(message);
    const logAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'log',
      message
    };
    NotificationService.create(logAttributes);
  },
  mail(value, ruleDetailId, result) {
    const message = `${JSON.stringify(value)}`;
    console.log('mail called', message);
    sendMail(message, result);
    const mailAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'mail',
      message
    };
    NotificationService.create(mailAttributes);
  },
  notification(value, ruleDetailId, result) {
    const notificationAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'notification',
      message: `${value.fact} is ${value.operator} to ${value.value}`
    };
    NotificationService.create(notificationAttributes);
  }
};
module.exports = ruleAction;
