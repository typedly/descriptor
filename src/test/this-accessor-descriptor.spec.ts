
import { ThisAccessorPropertyDescriptor } from '../lib';

interface User {
  name: string;
}

const descriptor: ThisAccessorPropertyDescriptor<string, User> = {
  configurable: true,
  enumerable: true,
  set(value) {
    this.name = value;
  },
  get() {
    return this.name;
  }
};
