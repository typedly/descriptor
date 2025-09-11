// Type.
import { AttributedDescriptor } from '../../lib/type/attributed-descriptor.type';
// Interface.
import { WrappedDescriptorAttributes } from './wrapped-descriptor-attributes.interface'
/**
 * @description The customizable property descriptor that wraps another property descriptor.
 * @export
 * @template O
 * @template {keyof O} K The type of the key of the object.
 * @template {PropertyKey} P The type of the private key used for backing storage.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the value of the property.
 * @template {WrappedDescriptorAttributes<O, K, V>} [A=WrappedDescriptorAttributes<O, K, V>] 
 * @template {WrappedDescriptor<O, K, V, A, D> | PropertyDescriptor} [D=WrappedDescriptor<O, K, V, A, any>] 
 */
export type WrappedDescriptor<
  O,
  K extends keyof O,
  P extends PropertyKey,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends WrappedDescriptorAttributes<O, K, P, V> = WrappedDescriptorAttributes<O, K, P, V>,
  D extends WrappedDescriptor<O, K, P, V, A, any> | PropertyDescriptor = WrappedDescriptor<O, K, P, V, A, any>
> = AttributedDescriptor<O, K, V, Omit<A, 'set' | 'get'>> & {
  /**
   * @description The previous descriptor of the property for unwrapping.
   * @type {?D}
   */
  previous?: D;

  /**
   * @description The `set` to wrap the original `set()` method for accessing the `descriptor`.
   * @type {?(this: O & {[K in P]: V}, value: V, descriptor?: D) => void}
   */
  set?: (this: O & {[K in P]: V}, value: V, descriptor?: D) => void;

  /**
   * @description The `get` to wrap the original `get()` method for accessing the `descriptor`.
   * @type {?(this: O & {[K in P]: V}, descriptor?: D) => V}
   */
  get?: (this: O & {[K in P]: V}, descriptor?: D) => V;
};
