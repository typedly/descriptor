
import { ThisAccessorPropertyDescriptor } from '../lib';
import { User } from './user.test';

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
