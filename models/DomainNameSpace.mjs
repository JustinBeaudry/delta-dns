import {Model} from 'metamon/index.mjs';
import {ResourceRecordCollection} from './ResourceRecord';

const type = ResourceRecordCollection.constructor.name;

export default class DomainNameSpace extends Model {
  constructor(data) {
    super(data, {
      schema: {
        label: 'string',
        resource_record: type
      },
      schemaOptions: {
        types: {
          [type]: Joi.object.type(ResourceRecordCollection, type)
        }
      }
    });
  }
}