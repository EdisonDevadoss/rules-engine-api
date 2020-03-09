const { map, size } = require('lodash');
const { DeviceMessage, RuleDetail } = require('../models');
const ruleExe = require('../../lib/ruleExe');

function create(attributes) {
  return DeviceMessage.create(attributes).then(async (message) => {
    const ruleDetails = await RuleDetail.findAll();
    map(ruleDetails, (ruleDetail) => {
      const { edges } = ruleDetail.rule;
      if (size(edges) > 0) {
        const currentEdge = edges[0];
        const fact = {
          device_name: message.device_name,
          temperature: message.temperature,
          voltage: message.voltage
        };
        ruleExe(edges, currentEdge.source_id, fact);
      }
    });
    return message;
  });
}

module.exports = { create };
