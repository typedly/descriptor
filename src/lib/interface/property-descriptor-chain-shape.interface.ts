// Type.
import { ThisAccessorPropertyDescriptor } from '../type';
/**
 * @description The shape of the property descriptor chain to store related descriptors.
 * @export
 * @interface PropertyDescriptorChainShape
 * @template {object} [O=object] The type of the object that the property descriptors are associated with.
 * @template {keyof O} [K=keyof O] The type of the property name in the object.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the value accessed by the property.
 * @template {boolean} [A=boolean] The type of active property.
 * @template {boolean} [F=boolean] The type of enabled property.
 * @template {boolean} [C=boolean] The type of configurable property.
 * @template {boolean} [E=boolean] The type of enumerable property.
 * @template {ThisAccessorPropertyDescriptor<V, O, C, E>} [I=ThisAccessorPropertyDescriptor<V, O, C, E>] 
 */
export interface PropertyDescriptorChainShape<
  O extends object = object,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends boolean = boolean,
  F extends boolean = boolean,
  C extends boolean = boolean,
  E extends boolean = boolean,
  I extends ThisAccessorPropertyDescriptor<V, O, C, E> = ThisAccessorPropertyDescriptor<V, O, C, E>,
> {
  /**
   * @description Whether the chain is active.
   * @readonly
   * @type {A}
   */
  get active(): A;

  /**
   * @description Whether the chain is enabled.
   * @readonly
   * @type {F}
   */
  get enabled(): F;

  /**
   * @description The last index of descriptors in the chain.
   * @readonly
   * @type {number}
   */
  get lastIndex(): number;

  /**
   * @description The number of descriptors in the chain.
   * @readonly
   * @type {number}
   */
  get size(): number;

  /**
   * @description Adds a new property descriptor to the chain.
   * @param {I} descriptor 
   * @returns {this} 
   */
  add(descriptor: I): this;

  /**
   * @description Clears the chain of property descriptors.
   * @returns {this} 
   */
  clear(): this;

  /**
   * @description Deletes a property descriptor from the chain.
   * @param {number} index 
   * @returns {this} 
   */
  delete(index: number): this;

  /**
   * @description Returns an iterable of the property descriptors in the chain.
   * @returns {IterableIterator<[number, I]>} 
   */
  entries(): IterableIterator<[number, I]>;

  /**
   * @description Returns the first descriptor in the chain.
   * @returns {I} 
   */
  first(): I;

  /**
   * @description Returns the property descriptor at the specified index.
   * @param {number} index 
   * @returns {I} 
   */
  get(index: number): I;

  /**
   * @description Checks if a property descriptor exists at the specified index.
   * @param {number} index 
   * @returns {boolean} 
   */
  has(index: number): boolean;

  /**
   * @description Returns the last descriptor in the chain.
   * @returns {I} 
   */
  last(): I;

  /**
   * @description Loads the property descriptor to the chain from the object.
   * @returns {this} 
   */
  load(): this;
}
