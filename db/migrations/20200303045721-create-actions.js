module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('actions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('actions')
};
