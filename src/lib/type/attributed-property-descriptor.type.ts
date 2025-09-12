// Interface.
import { KeyedAccessorPropertyDescriptor } from "../interface/keyed-accessor-property-descriptor.interface";
/**
 * @description The attributed property descriptor for attributes customization.
 * @template [O=any] The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {keyof O} [K=keyof O] The key type constrained by the object `O`.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The value type of the property.
 * @template {KeyedAccessorPropertyDescriptor<O, K, V, boolean, boolean>} [A=KeyedAccessorPropertyDescriptor<O, K, V, boolean, boolean>] The attributes for the descriptor.
 */
export type AttributedPropertyDescriptor<
  O = any,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends KeyedAccessorPropertyDescriptor<O, K, V, boolean, boolean> = KeyedAccessorPropertyDescriptor<O, K, V, boolean, boolean>,
> = A;
