import {tables} from 'harperdb';

export class product extends tables.Product {
  static loadAsInstance = false;
  tableName

  public allowRead(user, target) {
    return true;
  }

  public allowCreate(user, data, context) {
    return true;
  }

  public allowUpdate(user, data, context) {
    return true;
  }

  public allowDelete(user, target) {
    return true;
  }
}
