const listNotificationsSchema = {
  schema: {
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            rule_detail_id: { type: 'number' },
            type: { type: 'string' },
            message: { type: 'string' },
            created_at: { type: 'string' },
            updated_at: { type: 'string' }
          }
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

module.exports = { listNotificationsSchema };
