import { WrappedPropertyDescriptor } from '../lib';
import { User } from '../../test/user.test';

// const example: WrappedPropertyDescriptor<User, "name", string, boolean, boolean, boolean, boolean, WrappedPropertyDescriptor<User, "name", string, boolean, boolean, boolean, boolean, any>>
const example: WrappedPropertyDescriptor<User, 'name'> = {
  configurable: true,
  enumerable: true,
  privateKey: '_name',
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
      // Assign only if privateKey is a string and matches a key of User
      if (typeof descriptor.privateKey === 'string' && descriptor.privateKey in this) {
        (this as { [key: string]: any })[descriptor.privateKey] = value;
      }
    }
  }
};
