// Interface.
import { DataPropertyDescriptor } from '../interface/data-property-descriptor.interface';
// Type.
import { ThisAccessorPropertyDescriptor } from './this-accessor-property-descriptor.type';
/**
 * @description Represents a union of an accessor descriptor and a data descriptor. This type combines both getter/setter functions 
 * from `ThisAccessorDescriptor` and the `value` and `writable` attributes from `DataDescriptor`. 
 * This allows for properties that have both accessor behavior (via `get` and `set`) and data storage behavior (via `value` and `writable`).
 * @export
 * @template V 
 * @template O
 */
export type AnyPropertyDescriptor<
  V,
  O
> = ThisAccessorPropertyDescriptor<V, O> | DataPropertyDescriptor<V>;
