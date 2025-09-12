import { AttributedPropertyDescriptor } from '../lib';
import { User, userClass } from './user.test';

// AttributedPropertyDescriptor<User, "name", string>
const attributedDescriptor: AttributedPropertyDescriptor<typeof userClass, 'name', string> = {
  configurable: true,
  enumerable: true,
  get(this: typeof userClass) {
    return this.name;
  },
  set(this: typeof userClass, value: string) {
    this.name = value;
  },
};
