import {tables} from 'harperdb';

export class Product extends tables.Product {
  static loadAsInstance = false;

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

export class Review extends tables.Review {
  static loadAsInstance = false;

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
