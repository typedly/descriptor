import { AugmentedDescriptorAttributes, AugmentedPropertyDescriptor } from '../lib';
import { User, userClass } from '../../test/user.test';

interface CustomAttributes<
  O,
  K extends keyof O,
  P extends PropertyKey,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
> extends AugmentedDescriptorAttributes<O, K, P, V> {
  'customAttribute'?: string;
}

// AugmentedPropertyDescriptor<UserClass, "name", "_name" | "_age">
const example: AugmentedPropertyDescriptor<
  typeof userClass, // object
  'name', // key
  '_name' | '_age', // private key
  string, // value
  CustomAttributes<typeof userClass, 'name', '_name' | '_age', string> // attributes
> = {
  configurable: true,
  enumerable: true,
  privateKey: '_name',
  enabled: true,
  active: { onGet: true, onSet: true },
  onGet(this: User, key, value, previousValue, target) {
    console.log(`Getting ${String(key)}: ${value}`);
    return value;
  },
  onSet(value, previousValue, key, instance) {
    console.log(`Setting ${String(key)}: ${value}`);
    return value;
  },
  set(value, descriptor) {
    if (!descriptor?.enabled) return; // Property is disabled; do nothing
    if (descriptor?.active && descriptor?.onSet) {
      descriptor.onSet.call(this, value, '', 'name', this);
    } else {
      // Assign only if privateKey is a string and matches a key of User
      if (typeof descriptor.privateKey === 'string' && descriptor.privateKey in this) {
        descriptor.privateKey === '_name' && (this[descriptor.privateKey] = value);
      }
    }
  },
  'customAttribute': 'This is a custom attribute',
};
