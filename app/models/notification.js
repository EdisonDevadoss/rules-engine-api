module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    'Notification',
    {
      rule_detail_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      message: {
        type: DataTypes.TEXT
      },
      type: {
        type: DataTypes.STRING
      }
    },
    {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return Notification;
};
