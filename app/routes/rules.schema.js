const createRuleSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['rule'],
      properties: {
        rule: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            name: { type: 'string' },
            description: { type: 'string' }
          }
        }
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          description: { type: 'string' },
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

const listRulesSchema = {
  schema: {
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' },
            description: { type: 'string' },
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

const getRuleByIdSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'number' }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          description: { type: 'string' },
          created_at: { type: 'string' },
          updated_at: { type: 'string' }
        }
      },
      404: {
        description: 'Rule not found',
        type: 'object',
        properties: {
          errors: { type: 'array', items: { type: 'string' } }
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

const updateRuleSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'number' }
      }
    },
    body: {
      type: 'object',
      required: ['rule'],
      properties: {
        rule: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' }
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
          name: { type: 'string' },
          description: { type: 'string' },
          created_at: { type: 'string' },
          updated_at: { type: 'string' }
        }
      },
      404: {
        description: 'Rule not found',
        type: 'object',
        properties: {
          errors: { type: 'array', items: { type: 'string' } }
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

const deleteRuleSchema = {
  schema: {
    querystring: {
      type: 'object',
      required: ['ids'],
      properties: {
        ids: { type: 'string' }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          message: {
            type: 'string'
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

module.exports = {
  createRuleSchema,
  listRulesSchema,
  getRuleByIdSchema,
  updateRuleSchema,
  deleteRuleSchema
};
