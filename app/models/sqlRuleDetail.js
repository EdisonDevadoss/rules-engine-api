module.exports = (sequelize, DataTypes) => {
  const SqlRuleDetail = sequelize.define(
    'SqlRuleDetail',
    {
      rule_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'rules',
          key: 'id'
        }
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
  SqlRuleDetail.associate = (models) => {
    SqlRuleDetail.belongsTo(models.Rule, {
      foreignKey: 'rule_id',
      as: 'rules'
    });
  };
  return SqlRuleDetail;
};
