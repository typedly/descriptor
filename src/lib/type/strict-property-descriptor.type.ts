// Interface.
import { DataPropertyDescriptor } from "../interface";
// Type.
import { ThisAccessorPropertyDescriptor } from "./this-accessor-property-descriptor.type";
/**
 * @description Represents a union of an accessor descriptor and a data descriptor.
 * @export
 * @template V The type of the value accessed by the property.
 * @template O The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {boolean} [C=boolean] The type of configurable.
 * @template {boolean} [E=boolean] The type of enumerable.
 * @template {boolean} [W=boolean] The type of writable.
 */
export type StrictPropertyDescriptor<
  V,
  O,
  C extends boolean = boolean,
  E extends boolean = boolean,
  W extends boolean = boolean
> = (ThisAccessorPropertyDescriptor<V, O, C, E> & {
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
}) | (DataPropertyDescriptor<V, C, E, W> & {
  
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
