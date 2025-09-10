// Type.
import { ThisAccessorPropertyDescriptor } from "../type/this-accessor-property-descriptor.type";
/**
 * @description The attributes for the attributed property descriptor.
 * @export
 * @interface DescriptorAttributes
 * @template [O=any] The type of the object.
 * @template {keyof O} [K=keyof O] The key of the object.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The value of the object.
 * @template {boolean} [C=boolean] Whether the property is configurable.
 * @template {boolean} [E=boolean] Whether the property is enumerable.
 * @extends {ThisAccessorPropertyDescriptor<V, O, C, E>}
 */
export interface DescriptorAttributes<
  O = any,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  C extends boolean = boolean,
  E extends boolean = boolean
> extends ThisAccessorPropertyDescriptor<V, O, C, E> {};
