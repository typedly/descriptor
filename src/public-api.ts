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

// Chained.
export type {
  // Interface.
  ChainedDescriptorAttributes,
  // Type.
  ChainedPropertyDescriptor
} from './chained';
