const fastify = require('fastify')({
  logger: require('./logger') // eslint-disable-line global-require
});
const swagger = require('fastify-swagger');
const cors = require('fastify-cors');

const swaggerOptions = require('./lib/swagger');
const renderError = require('./lib/renderError');
const actionRoutes = require('./app/routes/actions.routes');
const deviceRoutes = require('./app/routes/devices.routes');
const ruleRoutes = require('./app/routes/rules.routes');
const deviceMessagesRoutes = require('./app/routes/deviceMessages.routes');
const ruleDetailsRoutes = require('./app/routes/ruleDetails.routes');
const notificationRoutes = require('./app/routes/notifications.routes');

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
  fastify.register(actionRoutes, { prefix: '/v1' });
  fastify.register(deviceRoutes, { prefix: '/v1' });
  fastify.register(ruleRoutes, { prefix: '/v1' });
  fastify.register(deviceMessagesRoutes, { prefix: '/v1' });
  fastify.register(ruleDetailsRoutes, { prefix: '/v1' });
  fastify.register(notificationRoutes, { prefix: '/v1' });

  return fastify;
}

module.exports = { build };
