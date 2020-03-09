const { filter, size, find } = require('lodash');
const ruleEngine = require('./ruleEngine');
const ruleAction = require('./ruleAction');

function ruleExe(edges, sid, fact) {
  const filterEdges = filter(edges, edge => edge.source_id === sid);
  if (size(filterEdges) > 0) {
    const filterEdge = filterEdges[0];
    const sourceCondition = filterEdge.source_condition;
    const edgeObj = {
      conditions: { all: [{ ...sourceCondition }] },
      onSuccess() {
        if (filterEdge.destination_type === 'action') {
          const dAction = filterEdge.destination_action;
          return ruleAction[dAction](sourceCondition);
        }
        const dID = filterEdge.destination_id;
        return ruleExe(edges, dID, fact);
      },
      onFailure() {
        if (filterEdge.destination_type === 'node' && filterEdge.label === 'NO') {
          const dID = filterEdge.destination_id;
          return ruleExe(edges, dID, fact);
        }
        if (filterEdge.destination_type === 'action' && filterEdge.label === 'NO') {
          const dAction = filterEdge.destination_action;
          return ruleAction[dAction](sourceCondition);
        }
        if (filterEdge.destination_type === 'action' && filterEdge.label === 'Yes') {
          const dAction = find(filterEdges, e => e.label === 'No').destination_action;
          return ruleAction[dAction](sourceCondition);
        }
        return null;
      },
      event: {
        type: 'message',
        params: {
          data: 'hello-world!'
        }
      }
    };
    ruleEngine(edgeObj, fact);
  }
}
module.exports = ruleExe;
