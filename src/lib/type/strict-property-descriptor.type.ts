// Interface.
import { DataPropertyDescriptor } from "../interface";
// Type.
import { ThisAccessorPropertyDescriptor } from "./this-accessor-property-descriptor.type";
/**
 * @description Represents a union of an accessor descriptor and a data descriptor.
 * @export
 * @template V 
 * @template O
 */
export type StrictPropertyDescriptor<
  V,
  O
> = (ThisAccessorPropertyDescriptor<V, O> & {
  /**
   * @description Set the `value` to never, as it is not applicable for accessor descriptors.
   * @type {?never}
   */
  value?: never;

  /**
   * @description Set the `writable` to never, as it is not applicable for accessor descriptors.
   * @type {?never}
   */
  writable?: never;
})  | (DataPropertyDescriptor<V> & {
  
  /**
   * @description Sets the `get` to `never`, as they are not applicable for data descriptors.
   * @type {never}
   */
  get?: never;

  /**
   * @description Sets the `set` to `never`, as it is not applicable for data descriptors.
   * @type {never}
   */
  set?: never;
});
