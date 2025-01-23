import { ObjectPropertyDescriptors } from "../lib";

interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Example using ObjectPropertyDescriptors
const descriptors: ObjectPropertyDescriptors<Person> = {
  // Explicit properties
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "John",
  },
  age: {
    configurable: false,
    enumerable: true,
    writable: true,
    value: 30,
  },
  greet: {
    configurable: true,
    enumerable: false,
    value: () => console.log("Hello!"),
  },

  // Dynamic properties (cannot overlap with `name`, `age`, or `greet`)
  additionalDynamicKey: {
    configurable: true,
    enumerable: false,
    value: "dynamic value",
  },
};

// Apply the descriptors to an object
const obj: Person = {
  name: "Jane",
  age: 25,
  greet() {
    console.log("Hi there!");
  },
};
Object.defineProperties(obj, descriptors);

console.log(obj.name); // "John"
console.log(obj.age); // 30
obj.greet(); // "Hello!"
console.log((obj as any).additionalDynamicKey); // "dynamic value"
