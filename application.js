const fastify = require('fastify')({
  logger: require('./logger') // eslint-disable-line global-require
});
const swagger = require('fastify-swagger');
const cors = require('fastify-cors');

const swaggerOptions = require('./lib/swagger');
const renderError = require('./lib/renderError');

function build() {
  fastify.register(cors, {
    origin: '*',
    methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

  fastify.setErrorHandler((error, req, reply) => {
    renderError(reply, error);
  });

  fastify.register(swagger, swaggerOptions);

  return fastify;
}

module.exports = { build };
