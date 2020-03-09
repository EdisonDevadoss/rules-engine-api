const logger = require('../logger');

const ruleAction = {
  log(value, ruleDetailId) {
    logger.info(`Log ${value.fact} is not ${value.operator} to ${value.value}`);
    const logAttributes = {
      type: 'log',
      message: `Log ${value.fact} is not ${value.operator} to ${value.value}`
    };
  },
  mail(value, ruleDetailId) {
    logger.info('Email send to edison@codingtown.com');
    const mailAttributes = {
      rule_detail_id: ruleDetailId,
      type: 'log',
      message: `Log ${value.fact} is not ${value.operator} to ${value.value}`
    };
  }
};
module.exports = ruleAction;
