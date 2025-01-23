/**
 * @description
 * @export
 * @interface DataDescriptor
 * @template Value 
 * @extends {Pick<PropertyDescriptor, 'configurable' | 'enumerable'>}
 */
export interface DataDescriptor<Value>
  extends Pick<PropertyDescriptor, 'configurable' | 'enumerable'> {
  writable?: boolean;
  value?: Value;
}
