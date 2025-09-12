// Type.
import { ThisAccessorPropertyDescriptor } from "../type/this-accessor-property-descriptor.type";
/**
 * @description The accessor property descriptor of the specified object `O` and key `K`.
 * @export
 * @interface KeyedAccessorPropertyDescriptor
 * @template [O=any] The type of the object.
 * @template {keyof O} [K=keyof O] The key of the object.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The value of the property.
 * @template {boolean} [C=boolean] Whether the property is configurable.
 * @template {boolean} [E=boolean] Whether the property is enumerable.
 * @extends {ThisAccessorPropertyDescriptor<V, O, C, E>}
 */
export interface KeyedAccessorPropertyDescriptor<
  O = any,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  C extends boolean = boolean,
  E extends boolean = boolean
> extends ThisAccessorPropertyDescriptor<V, O, C, E> {
  /**
   * @description The concrete key used to access the property in the object.
   * @type {?K}
   */
  key?: K;
};
