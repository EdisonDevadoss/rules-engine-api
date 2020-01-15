const { map } = require('lodash');
const {
  EmptyResultError,
  ValidationError,
  UniqueConstraintError,
  DatabaseError
} = require('sequelize');
const logger = require('../logger');

function renderError(reply, errObj) {
  if (errObj instanceof EmptyResultError) {
    reply.code(404).send({ errors: [errObj.message] });
  }
  else if (errObj instanceof ValidationError || errObj instanceof UniqueConstraintError) {
    const messages = map(errObj.errors, error => error.message);
    reply.code(422).send({ errors: messages });
  }
  else if (errObj instanceof DatabaseError) {
    const message = errObj.message || errObj.original;
    reply.code(400).send({ errors: [message] });
  }
  else {
    logger.error(errObj);
    reply
      .code(500)
      .send({ errors: ['Sorry, something went wrong on our end. Please try again later'] });
  }
}
module.exports = renderError;
