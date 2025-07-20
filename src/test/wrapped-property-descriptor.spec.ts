import { WrappedPropertyDescriptor } from '../lib';

interface User {
  name: string;
}

const example: WrappedPropertyDescriptor<User, 'name'> = {
  configurable: true,
  enumerable: true,
  privateKey: Symbol('name'),
  enabled: true,
  active: { onGet: true, onSet: true },
  onGet(this: User, key, value, previousValue, target) {
    console.log(`Getting ${String(key)}: ${value}`);
    return value;
  },
  onSet(this: User, value, previousValue, key, instance) {
    console.log(`Setting ${String(key)}: ${value}`);
    return value;
  },
  set(this: User, value, descriptor) {
    if (!descriptor?.enabled) return; // Property is disabled; do nothing
    if (descriptor?.active && descriptor?.onSet) {
      descriptor.onSet.call(this, value, '', 'name', this);
    } else {
      descriptor.privateKey && (this[descriptor.privateKey as keyof User] = value);
    }
  }
};
