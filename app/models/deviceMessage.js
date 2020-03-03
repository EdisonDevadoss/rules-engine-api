module.exports = (sequelize, DataTypes) => {
  const DeviceMessage = sequelize.define(
    'DeviceMessage',
    {
      device_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      device_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      temperature: {
        type: DataTypes.STRING,
        allowNull: true
      },
      voltage: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return DeviceMessage;
};
