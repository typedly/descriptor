// Type.
import { AttributedPropertyDescriptor } from '../../lib/type/attributed-property-descriptor.type';
// Interface.
import { AugmentedDescriptorAttributes } from './augmented-descriptor-attributes.interface'
/**
 * @description The customizable property descriptor.
 * @export
 * @template O
 * @template {keyof O} K The type of the key of the object.
 * @template {PropertyKey} P The type of the private key used for backing storage.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the value of the property.
 * @template {AugmentedDescriptorAttributes<O, K, V>} [A=AugmentedDescriptorAttributes<O, K, V>] The type of the attributes for the descriptor.
 * @template {AugmentedPropertyDescriptor<O, K, V, A, D> | PropertyDescriptor} [D=AugmentedPropertyDescriptor<O, K, V, A, any>] The type of the previous/next descriptor.
 */
export type AugmentedPropertyDescriptor<
  O,
  K extends keyof O,
  P extends PropertyKey,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends AugmentedDescriptorAttributes<O, K, P, V> = AugmentedDescriptorAttributes<O, K, P, V>,
  D extends AugmentedPropertyDescriptor<O, K, P, V, A, any> | PropertyDescriptor = AugmentedPropertyDescriptor<O, K, P, V, A, any>
> = AttributedPropertyDescriptor<O, K, V, Omit<A, 'set' | 'get'>> & {
  /**
   * @description The previous descriptor of the property for unchaining.
   * @type {?D}
   */
  previous?: D;

  /**
   * @description The `set` to overwrite the original `set()` method for accessing the `descriptor`.
   * @type {?(this: O & {[K in P]: V}, value: V, descriptor?: D) => void}
   */
  set?: (this: O & {[K in P]: V}, value: V, descriptor?: D) => void;

  /**
   * @description The `get` to overwrite the original `get()` method for accessing the `descriptor`.
   * @type {?(this: O & {[K in P]: V}, descriptor?: D) => V}
   */
  get?: (this: O & {[K in P]: V}, descriptor?: D) => V;
};
