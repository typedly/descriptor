// Interface.
import { DescriptorAttributes } from "../../lib/interface/descriptor-attributes.interface";
// Type.
import { GetterCallback, SetterCallback } from "@typedly/callback";
/**
 * @description The attributes for the `WrappedDescriptor` type.
 * @export
 * @interface WrappedDescriptorAttributes
 * @template O The type of the object that `this` refers to in the `get()` and `set()` methods.
 * @template {keyof O} K The key type constrained by the object `O`.
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] The value type of the property.
 * @extends {DescriptorAttributes<O, K, V, boolean, boolean>}
 */
export interface WrappedDescriptorAttributes<
  O,
  K extends keyof O,
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
> extends DescriptorAttributes<O, K, V, boolean, boolean> {
  //#region Properties
  /**
   * @description Whether the property descriptor `onGet` and `onSet` callbacks are active.
    * @type {?(A | {onGet?: boolean; onSet?: boolean})}
   */
  active?: A | {onGet?: boolean; onSet?: boolean};

  /**
   * @description Whether the property is enabled.
   * If `true`, the property stores the value in the private key.
   * If `false`, the property does not store the value in the private key.
   * @type {?boolean}
   */
  enabled?: boolean;

  /**
   * @description Whether the private property can be read.
   * @type {?boolean}
   */
  gettable?: boolean; 

  /**
   * @description The index of `number` type for chaining.
   * @type {?number}
   */
  index?: number;

  /**
   * @description The key used to access the property in the object.
   * @type {?PropertyKey}
   */
  privateKey?: PropertyKey;

  /**
   * @description Whether the private property can be written.
   * @type {?boolean}
   */
  settable?: boolean;
  //#endregion

  //#region Callbacks
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
  //#endregion
};
