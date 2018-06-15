import {Model, Collection} from 'metamon/index.mjs';

/**
 * @extends Model
 * @property {String} name - fully qualified domain name
 * @property {Number} type - record type, indicates format of data ane gives a hint as to it's intended use
 * @property {Number} class - IN (for Internet) for common DNS records
 * @property {Number} ttl
 * @property {Number} rdlength
 * @property {String} rdata
 */
class ResourceRecord extends Model {
  constructor(data) {
    super(data, {
      schema: {
        name: 'string',
        type: 'number',
        class: 'number',
        ttl: 'number',
        rdlength: 'number',
        rdata: 'string'
      }
    });
  }
  toString() {

  }
  static fromString(string) {

  }
}

export class ResourceRecordCollection extends Collection {
  constructor(data) {
    super(data, ResourceRecord, 'label');
  }
}

export default ResourceRecord;