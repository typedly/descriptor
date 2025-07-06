import { StrictPropertyDescriptor } from "../lib";

interface Person {
  name: string;
  age: number;
}

// Apply the descriptor to an object
const obj: Person = {
  name: "Jane",
  age: 30,
};

const example: StrictPropertyDescriptor<string, Person, true, true> = {
  configurable: true,
  enumerable: true,
  get() {
    return "example";
  },
  set(value: string) {
    console.log(`Setting value: ${value}`);
  },
};
