// Interface.
import { ThisAccessorPropertyDescriptor } from '../type';
// Type.
import { GetterCallback, SetterCallback } from '@typedly/callback';
/**
 * @description The interface for wrapped property descriptor.
 * @export
 * @interface WrappedPropertyDescriptor
 * @template [O=any] The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {keyof O} [K=keyof O] The key type constrained by the object `O`.
 * @template {boolean} [A=boolean] The type of active property, which can be a boolean or an object with `onGet` and `onSet` properties.
 * @template {boolean} [ED=boolean] The type of enabled property.
 * @template {boolean} [C=boolean] The type of configurable property.
 * @template {boolean} [E=boolean] The type of enumerable property.
 * @extends {ThisAccessorPropertyDescriptor<O[K], O, C, E>}
 */
export interface WrappedPropertyDescriptor<
  // Object.
  O = any,
  // Key.
  K extends keyof O = keyof O,
  // Active.
  A extends boolean = boolean,
  // Enabled.
  ED extends boolean = boolean,
  // Configurable.
  C extends boolean = boolean,
  // Enumerable.
  E extends boolean = boolean,
> extends ThisAccessorPropertyDescriptor<O[K], O, C, E> {
  /**
   * @description Whether the property descriptor `onGet` and `onSet` callbacks are active.
    * @type {?(A | {onGet?: boolean; onSet?: boolean})}
   */
  active?: A | {onGet?: boolean; onSet?: boolean};

  /**
   * @description Whether the property is enabled.
   * If `true`, the property stores the value in the private key.
   * If `false`, the property does not store the value in the private key.
   * @type {?ED}
   */
  enabled?: ED;

  /**
   * @description The previous descriptor of the property for unwrapping.
   * @type {?(WrappedPropertyDescriptor<O, K, A,C, E> | PropertyDescriptor)}
   */
  previousDescriptor?: WrappedPropertyDescriptor<O, K, A, C, E> | PropertyDescriptor;

  /**
   * @description The key used to access the property in the object.
   * @type {?PropertyKey}
   */
  privateKey?: PropertyKey;

  /**
   * @description The callback function that is called when the property is accessed.
   * @type {?GetterCallback<O, K>}
   */
  onGet?: GetterCallback<O, K>;

  /**
   * @description The callback function that is called when the property is set.
   * @type {?SetterCallback<O, K>}
   */
  onSet?: SetterCallback<O, K>;
}
