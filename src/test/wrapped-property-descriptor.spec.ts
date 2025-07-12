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
  onGet(key, value, previousValue, target) {
    console.log(`Getting ${String(key)}: ${value}`);
    return value;
  },
  onSet(value, previousValue, key, instance) {
    console.log(`Setting ${String(key)}: ${value}`);
    return value;
  }
};
