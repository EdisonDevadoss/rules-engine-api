const logger = require('../logger');

const ruleAction = {
  log(value) {
    logger.info(`Log ${value.fact} is not ${value.operator} to ${value.value}`);
    // console.log('log logged');
  },
  mail(value) {
    logger.info('Email send to edison@codingtown.com');
    // console.log('email logged');
  }
};
module.exports = ruleAction;
