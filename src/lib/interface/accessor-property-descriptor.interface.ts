// Interface.
import { CommonPropertyDescriptor } from "./common-property-descriptor.interface";
/**
 * @description Represents an accessor property descriptor with its unique optional `get()` and `set()` functions,
 * used to define or modify properties with getter and setter functions of the `V` type.
 * For the accessor descriptor with also the object type, please use the type `ThisAccessorDescriptor<V, O>`.
 * @export
 * @interface AccessorPropertyDescriptor
 * @template V The type of the value accessed by the property.
 * @template {boolean} [C=boolean]  The type of the configurable.
 * @template {boolean} [E=boolean]  The type of the enumerable.
 * @extends {CommonPropertyDescriptor<C, E>}
 */
export interface AccessorPropertyDescriptor<
  V,
  C extends boolean = boolean,
  E extends boolean = boolean,
> extends CommonPropertyDescriptor<C, E> {
  /**
   * @description A function that returns the value of the property.
   * @type {?() => V}
   */
  get?: () => V;

  /**
   * @description A function that sets the value of the property. If omitted, assigning a value to the property will have no effect.
   * @param value The new value to set for the property.
   * @type {?(value: V) => void}
   */
  set?: (value: V) => void;
}

