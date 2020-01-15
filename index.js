const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = require('./application');
const db = require('./app/models');

const fastify = app.build();

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await fastify.listen(PORT, '0.0.0.0');
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
