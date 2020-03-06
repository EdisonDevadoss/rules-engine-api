const createDeviceMessageSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['device'],
      properties: {
        device: {
          type: 'object',
          required: ['device_id', 'device_name', 'temperature', 'voltage'],
          properties: {
            device_id: { type: 'number' },
            device_name: { type: 'string' },
            temperature: { type: 'string' },
            voltage: { type: 'string' }
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
          device_id: { type: 'string' },
          device_name: { type: 'string' },
          temperature: { type: 'number' },
          voltage: { type: 'number' },
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

module.exports = { createDeviceMessageSchema };
