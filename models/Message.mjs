import {Model, Enum} from 'metamon/index.mjs';

/**
 *
 * SEE RFC 1035 - https://tools.ietf.org/html/rfc1035
 *
 * @extends Model
 *
 */
export default class Message extends Model {
  /**
   *
   * @param {String} data
   */
  constructor(data) {
    let parsed = Message.fromString(data);
    super(parsed, {
      schema: {
        header: {
          identification: '',
          flags: {
            type: 'object',
            properties: {

            }
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
  toString() {

  }
  static fromString(string) {
    if (typeof string === 'string') {
      //
    } else {
      return string;
    }
  }
}