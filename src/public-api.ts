/*
 * Public API Surface of descriptor
 */
export type {
  // Interface.
  AccessorPropertyDescriptor,
  CommonPropertyDescriptor,
  DataPropertyDescriptor,
  DescriptorAttributes,
  PropertyDescriptorChain,
  PropertyDescriptors,
  // Type.
  AnyPropertyDescriptor,
  AttributedDescriptor,
  ObjectPropertyDescriptors,
  StrictPropertyDescriptor,
  ThisAccessorPropertyDescriptor,
} from './lib';

// Wrapped.
export type {
  // Interface.
  WrappedDescriptorAttributes,
  WrappedPropertyDescriptor,
  // Type.
  WrappedDescriptor,
} from './wrapped';
