// Interface.
import { PropertyDescriptorChainShape } from '../interface';
// Type.
import { ThisAccessorPropertyDescriptor } from './this-accessor-property-descriptor.type';
/**
 * @description The shape of a property descriptors chain in the object.
 * @export
 * @interface DescriptorsShape
 * @template {object} [O=object] 
 * @template {keyof O} [K=keyof O] 
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] 
 * @template {boolean} [A=boolean] 
 * @template {boolean} [F=boolean] 
 * @template {boolean} [C=boolean] 
 * @template {boolean} [E=boolean] 
 * @template {ThisAccessorPropertyDescriptor<V, O, C, E>} [D=ThisAccessorPropertyDescriptor<V, O, C, E>] 
 * @template {PropertyDescriptorChainShape<O, K, V, A, F, C, E, D>} [DC=PropertyDescriptorChainShape<O, K, V, A, F, C, E, D>] 
 */
export interface DescriptorsShape<
  O extends object = object,
  K extends keyof O = keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  A extends boolean = boolean,
  F extends boolean = boolean,
  C extends boolean = boolean,
  E extends boolean = boolean,
  D extends ThisAccessorPropertyDescriptor<V, O, C, E> = ThisAccessorPropertyDescriptor<V, O, C, E>,
  DC extends PropertyDescriptorChainShape<O, K, V, A, F, C, E, D> = PropertyDescriptorChainShape<O, K, V, A, F, C, E, D>,
> {
  /**
   * @description
   * @type {Readonly<DC>}
   */
  get chain(): Readonly<DC>;

  /**
   * @description Adds a new property descriptor to the chain.
   * @param {K} key The property key.
   * @param {D} value The property descriptor to add.
   * @returns {this} 
   */
  add(key: K, value: D): this;

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
   * @description
   * @returns {K[]} 
   */
  keys(): K[];

  /**
   * @description Sets the descriptor for the specified key at index.
   * @param {K} key The property key.
   * @param {number} index The index of the descriptor to set.
   * @param {D} value The property descriptor to set.
   * @returns {this} 
   */
  set(key: K, index: number, value: D): this;

  /**
   * @description Updates the descriptor at the specified index for the given key.
   * @param {K} key The property key.
   * @param {number} index The index of the descriptor to update.
   * @param {D} value The property descriptor to update the existing one.
   * @returns {this} 
   */
  update(key: K, index: number, value: D): this;
}
