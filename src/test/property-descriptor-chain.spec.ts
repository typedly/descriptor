
import { PropertyDescriptorChain } from '../lib';
import { userClass } from './user.test';

// PropertyDescriptorChain<UserClass, "age", number, boolean, boolean, boolean, boolean, ThisAccessorPropertyDescriptor<number, UserClass, boolean, boolean>>
export const chain: PropertyDescriptorChain<typeof userClass, 'age'> = {
  active: true,
  current: {} as any,
  enabled: true,
  lastIndex: 0,
  size: 0,
  add(descriptor) {
    return this;
  },
  clear() {
    return this;
  },
  delete(index) {
    return this;
  },
  entries() {
    return this as any;
  },
  first() {
    return {} as any;
  },
  get(index) {
    return {} as any;
  },
  has(index) {
    return false;
  },
  last() {
    return {} as any;
  },
  load() {
    return this;
  },
  set(index, value) {
    return this;
  },
  values() {
    return this as any;
  },
  update(index, value) {
    return this;
  },
};
