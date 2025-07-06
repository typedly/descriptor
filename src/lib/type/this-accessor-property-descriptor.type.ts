// Interface.
import { AccessorPropertyDescriptor } from '../interface/accessor-property-descriptor.interface';
/**
 * @description Represents the `AccessorPropertyDescriptor` interface as a type cause of ease of use `this` of an `O` type in the `get()` and `set()` methods.
 * @export
 * @template V The type of the value accessed by the property.
 * @template O The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {boolean} [C=boolean] The type of configurable.
 * @template {boolean} [E=boolean] The type of enumerable.
 */
export type ThisAccessorPropertyDescriptor<
  V,
  O,
  C extends boolean = boolean,
  E extends boolean = boolean
> = AccessorPropertyDescriptor<V, C, E> & ThisType<O>;
