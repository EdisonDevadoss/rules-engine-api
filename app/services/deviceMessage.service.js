const { map, size } = require('lodash');
const { DeviceMessage, RuleDetail } = require('../models');
const ruleExe = require('../../lib/ruleExe');

function create(attributes) {
  return DeviceMessage.create(attributes).then(async (message) => {
    const ruleDetails = await RuleDetail.findAll();
    map(ruleDetails, (ruleDetail) => {
      const { edges } = ruleDetail.rule;
      const ruleDetailId = ruleDetail.id;
      if (size(edges) > 0) {
        const currentEdge = edges[0];
        const fact = {
          device_name: message.device_name,
          temperature: Number(message.temperature),
          voltage: Number(message.voltage)
        };
        ruleExe(edges, currentEdge.source_id, fact, ruleDetailId);
      }
    });
    return message;
  });
}

module.exports = { create };
