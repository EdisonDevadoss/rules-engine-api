module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('device_messages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    device_id: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    device_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    temperature: {
      type: Sequelize.STRING,
      allowNull: false
    },
    voltage: {
      type: Sequelize.STRING,
      allowNull: false
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('device_messages')
};
