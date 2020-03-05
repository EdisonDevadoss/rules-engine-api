module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('rule_details', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    rule_id: {
      type: Sequelize.BIGINT,
      allowNull: false
      // references: {
      //   model: 'rules',
      //   key: 'id'
      // }
    },
    rule: {
      type: Sequelize.JSONB,
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('rule_details')
};
