import { AttributedDescriptor } from '../lib';
import { User, userClass } from './user.test';

// WrappedDescriptor<User, "name", string>
const example: AttributedDescriptor<typeof userClass, 'name', string> = {
  configurable: true,
  enumerable: true,
  get(this: typeof userClass) {
    return this.name;
  },
  set(this: typeof userClass, value: string) {
    this.name = value;
  },
};
