// Interface.
import { DataDescriptor } from '../interface/data-descriptor.interface';
// Type.
import { ThisAccessorDescriptor } from './this-accessor-descriptor.type';
/**
 * @description Represents a union of an accessor descriptor and a data descriptor. This type combines both getter/setter functions 
 * from `ThisAccessorDescriptor` and the `value` and `writable` attributes from `DataDescriptor`. 
 * This allows for properties that have both accessor behavior (via `get` and `set`) and data storage behavior (via `value` and `writable`).
 * @export
 * @template Value 
 * @template {object} [Obj=object] 
 */
export type AnyDescriptor<Value, Obj extends object = object> = ThisAccessorDescriptor<Value, Obj> & DataDescriptor<Value>;
