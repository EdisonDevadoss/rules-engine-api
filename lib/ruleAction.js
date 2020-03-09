const logger = require('../logger');
const sendMail = require('./sendGrid');

const ruleAction = {
  log(value) {
    logger.info(`Log ${value.fact} is not ${value.operator} to ${value.value}`);
  },
  mail(value) {
    const message = `${value.fact} is ${value.operator} to ${value.value}`;
    sendMail(message);
  }
};
module.exports = ruleAction;
