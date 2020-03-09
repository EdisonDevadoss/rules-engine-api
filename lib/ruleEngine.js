const { Engine } = require('json-rules-engine');

function ruleOperation(inputRules, facts) {
  const engine = new Engine();
  engine.addRule(inputRules);
  engine.run(facts);
}

module.exports = ruleOperation;
