// Interface.
import { PropertyDescriptorChain } from './property-descriptor-chain.interface';
// Type.
import { ThisAccessorPropertyDescriptor } from '../type/this-accessor-property-descriptor.type';
/**
 * @description The shape of a property descriptors chain in the object.
 * @export
 * @interface PropertyDescriptors
 * @template {object} [O=object] The object type that the descriptors are associated with.
 * @template {keyof O} [K=keyof O] The type of the property key.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The type of the property value.
 * @template {boolean} [A=boolean] The type of active property.
 * @template {boolean} [ED=boolean] The type of enabled property.
 * @template {boolean} [C=boolean] The type of configurable property.
 * @template {boolean} [E=boolean] The type of enumerable property.
 * @template {ThisAccessorPropertyDescriptor<V, O, C, E>} [D=ThisAccessorPropertyDescriptor<V, O, C, E>] 
 * @template {PropertyDescriptorChain<O, K, V, A, ED, C, E, D>} [DC=PropertyDescriptorChain<O, K, V, A, ED, C, E, D>] 
 */
export interface PropertyDescriptors<
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
  // Descriptor.
  D extends ThisAccessorPropertyDescriptor<V, O, C, E> = ThisAccessorPropertyDescriptor<V, O, C, E>,
  // Descriptor Chain.
  DC extends PropertyDescriptorChain<O, K, V, A, ED, C, E, D> = PropertyDescriptorChain<O, K, V, A, ED, C, E, D>,
> {
  /**
   * @description Adds a new property descriptor to the chain.
   * @param {K} key The property key.
   * @param {D} value The property descriptor to add.
   * @returns {this} 
   */
  add(key: K, value: D): this;

  /**
   * @description Gets the descriptor chain for the specified key.
   * @type {Readonly<DC>}
   */
  chain(key: K): Readonly<DC>;

  /**
   * @description Clears the descriptors for the specified key.
   * @param {K} key The property key.
   */
  clear(key: K): void;

  /**
   * @description Gets the current descriptor for the specified key.
   * @param {K} key The property key.
   * @returns {(D | undefined)} The current descriptor or undefined if not found.
   */
  current(key: K): D | undefined;
  
  /**
   * @description Deletes the descriptor at the specified index for the given key.
   * @param {K} key The property key.
   * @param {number} index The index of the descriptor to delete.
   * @returns {this} Returns the current instance for chaining.
   */
  delete(key: K, index: number): this;

  /**
   * @description Gets the descriptor for the specified key at index.
   * @param {K} key The property key.
   * @param {number} index The index of the descriptor to retrieve.
   * @returns {(D | undefined)} The requested descriptor or undefined if not found.
   */
  get(key: K, index: number): D | undefined;

  /**
   * @description Checks whether a descriptor exists for the specified key and index.
   * @param {K} key The property key.
   * @param {?number} [index] The index of the descriptor to check.
   * @returns {boolean} Whether the descriptor exists.
   */
  has(key: K, index?: number): boolean;

  /**
   * @description Returns an array of keys for which descriptors exist.
   * @returns {K[]} The returned value is an array of keys.
   */
  keys(): K[];

  /**
   * @description Sets the descriptor for the specified key at index.
   * @param {K} key The property key.
   * @param {number} index The index of the descriptor to set.
   * @param {D} value The property descriptor to set.
   * @returns {this} Returns the current instance for chaining.
   */
  set(key: K, index: number, value: D): this;

  /**
   * @description Updates the descriptor at the specified index for the given key.
   * @param {K} key The property key.
   * @param {number} index The index of the descriptor to update.
   * @param {D} value The property descriptor to update the existing one.
   * @returns {this} Returns the current instance for chaining.
   */
  update(key: K, index: number, value: D): this;
}
