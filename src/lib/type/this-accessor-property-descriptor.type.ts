// Interface.
import { AccessorPropertyDescriptor } from '../interface/accessor-property-descriptor.interface';
/**
 * @description Represents the `AccessorPropertyDescriptor` interface as a type cause of ease of use `this` of an `O` type in the `get()` and `set()` methods.
 * @export
 * @template V The type of the value accessed by the property.
 * @template O The type of the object containing the property.
 */
export type ThisAccessorPropertyDescriptor<
  V,
  O
> = AccessorPropertyDescriptor<V> & ThisType<O>;
