/*
  TODO:  Check the following code.
  export type ObjectPropertyDescriptors<Obj> = {
    [P in keyof Obj]: TypedPropertyDescriptor<Obj[P]>;
  } & {
    [K in Exclude<string, keyof Obj>]?: PropertyDescriptor;
  };
*/

/**
 * @description Represents a mapping of an object's properties to their respective property descriptors.
 * @export
 * @template Obj The type of the object whose property descriptors are being represented.
 */
export type ObjectPropertyDescriptors<Obj> = {
  [P in keyof Obj]: TypedPropertyDescriptor<Obj[P]>;
} & { [key: string]: PropertyDescriptor };
