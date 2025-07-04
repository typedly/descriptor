import { StrictPropertyDescriptor } from "../lib/type";

// EXAMPLE 1: Data property descriptor
const dataDesc: StrictPropertyDescriptor<number, object> = {
  configurable: true,
  enumerable: false,
  value: 100,
  writable: true,
  // get: () => 5,    // ERROR: TypeScript will complain if you uncomment this!
};

// EXAMPLE 2: Accessor property descriptor
const accessorDesc: StrictPropertyDescriptor<string, object> = {
  configurable: false,
  enumerable: true,
  get: () => "Hello",
  set: (v: string) => { /* ... */ },
  // value: "abc",    // ERROR: TypeScript will complain if you uncomment this!
};


export class TestClass {
  constructor({ configurable, enumerable, get, set, value, writable }: StrictPropertyDescriptor<string, object>) {
    // Implementation here
  }
}
