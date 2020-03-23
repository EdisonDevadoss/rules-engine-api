const {
  filter, size, find, chain, map
} = require('lodash');
const ruleEngine = require('./ruleEngine');
const sqlRuleAction = require('./ruleAction');
const { convertOperator } = require('../app/config/constants');

function sqlRuleExe(rule, fact, ruleId) {
  const { condition, rules } = rule;
  const filterRuleConditions = chain(rules)
    .filter(r => r.type === 'condition')
    .map(r => r.condition)
    .value();
  console.log('filterRuleConditions is', filterRuleConditions);
  const updateRuleCondition = map(filterRuleConditions, filterRC => ({
    fact: filterRC.field,
    operator: convertOperator[filterRC.operator],
    value: filterRC.value
  }));
  console.log('updateRuleCondition is', updateRuleCondition);
  const operation = condition === 'and' ? 'all' : 'any';
  console.log('operation is', operation);

  const ruleObj = {
    conditions: { [operation]: updateRuleCondition },
    onSuccess() {
      console.log('action is called');
      const action = find(rules, r => r.type === 'action').condition;
      sqlRuleAction.mail(updateRuleCondition, ruleId, fact);
    },
    onFailure() {
      console.log('onFailure is called');
      sqlRuleAction.log(updateRuleCondition, ruleId, fact);
    },
    event: {
      type: 'message',
      params: {
        data: 'hello-world!'
      }
    }
  };
  ruleEngine(ruleObj, fact);
}
module.exports = sqlRuleExe;
