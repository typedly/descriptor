
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/descriptor - A TypeScript type definitions package for property descriptor."
  />
</a>

## typedly/descriptor

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A TypeScript type definitions package for **property descriptor**.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [Interfaces](#interfaces)
    - `AccessorPropertyDescriptor`
    - `CommonPropertyDescriptor`
    - `DataPropertyDescriptor`
    - `PropertyDescriptorChainShape`
    - `WrappedPropertyDescriptor`
  - [Types](#types)
    - `AnyPropertyDescriptor`
    - `ObjectPropertyDescriptors`
    - `StrictPropertyDescriptor`
    - `ThisAccessorPropertyDescriptor`
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

### 1. Install peer dependencies

```bash
npm install @typedly/callback --save-peer
```

### 2. Install the package

```bash
npm install @typedly/descriptor --save-peer
```

## Api

```typescript
import {
  // Interface.
  AccessorPropertyDescriptor,
  CommonPropertyDescriptor,
  DataPropertyDescriptor,
  PropertyDescriptorChainShape,
  WrappedPropertyDescriptor,
  // Type.
  AnyPropertyDescriptor,
  ObjectPropertyDescriptors,
  StrictPropertyDescriptor,
  ThisAccessorPropertyDescriptor
} from '@typedly/descriptor';
```

### Interfaces

#### `AccessorPropertyDescriptor`

Represents an accessor property descriptor with its unique optional `get()` and `set()` functions, used to define or modify properties with getter and setter functions of the `V` type.

```typescript
import { AccessorPropertyDescriptor } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/interface/accessor-property-descriptor.interface.ts)

#### `CommonPropertyDescriptor`

Common keys `configurable` of generic type variable `C` and `enumerable` of generic type variable `E` for accessor and data descriptor, picked from the default `PropertyDescriptor`.

```typescript
import { CommonPropertyDescriptor } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/interface/common-property-descriptor.interface.ts)

#### `DataPropertyDescriptor`

Represents a data property descriptor, which describes the attributes of a property that holds a specific `value`.

```typescript
import { DataPropertyDescriptor } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/interface/data-property-descriptor.interface.ts)

#### `PropertyDescriptorChainShape`

The shape of the property descriptor chain to store related descriptors.

```typescript
import { PropertyDescriptorChainShape } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/interface/property-descriptor-chain-shape.interface.ts)

#### `WrappedPropertyDescriptor`

The interface for wrapped property descriptor.

```typescript
import { WrappedPropertyDescriptor } from '@typedly/descriptor';

interface User {
  name: string;
}

const descriptor: WrappedPropertyDescriptor<User, 'name'> = {
  configurable: true,
  enumerable: true,
  privateKey: Symbol('name'),
  enabled: true,
  active: { onGet: true, onSet: true },
  onGet(key, value, previousValue, target) {
    console.log(`Getting ${String(key)}: ${value}`);
    return value;
  },
  onSet(value, previousValue, key, instance) {
    console.log(`Setting ${String(key)}: ${value}`);
    return value;
  }
};
```

with `set`

```typescript
set(value: any) {
  if (!this.enabled) return; // Property is disabled; do nothing
  if (this.active && this.onSet) {
    this.onSet(value, ...);
  } else {
    this[privateKey] = value; // Normal assignment if active is false
  }
}
```

**Explanation:**

- `privateKey`: Uses a symbol to store the property value privately.
- `enabled: true`: The property stores the value as normal.
- `active`: Controls whether the `onGet` and `onSet` callbacks are active.
- `onGet`/`onSet`: Log property access and assignment.

You can use this descriptor with a property wrapper system to intercept and customize property behavior on your objects. The simple wrap property class is available in the package [`@typescript-package/wrap-property`](https://github.com/typescript-package/wrap-property)

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/interface/wrapped-property-descriptor.interface.ts)

### Types

#### `AnyPropertyDescriptor`

Represents an intersection of an accessor descriptor and a data descriptor.

```typescript
import { AnyPropertyDescriptor } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/type/any-property-descriptor.type.ts)

#### `ObjectPropertyDescriptors`

Represents a mapping of an object's properties to their respective property descriptors.

```typescript
import { ObjectPropertyDescriptors } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/type/object-property-descriptors.type.ts)

#### `StrictPropertyDescriptor`

Represents a union of an accessor descriptor and a data descriptor.

```typescript
import { StrictPropertyDescriptor } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/type/strict-property-descriptor.type.ts)

#### `ThisAccessorPropertyDescriptor`

Represents the `AccessorPropertyDescriptor` interface as a type cause of ease of use `this` of an `O` type in the `get()` and `set()` methods.

```typescript
import { ThisAccessorPropertyDescriptor } from '@typedly/descriptor';
```

[Source](https://github.com/typedly/descriptor/blob/main/src/lib/type/this-accessor-property-descriptor.type.ts)

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)

or via Trust Wallet

- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/descriptor
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/descriptor
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/descriptor
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/descriptor
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/descriptor/issues
  [typedly-forks]: https://github.com/typedly/descriptor/network
  [typedly-license]: https://github.com/typedly/descriptor/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/descriptor/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fdescriptor.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fdescriptor

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
