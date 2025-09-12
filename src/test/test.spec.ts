
// export interface TestAttributes<
//   O = any,
//   K extends keyof O = keyof O,
//   V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
// > extends WrappedDescriptorAttributes<O, K, V> {
//   tttt?: boolean
// }


// export type TestDescriptor<
//   O = any,
//   K extends keyof O = keyof O,
//   V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
//   A extends TestAttributes<O, K, V> = TestAttributes<O, K, V>,
//   D extends WrappedDescriptor<O, K, V, A, any> | PropertyDescriptor = WrappedDescriptor<O, K, V, A, any>
// > = WrappedDescriptor<O, K, V, A, D>;

// class TestPerson {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new TestPerson('John', 30);

// const f = <
//   O = any,
//   K extends keyof O = keyof O,
//   V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
//   A extends TestAttributes<O, K> = TestAttributes<O, K>,
//   D extends WrappedDescriptor<O, K, V, A, D> | PropertyDescriptor = WrappedDescriptor<O, K, V, A, any>
// >(
//   object: O, key: K, obj: TestDescriptor<O, K, V, A, D>): TestDescriptor<O, K, V, A, D> => {
//   return obj;
// }

// const a = f(person, 'age', { 'configurable': true, enabled: true, enumerable: true, gettable: true, settable: true, index: 1 });

