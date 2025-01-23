// Interface.
import { DataPropertyDescriptor } from '../interface/data-property-descriptor.interface';
// Type.
import { ThisAccessorPropertyDescriptor } from './this-accessor-property-descriptor.type';
/**
 * @description Represents a union of an accessor descriptor and a data descriptor. This type combines both getter/setter functions 
 * from `ThisAccessorDescriptor` and the `value` and `writable` attributes from `DataDescriptor`. 
 * This allows for properties that have both accessor behavior (via `get` and `set`) and data storage behavior (via `value` and `writable`).
 * @export
 * @template Value 
 * @template {object} [Obj=object] 
 */
export type AnyPropertyDescriptor<Value, Obj extends object = object> = ThisAccessorPropertyDescriptor<Value, Obj> & DataPropertyDescriptor<Value>;
