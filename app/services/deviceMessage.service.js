const { map, size } = require('lodash');
const { DeviceMessage, RuleDetail, SqlRuleDetail } = require('../models');
const ruleExe = require('../../lib/ruleExe');
const sqlRuleExe = require('../../lib/sqlRuleExe');

function create(attributes) {
  return DeviceMessage.create(attributes).then(async (message) => {
    const ruleDetails = await RuleDetail.findAll();
    const sqlRuleDetails = await SqlRuleDetail.findAll();
    const fact = {
      device_name: message.device_name,
      temperature: Number(message.temperature),
      voltage: Number(message.voltage)
    };
    map(ruleDetails, (ruleDetail) => {
      const { edges } = ruleDetail.rule;
      const ruleDetailId = ruleDetail.id;
      if (size(edges) > 0) {
        const currentEdge = edges[0];
        ruleExe(edges, currentEdge.source_id, fact, ruleDetailId);
      }
    });
    const factSql = {
      deviceName: message.device_name,
      temperature: Number(message.temperature),
      voltage: Number(message.voltage)
    };
    map(sqlRuleDetails, (sqlRuleDetail) => {
      const { rule } = sqlRuleDetail;
      const sqlRuleDetailId = sqlRuleDetail.id;
      if (size(rule) > 0) {
        sqlRuleExe(rule, factSql, sqlRuleDetailId);
      }
    });
    return message;
  });
}

module.exports = { create };
