/**
 * @description Common keys `configurable` and `enumerable` of a `boolean` type for accessor and data descriptor,
 * picked from the default `PropertyDescriptor`.
 * @export
 * @interface CommonPropertyDescriptor
 * @template {boolean} [C=boolean] The type of the configurable.
 * @template {boolean} [E=boolean] The type of the enumerable.
 * @extends {Pick<PropertyDescriptor, 'configurable' | 'enumerable'>}
 */
export interface CommonPropertyDescriptor<
  // Configurable.
  C extends boolean = boolean,
  // Enumerable.
  E extends boolean = boolean
> extends Pick<PropertyDescriptor, 'configurable' | 'enumerable'> {
  configurable?: C;
  enumerable?: E;
} 
