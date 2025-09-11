import { WrappedDescriptorAttributes } from '../lib';
import { User } from '../../test/user.test';

const example: WrappedDescriptorAttributes<User, 'name', '_name'> = {
  configurable: true,
  enumerable: true,
  set(this: User, value: string): void {
    (this as any)._name = value;
  },
  get(): string {
    return (this as any)._name;
  },
  privateKey: '_name',
}
