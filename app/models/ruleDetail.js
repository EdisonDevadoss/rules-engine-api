module.exports = (sequelize, DataTypes) => {
  const RuleDetail = sequelize.define(
    'RuleDetail',
    {
      rule_id: {
        type: DataTypes.BIGINT,
        allowNull: false
        // references: {
        //   model: 'rules',
        //   key: 'id'
        // }
      },
      rule: {
        type: DataTypes.JSONB,
        allowNull: true
      }
    },
    {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return RuleDetail;
};
