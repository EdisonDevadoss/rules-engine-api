const {
  filter, size, find, chain, map
} = require('lodash');
const ruleEngine = require('./ruleEngine');
const sqlRuleAction = require('./ruleAction');
const { convertOperator } = require('../app/config/constants');

function singleSqlRule(rules, fact, ruleId, condition) {
  const filterRuleConditions = chain(rules)
    .filter(r => r.type === 'condition')
    .map(r => r.condition)
    .value();
  const updateRuleCondition = map(filterRuleConditions, filterRC => ({
    fact: filterRC.field,
    operator: convertOperator[filterRC.operator],
    value: filterRC.value
  }));
  const operation = condition === 'and' ? 'all' : 'any';

  const ruleObj = {
    conditions: { [operation]: updateRuleCondition },
    onSuccess() {
      const action = find(rules, r => r.type === 'action').condition;
      console.log('onSuccess called', action);
      sqlRuleAction.mail(updateRuleCondition, ruleId, fact);
    },
    onFailure() {
      console.log('failure called');
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

function sqlRuleExe(rule, fact, ruleId) {
  const { condition, rules, ruleType } = rule;
  console.log('ruleType is', ruleType);
  if (ruleType === 'multiple') {
    map(rules, (r) => {
      const condi = r.condition;
      console.log('condi is', condi);
      singleSqlRule(r.rules, fact, ruleId, condi);
    });
  }
  else {
    singleSqlRule(rules, fact, ruleId, condition);
  }
}
module.exports = sqlRuleExe;
