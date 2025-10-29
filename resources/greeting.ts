import {Resource} from 'harperdb';

export class Greeting extends Resource {
  static loadAsInstance = false;

  async get() {
    return { greeting: 'Hello, world!' };
  }
}
