// Type.
import { ThisAccessorPropertyDescriptor } from '../type';
/**
 * @description The shape of the property descriptor chain to store related descriptors for specific property.
 * @export
 * @interface PropertyDescriptorChain
 * @template [O=any] The type of the object that the property descriptors are associated with.
 * @template {keyof O} [K=keyof O] The type of the property name in the object.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the value accessed by the property.
 * @template {boolean} [A=boolean] The type of active property.
 * @template {boolean} [N=boolean] The type of enabled property.
 * @template {boolean} [C=boolean] The type of configurable property.
 * @template {boolean} [E=boolean] The type of enumerable property.
 * @template {ThisAccessorPropertyDescriptor<V, O, C, E>} [D=ThisAccessorPropertyDescriptor<V, O, C, E>] 
 */
export interface PropertyDescriptorChain<
  // Object.
  O = any,
  // Key.
  K extends keyof O = keyof O,
  // Value.
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  // Active.
  A extends boolean = boolean,
  // Enabled.
  N extends boolean = boolean,
  // Configurable.
  C extends boolean = boolean,
  // Enumerable.
  E extends boolean = boolean,
  // Accessor descriptor.
  D extends ThisAccessorPropertyDescriptor<V, O, C, E> = ThisAccessorPropertyDescriptor<V, O, C, E>
> {
  /**
   * @description Whether the chain is active.
   * @readonly
   * @type {A}
   */
  get active(): A;

  /**
   * @description Gets the current descriptor in the chain.
   * @readonly
   * @returns {D} The current descriptor or undefined if not found.
   */
  get current(): D;

  /**
   * @description Whether the chain is enabled.
   * @readonly
   * @type {N}
   */
  get enabled(): N;

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
   * @param {D} descriptor The descriptor to add.
   * @returns {this} Returns the current instance for chaining.
   */
  add(descriptor: D): this;

  /**
   * @description Clears the chain of property descriptors.
   * @returns {this} Returns the current instance for chaining.
   */
  clear(): this;

  /**
   * @description Deletes a property descriptor from the chain.
   * @param {number} index The index of the descriptor to delete.
   * @returns {this} Returns the current instance for chaining.
   */
  delete(index: number): this;

  /**
   * @description Returns an iterable of the property descriptors in the chain.
   * @returns {IterableIterator<[number, D]>} 
   */
  entries(): IterableIterator<[number, D]>;

  /**
   * @description Returns the first descriptor in the chain.
   * @returns {D} The first descriptor in the chain.
   */
  first(): D;

  /**
   * @description Returns the property descriptor at the specified index.
   * @param {number} index The index of the descriptor to retrieve.
   * @returns {D} The property descriptor at the specified index.
   */
  get(index: number): D;

  /**
   * @description Checks if a property descriptor exists at the specified index.
   * @param {number} index The index of the descriptor to check.
   * @returns {boolean} The result of the check.
   */
  has(index: number): boolean;

  /**
   * @description Returns the last descriptor in the chain.
   * @returns {D} The last descriptor in the chain.
   */
  last(): D;

  /**
   * @description Loads the property descriptor to the chain from the object.
   * @returns {this} Returns the current instance for chaining.
   */
  load(): this;

  /**
   * @description Sets the property descriptor at the specified index.
   * @param {number} index The index at which to set the descriptor.
   * @param {D} value The property descriptor to set.
   * @returns {this} Returns the current instance for chaining.
   */
  set(index: number, value: D): this;

  /**
   * @description Returns an iterable of the property descriptors in the chain.
   * @returns {IterableIterator<D>} 
   */
  values(): IterableIterator<D>;

  /**
   * @description Updates the property descriptor at the specified index.
   * @param {number} index The index at which to update the descriptor.
   * @param {D} value The new descriptor value.
   * @returns {this} Returns the current instance for chaining.
   */
  update(index: number, value: D): this;
}
