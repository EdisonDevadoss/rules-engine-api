const swaggerOptions = {
  routePrefix: '/doc',
  exposeRoute: true,
  swagger: {
    info: 'Interops api',
    description: 'Building a blazing fast REST API with Node.js, Postgresql, Fastify ans Swagger',
    version: '1.0.0'
  },
  externalDocs: {
    url: 'https://swagger.io',
    description: 'Find more info here',
    host: '0.0.0.0',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};
module.exports = swaggerOptions;
