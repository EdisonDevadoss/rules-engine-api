module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('devices', [
    {
      id: 1,
      name: 'device01'
    },
    {
      id: 2,
      name: 'device02'
    },
    {
      id: 3,
      name: 'device03'
    },
    {
      id: 4,
      name: 'device04'
    },
    {
      id: 5,
      name: 'device05'
    },
    {
      id: 6,
      name: 'device06'
    },
    {
      id: 7,
      name: 'device07'
    },
    {
      id: 8,
      name: 'device08'
    },
    {
      id: 9,
      name: 'device09'
    },
    {
      id: 10,
      name: 'device10'
    }
  ]),

  down: (queryInterface, Sequelize) => queryInterface.sequelize.query('DELETE FROM devices')
};
