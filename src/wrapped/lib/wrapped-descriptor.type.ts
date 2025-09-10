// Type.
import { AttributedDescriptor } from '../../lib/type/attributed-descriptor.type';
// Interface.
import { WrappedDescriptorAttributes } from './wrapped-descriptor-attributes.interface'
/**
 * @description The customizable property descriptor that wraps another property descriptor.
 * @export
 * @template [O=any] 
 * @template {keyof O} [K=keyof O] 
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] 
 * @template {WrappedDescriptorAttributes<O, K, V>} [A=WrappedDescriptorAttributes<O, K, V>] 
 * @template {WrappedDescriptor<O, K, V, A, D> | PropertyDescriptor} [D=WrappedDescriptor<O, K, V, A, any>] 
 */
export type WrappedDescriptor<
  O = any,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends WrappedDescriptorAttributes<O, K, V> = WrappedDescriptorAttributes<O, K, V>,
  D extends WrappedDescriptor<O, K, V, A, any> | PropertyDescriptor = WrappedDescriptor<O, K, V, A, any>
> = AttributedDescriptor<O, K, V, Omit<A, 'set' | 'get'>> & {
  /**
   * @description The previous descriptor of the property for unwrapping.
   * @type {?D}
   */
  previous?: D;

  /**
   * @description The `set` to wrap the original `set()` method for accessing the `descriptor`.
   * @type {?(this: O, value: V, descriptor?: D) => void}
   */
  set?: (this: O, value: V, descriptor?: D) => void;
  
  /**
   * @description The `get` to wrap the original `get()` method for accessing the `descriptor`.
   * @type {?(this: O, descriptor?: D) => V}
   */
  get?: (this: O, descriptor?: D) => V;
};
