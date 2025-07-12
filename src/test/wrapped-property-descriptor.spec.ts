import { WrappedPropertyDescriptor } from '../lib';

interface User {
  name: string;
}

const descriptor: WrappedPropertyDescriptor<User, 'name'> = {
  configurable: true,
  enumerable: true,
  privateKey: Symbol('name'),
  enabled: true,
  active: { onGet: true, onSet: true },
  onGet(key, value, prevValue, target) {
    console.log(`Getting ${String(key)}: ${value}`);
    return value;
  },
  onSet(key, value, prevValue, target) {
    console.log(`Setting ${String(key)}: ${value}`);
    return value;
  }
};
