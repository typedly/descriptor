import { ChainedDescriptorChain } from '../lib';
import { UserClass } from '../../test/user.test';

export const chain: ChainedDescriptorChain<typeof UserClass.prototype, 'age', PropertyKey> = {
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

