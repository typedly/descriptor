// Interface.
import { DescriptorAttributes } from "../interface/descriptor-attributes.interface";
/**
 * @description The attributed property descriptor for attributes customization.
 * @export
 * @template [O=any] The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {keyof O} [K=keyof O] The key type constrained by the object `O`.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The value type of the property.
 * @template {DescriptorAttributes<O, K, V, boolean, boolean>} [A=DescriptorAttributes<O, K, V, boolean, boolean>] The attributes for the descriptor.
 */
export type AttributedDescriptor<
  O = any,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends DescriptorAttributes<O, K, V, boolean, boolean> = DescriptorAttributes<O, K, V, boolean, boolean>,
> = A;
