const prettifier = require('pino-pretty');

const environment = process.env.NODE_ENV || 'development';
const logFile = environment === 'development' ? './log/development.log' : './log/production.log';

const logConfig = {
  level: 'info',
  prettyPrint: { translateTime: 'SYS:standard' },
  prettifier
};
const logger = require('pino')(logConfig, logFile);

module.exports = logger;
