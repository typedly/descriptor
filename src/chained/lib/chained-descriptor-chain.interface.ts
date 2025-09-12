// Type.
import { ChainedPropertyDescriptor } from './chained-property-descriptor.type';
// Interface.
import { ChainedDescriptorAttributes } from './chained-descriptor-attributes.interface';
/**
 * @description
 * @export
 * @interface ChainedDescriptorChain
 * @template O 
 * @template {keyof O} K 
 * @template {PropertyKey} P 
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] 
 * @template {ChainedDescriptorAttributes<O, K, P, V>} [A=ChainedDescriptorAttributes<O, K, P, V>] 
 * @template {ChainedPropertyDescriptor<O, K, P, V, A, any> | PropertyDescriptor} [D=ChainedPropertyDescriptor<O, K, P, V, A, any>] 
 */
export interface ChainedDescriptorChain<
  // Object.
  O,
  // Key.
  K extends keyof O,
  // Private key.
  P extends PropertyKey,
  // Value.
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  // Wrapped descriptor attributes.
  A extends ChainedDescriptorAttributes<O, K, P, V> = ChainedDescriptorAttributes<O, K, P, V>,
  // Wrapped descriptor.
  D extends ChainedPropertyDescriptor<O, K, P, V, A, any> | PropertyDescriptor = ChainedPropertyDescriptor<O, K, P, V, A, any>
> {
  /**
   * @description Whether the chain is active.
   * @type {boolean}
   */
  active: boolean;

  /**
   * @description Gets the current descriptor in the chain.
   * @returns {D} The current descriptor or undefined if not found.
   */
  current: D;

  /**
   * @description Whether the chain is enabled.
   * @type {boolean}
   */
  enabled: boolean;

  /**
   * @description The last index of descriptors in the chain.
   * @type {number}
   */
  lastIndex: number;

  /**
   * @description The number of descriptors in the chain.
   * @type {number}
   */
  size: number;

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
