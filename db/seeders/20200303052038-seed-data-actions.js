module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('actions', [
    {
      id: 1,
      name: 'mail'
    },
    {
      id: 2,
      name: 'log'
    },
    {
      id: 3,
      name: 'notification'
    }
  ]),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.query('DELETE FROM actions')
};
