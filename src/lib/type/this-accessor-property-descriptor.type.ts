// Interface.
import { AccessorPropertyDescriptor } from '../interface/accessor-property-descriptor.interface';
/**
 * @description Represents the `AccessorPropertyDescriptor` interface as a type cause of ease of use `this` of an `Obj` type in the `get()` and `set()` methods.
 * @export
 * @template Value 
 * @template {object} Obj 
 */
export type ThisAccessorPropertyDescriptor<Value, Obj extends object> = AccessorPropertyDescriptor<Value> & ThisType<Obj>;
