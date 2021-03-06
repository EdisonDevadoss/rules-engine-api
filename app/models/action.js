module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define(
    'Action',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return Action;
};
