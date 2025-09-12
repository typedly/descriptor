// Type.
import { AttributedDescriptor } from '../../lib/type/attributed-descriptor.type';
// Interface.
import { ChainedDescriptorAttributes } from './chained-descriptor-attributes.interface'
/**
 * @description The customizable property descriptor that has another property descriptor.
 * @export
 * @template O
 * @template {keyof O} K The type of the key of the object.
 * @template {PropertyKey} P The type of the private key used for backing storage.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the value of the property.
 * @template {ChainedDescriptorAttributes<O, K, V>} [A=ChainedDescriptorAttributes<O, K, V>] 
 * @template {ChainedPropertyDescriptor<O, K, V, A, D> | PropertyDescriptor} [D=ChainedPropertyDescriptor<O, K, V, A, any>] 
 */
export type ChainedPropertyDescriptor<
  O,
  K extends keyof O,
  P extends PropertyKey,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends ChainedDescriptorAttributes<O, K, P, V> = ChainedDescriptorAttributes<O, K, P, V>,
  D extends ChainedPropertyDescriptor<O, K, P, V, A, any> | PropertyDescriptor = ChainedPropertyDescriptor<O, K, P, V, A, any>
> = AttributedDescriptor<O, K, V, Omit<A, 'set' | 'get'>> & {
  /**
   * @description The previous descriptor of the property for unchaining.
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
