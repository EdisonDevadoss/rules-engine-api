const { filter, size, find } = require('lodash');
const ruleEngine = require('./ruleEngine');
const ruleAction = require('./ruleAction');

function ruleExe(edges, sid, fact, ruleDetailId) {
  let filterEdges = filter(edges, edge => edge.source_id === sid);
  if (size(filterEdges) > 0) {
    let filterEdge = filterEdges[0];
    let sourceCondition = [{ ...filterEdge.source_condition }];
    let operation = 'all';
    if (filterEdge.label === 'Or') {
      filterEdges = filter(edges, edge => edge.source_id === filterEdge.destination_id);
      filterEdge = { ...filterEdges[0] };
      console.log('inside if is', filterEdge);
      sourceCondition = [...sourceCondition, { ...filterEdge.source_condition }];
      operation = 'any';
    }
    // console.log('sourceCondition is', sourceCondition);
    // console.log('operation is', operation);

    const edgeObj = {
      conditions: { [operation]: sourceCondition },
      onSuccess() {
        console.log('succes called', filterEdge);
        if (filterEdge.destination_type === 'action') {
          const dAction = filterEdge.destination_action;
          return ruleAction[dAction](sourceCondition, ruleDetailId, fact);
        }
        const dID = filterEdge.destination_id;
        return ruleExe(edges, dID, fact, ruleDetailId);
      },
      onFailure() {
        if (filterEdge.destination_type === 'node' && filterEdge.label === 'NO') {
          const dID = filterEdge.destination_id;
          return ruleExe(edges, dID, fact, ruleDetailId);
        }
        if (filterEdge.destination_type === 'action' && filterEdge.label === 'NO') {
          const dAction = filterEdge.destination_action;
          return ruleAction[dAction](sourceCondition, ruleDetailId, fact);
        }
        if (filterEdge.destination_type === 'action' && filterEdge.label === 'Yes') {
          const dAction = find(filterEdges, e => e.label === 'No').destination_action;
          return ruleAction[dAction](sourceCondition, ruleDetailId, fact);
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
