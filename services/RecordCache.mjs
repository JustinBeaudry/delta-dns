import {Model, Enum} from 'metamon/index.mjs';

export default class Message extends Model {
  constructor(data) {
    super(data, {
      schema: {
        header: {
          identification: '',
          flags: {
            type: 'array',
            enum: []
          },
          questionCount: 'number',
          answerCount: 'number'
        },
        question: 'string',
        answer: 'string',
        authority: 'string',
        additional: 'string'
      }
    });
  }
}