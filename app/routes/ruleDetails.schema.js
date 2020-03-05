const createRuleDetailSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['ruleDetail'],
      properties: {
        ruleDetail: {
          type: 'object',
          required: ['rule_id', 'rule'],
          properties: {
            rule_id: { type: 'number' }
            // rule: { type: 'any' }
          }
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          rule_id: { type: 'string' },
          // rule: { type: 'string' },
          created_at: { type: 'string' },
          updated_at: { type: 'string' }
        }
      },
      500: {
        description: 'Something went wrong',
        type: 'object',
        properties: {
          errors: { type: 'array', items: { type: 'string' } }
        }
      }
    }
  }
};

module.exports = { createRuleDetailSchema };
