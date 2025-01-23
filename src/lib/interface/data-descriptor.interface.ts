/**
 * @description Represents a data property descriptor, which describes the attributes of a property that holds a specific `value`.
 * @export
 * @interface DataDescriptor
 * @template Value The type of the value held by the property.
 * @extends {Pick<PropertyDescriptor, 'configurable' | 'enumerable'>}
 */
export interface DataDescriptor<Value>
  extends Pick<PropertyDescriptor, 'configurable' | 'enumerable'> {  
  /**
   * @description Indicates if the value of the property can be changed. Defaults to `false`.
   * @type {?boolean}
   */
  writable?: boolean;

  /**
   * @description The value of generic type variable `Value` associated with the property.
   * @type {?Value}
   */
  value?: Value;
}
