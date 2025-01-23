/**
 * @description Represents an accessor property descriptor with its unique optional `get()` and `set()` functions,
 * used to define or modify properties with getter and setter functions of the `Value` type.
 * For the accessor descriptor with also the object type, please use the type `ThisAccessorDescriptor<Value, Obj>`.
 * @export
 * @interface AccessorPropertyDescriptor
 * @template Value The type of the value accessed by the property.
 * @extends {Pick<PropertyDescriptor, 'configurable' | 'enumerable'>}
 */
export interface AccessorPropertyDescriptor<Value>
  extends Pick<PropertyDescriptor, 'configurable' | 'enumerable'> {

    /**
   * @description A function that returns the value of the property.
   * @type {?() => Value}
   */
  get?: () => Value;

  /**
   * @description A function that sets the value of the property. If omitted, assigning a value to the property will have no effect.
   * @param value The new value to set for the property.
   * @type {?(value: Value) => void}
   */
  set?: (value: Value) => void;
}
