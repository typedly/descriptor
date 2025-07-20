// Type.
import { GetterCallback, SetterCallback } from '@typedly/callback';
import { ThisAccessorPropertyDescriptor } from '../type';
/**
 * @description The interface for wrapped property descriptor.
 * @export
 * @interface WrappedPropertyDescriptor
 * @template [O=any] The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {keyof O} [K=keyof O] The key type constrained by the object `O`.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the value accessed by the property, which is either the type of the property in the object or `any` if the key does not exist.
 * @template {boolean} [A=boolean] The type of active property, which can be a boolean or an object with `onGet` and `onSet` properties.
 * @template {boolean} [ED=boolean] The type of enabled property.
 * @template {boolean} [C=boolean] The type of configurable property.
 * @template {boolean} [E=boolean] The type of enumerable property.
 * @extends {Omit<ThisAccessorPropertyDescriptor<V, O, C, E>, 'set' | 'get'>}
 */
export interface WrappedPropertyDescriptor<
  // Object.
  O = any,
  // Key.
  K extends keyof O = keyof O,
  // Value.
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  // Active.
  A extends boolean = boolean,
  // Enabled.
  ED extends boolean = boolean,
  // Configurable.
  C extends boolean = boolean,
  // Enumerable.
  E extends boolean = boolean,
> extends Omit<ThisAccessorPropertyDescriptor<V, O, C, E>, 'set' | 'get'> {
  /**
   * @description The `set` to wrap the original `set()` method for accessing the `descriptor`.
   * @type {?(this: O, value: V, descriptor?: WrappedPropertyDescriptor<O, K, V, A, ED, C, E>) => void}
   */
  set?: (this: O, value: V, descriptor?: WrappedPropertyDescriptor<O, K, V, A, ED, C, E>) => void;
  
  /**
   * @description The `get` to wrap the original `get()` method for accessing the `descriptor`.
   * @type {?(this: O, descriptor?: WrappedPropertyDescriptor<O, K, V, A, ED, C, E>) => V}
   */
  get?: (this: O, descriptor?: WrappedPropertyDescriptor<O, K, V, A, ED, C, E>) => V;

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
   * @type {?(WrappedPropertyDescriptor<O, K, V, A, ED, C, E> | PropertyDescriptor)}
   */
  previousDescriptor?: WrappedPropertyDescriptor<O, K, V, A, ED, C, E> | PropertyDescriptor;

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
