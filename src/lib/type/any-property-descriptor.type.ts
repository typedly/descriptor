// Interface.
import { DataPropertyDescriptor } from '../interface/data-property-descriptor.interface';
// Type.
import { ThisAccessorPropertyDescriptor } from './this-accessor-property-descriptor.type';
/**
 * @description Represents an intersection of an accessor descriptor and a data descriptor. This type combines both getter/setter functions 
 * from `ThisAccessorDescriptor` and the `value` and `writable` attributes from `DataDescriptor`. 
 * This allows for properties that have both accessor behavior (via `get` and `set`) and data storage behavior (via `value` and `writable`).
 * @export
 * @template V The type of the value accessed by the property.
 * @template O The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {boolean} [C=boolean] The type of the configurable.
 * @template {boolean} [E=boolean] The type of the enumerable.
 * @template {boolean} [W=boolean] The type of the writable.
 */
export type AnyPropertyDescriptor<
  V,
  O,
  C extends boolean = boolean,
  E extends boolean = boolean,
  W extends boolean = boolean
> = ThisAccessorPropertyDescriptor<V, O, C, E> & DataPropertyDescriptor<V, C, E, W>;
