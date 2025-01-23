// Interface.
import { DataDescriptor } from '../interface/data-descriptor.interface';
// Type.
import { ThisAccessorDescriptor } from './this-accessor-descriptor.type';
/**
 * @description
 * @export
 * @template Value 
 * @template {object} [Obj=object] 
 */
export type AnyDescriptor<Value, Obj extends object = object> = ThisAccessorDescriptor<Value, Obj> & DataDescriptor<Value>;
