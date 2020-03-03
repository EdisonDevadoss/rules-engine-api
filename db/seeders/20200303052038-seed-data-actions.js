module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query(
    `COPY actions(id, name) FROM '${__dirname}/../seeds/action.csv' DELIMITER ',' CSV;`
  ),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.query('DELETE FROM actions')
};
