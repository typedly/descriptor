// Interface.
import { CommonPropertyDescriptor } from "./common-property-descriptor.interface";
/**
 * @description Represents a data property descriptor, which describes the attributes of a property that holds a specific `value`.
 * @export
 * @interface DataPropertyDescriptor
 * @template V The type of the value held by the property.
 * @template {Boolean} [C=boolean] The type of the configurable.
 * @template {boolean} [E=boolean] The type of the enumerable.
 * @template {boolean} [W=boolean] The type of the writable.
 * @extends {CommonPropertyDescriptor<C, E>}
 */
export interface DataPropertyDescriptor<
  V,
  C extends boolean = boolean,
  E extends boolean = boolean,
  W extends boolean = boolean
> extends CommonPropertyDescriptor<C, E> {
  /**
   * @description Indicates if the value of the property can be changed. Defaults to `boolean`.
   * @type {?W}
   */
  writable?: W;

  /**
   * @description The value of generic type variable `V` associated with the property.
   * @type {?V}
   */
  value?: V;
}
