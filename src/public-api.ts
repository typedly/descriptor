/*
 * Public API Surface of descriptor
 */
export type {
  // Interface.
  AccessorPropertyDescriptor,
  CommonPropertyDescriptor,
  DataPropertyDescriptor,
  KeyedAccessorPropertyDescriptor,
  PropertyDescriptorChain,
  PropertyDescriptors,
  WrappedPropertyDescriptor,
  // Type.
  AnyPropertyDescriptor,
  AttributedPropertyDescriptor,
  ObjectPropertyDescriptors,
  StrictPropertyDescriptor,
  ThisAccessorPropertyDescriptor,
} from './lib';

// Augmented.
export type {
  // Interface.
  AugmentedDescriptorAttributes,
  // Type.
  AugmentedPropertyDescriptor
} from './augmented';
