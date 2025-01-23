// Interface.
import { AccessorDescriptor } from '../interface/accessor-descriptor.interface';
/**
 * @description `AccessorDescriptor` interface as a type cause of ease of use `this` of an `Obj` type in the `get()` and `set()` methods.
 * @export
 * @template Value 
 * @template {object} Obj 
 */
export type ThisAccessorDescriptor<Value, Obj extends object> = AccessorDescriptor<Value> & ThisType<Obj>;
