# Dependency Injection Module

> A lightweight, extensible dependency injection container for JavaScript.

## Classes


### All

No description available.

#### Properties


#### Methods


* `get(container: Container): ` - 
  * `container: Container` - No description available


* `static of(key: PrimitiveOrDependencyCtor): All` - 
  * `key: PrimitiveOrDependencyCtor` - No description available



### Container

No description available.

#### Properties

* `parent: Container` - No description available.
* `root: Container` - No description available.
* `static instance: Container` - No description available.

#### Methods


* `_createInvocationHandler(fn: ): InvocationHandler` - 
  * `fn: ` - No description available


* `_get(key: any): any` - 
  * `key: any` - No description available


* `autoRegister(key: string, fn: DependencyCtorOrFunctor): Resolver` - 
  * `key: string` - No description available
  * `fn: DependencyCtorOrFunctor` - No description available


* `autoRegisterAll(fns: ): void` - 
  * `fns: ` - No description available


* `createChild(): Container` - 


* `get(key: PrimitiveOrDependencyCtor): ImplOrAny` - 
  * `key: PrimitiveOrDependencyCtor` - No description available


* `getAll(key: PrimitiveOrDependencyCtor): ` - 
  * `key: PrimitiveOrDependencyCtor` - No description available


* `getResolver(key: PrimitiveOrDependencyCtorOrFunctor): any` - 
  * `key: PrimitiveOrDependencyCtorOrFunctor` - No description available


* `hasResolver(key: PrimitiveOrDependencyCtor, checkParent?: boolean): boolean` - 
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `checkParent?: boolean` - No description available


* `invoke(fn: DependencyCtorOrFunctor, dynamicDependencies?: ): ImplOrAny` - 
  * `fn: DependencyCtorOrFunctor` - No description available
  * `dynamicDependencies?: ` - No description available


* `makeGlobal(): Container` - 


* `registerAlias(originalKey: PrimitiveOrDependencyCtor, aliasKey: PrimitiveOrDependencyCtor): Resolver` - 
  * `originalKey: PrimitiveOrDependencyCtor` - No description available
  * `aliasKey: PrimitiveOrDependencyCtor` - No description available


* `registerHandler(key: PrimitiveOrDependencyCtor, handler: ): Resolver` - 
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `handler: ` - No description available


* `registerInstance(key: PrimitiveOrDependencyCtor, instance?: TImpl): Resolver` - 
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `instance?: TImpl` - No description available


* `registerResolver(key: PrimitiveOrDependencyCtor, resolver: Resolver): Resolver` - 
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `resolver: Resolver` - No description available


* `registerSingleton(key: any, fn?: DependencyCtorOrFunctor): Resolver` - 
  * `key: any` - No description available
  * `fn?: DependencyCtorOrFunctor` - No description available


* `registerTransient(key: string, fn: DependencyCtorOrFunctor): Resolver` - 
  * `key: string` - No description available
  * `fn: DependencyCtorOrFunctor` - No description available


* `setHandlerCreatedCallback(onHandlerCreated: ): void` - 
  * `onHandlerCreated: ` - No description available


* `unregister(key: any): void` - 
  * `key: any` - No description available



### Factory

No description available.

#### Properties


#### Methods


* `get(container: Container): DependencyFunctor` - 
  * `container: Container` - No description available


* `static of(key: DependencyCtor): Factory` - 
  * `key: DependencyCtor` - No description available



### FactoryInvoker

No description available.

#### Properties

* `static instance: FactoryInvoker` - No description available.

#### Methods


* `invoke(container: Container, fn: DependencyCtorOrFunctor, dependencies: TArgs): ImplOrAny` - 
  * `container: Container` - No description available
  * `fn: DependencyCtorOrFunctor` - No description available
  * `dependencies: TArgs` - No description available


* `invokeWithDynamicDependencies(container: Container, fn: DependencyCtorOrFunctor, staticDependencies: , dynamicDependencies: ): ImplOrAny` - 
  * `container: Container` - No description available
  * `fn: DependencyCtorOrFunctor` - No description available
  * `staticDependencies: ` - No description available
  * `dynamicDependencies: ` - No description available



### InvocationHandler

No description available.

#### Properties

* `dependencies: TArgs` - No description available.
* `fn: DependencyCtorOrFunctor` - No description available.
* `invoker: Invoker` - No description available.

#### Methods


* `invoke(container: Container, dynamicDependencies?: ): any` - 
  * `container: Container` - No description available
  * `dynamicDependencies?: ` - No description available



### Lazy

No description available.

#### Properties


#### Methods


* `get(container: Container): ` - 
  * `container: Container` - No description available


* `static of(key: PrimitiveOrDependencyCtor): Lazy` - 
  * `key: PrimitiveOrDependencyCtor` - No description available



### NewInstance

No description available.

#### Properties


#### Methods


* `as(key: PrimitiveOrDependencyCtorOrFunctor): this` - 
  * `key: PrimitiveOrDependencyCtorOrFunctor` - No description available


* `get(container: Container): ImplOrAny` - 
  * `container: Container` - No description available


* `static of(key: PrimitiveOrDependencyCtorOrFunctor, dynamicDependencies: ): NewInstance` - 
  * `key: PrimitiveOrDependencyCtorOrFunctor` - No description available
  * `dynamicDependencies: ` - No description available



### Optional

No description available.

#### Properties


#### Methods


* `get(container: Container): any` - 
  * `container: Container` - No description available


* `static of(key: PrimitiveOrDependencyCtor, checkParent?: boolean): Optional` - 
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `checkParent?: boolean` - No description available



### Parent

No description available.

#### Properties


#### Methods


* `get(container: Container): any` - 
  * `container: Container` - No description available


* `static of(key: PrimitiveOrDependencyCtor): Parent` - 
  * `key: PrimitiveOrDependencyCtor` - No description available



### SingletonRegistration

No description available.

#### Properties


#### Methods


* `registerResolver(container: Container, key: PrimitiveOrDependencyCtor, fn: DependencyCtorOrFunctor): Resolver` - 
  * `container: Container` - No description available
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `fn: DependencyCtorOrFunctor` - No description available



### StrategyResolver

No description available.

#### Properties

* `state: any` - No description available.
* `strategy: ` - No description available.

#### Methods


* `get(container: Container, key: PrimitiveOrDependencyCtor): TImpl` - 
  * `container: Container` - No description available
  * `key: PrimitiveOrDependencyCtor` - No description available



### TransientRegistration

No description available.

#### Properties


#### Methods


* `registerResolver(container: Container, key: PrimitiveOrDependencyCtor, fn: DependencyCtorOrFunctor): Resolver` - 
  * `container: Container` - No description available
  * `key: PrimitiveOrDependencyCtor` - No description available
  * `fn: DependencyCtorOrFunctor` - No description available



## Interfaces


### ContainerConfiguration

No description available.

#### Properties

* `handlers: Map` - No description available.
* `onHandlerCreated: ` - No description available.

#### Methods



### Invoker

No description available.

#### Properties


#### Methods


* `invoke(container: Container, fn: DependencyCtorOrFunctor, dependencies: TArgs): ImplOrAny` - 
  * `container: Container` - No description available.
  * `fn: DependencyCtorOrFunctor` - No description available.
  * `dependencies: TArgs` - No description available.


* `invokeWithDynamicDependencies(container: Container, fn: DependencyCtorOrFunctor, staticDependencies: , dynamicDependencies: ): ImplOrAny` - 
  * `container: Container` - No description available.
  * `fn: DependencyCtorOrFunctor` - No description available.
  * `staticDependencies: ` - No description available.
  * `dynamicDependencies: ` - No description available.



### Registration

No description available.

#### Properties


#### Methods


* `registerResolver(container: Container, key: PrimitiveOrDependencyCtor, fn: DependencyCtorOrFunctor): Resolver` - 
  * `container: Container` - No description available.
  * `key: PrimitiveOrDependencyCtor` - No description available.
  * `fn: DependencyCtorOrFunctor` - No description available.



### Resolver

No description available.

#### Properties


#### Methods


* `get(container: Container, key: any): any` - 
  * `container: Container` - No description available.
  * `key: any` - No description available.



### StrategyState

No description available.

#### Properties

* `__computed: any` - No description available.

#### Methods



## Constants

* `_emptyParameters: ` - No description available.
* `resolver: ` - No description available.

## Functions


* `all(keyValue: any): ` - 
  * `keyValue: any` - No description available.


* `autoinject(potentialTarget?: DependencyCtor): any` - 
  * `potentialTarget?: DependencyCtor` - No description available.


* `factory(keyValue: any): ` - 
  * `keyValue: any` - No description available.


* `getDecoratorDependencies(target: ): ` - 
  * `target: ` - No description available.


* `inject(rest: ): any` - 
  * `rest: ` - No description available.


* `invokeAsFactory(potentialTarget?: any): any` - 
  * `potentialTarget?: any` - No description available.


* `invoker(value: Invoker): any` - 
  * `value: Invoker` - No description available.


* `lazy(keyValue: any): ` - 
  * `keyValue: any` - No description available.


* `newInstance(asKeyOrTarget?: , dynamicDependencies: ): ` - 
  * `asKeyOrTarget?: ` - No description available.
  * `dynamicDependencies: ` - No description available.


* `optional(checkParentOrTarget?: boolean): ` - 
  * `checkParentOrTarget?: boolean` - No description available.


* `parent(target: , _key: any, index: number): void` - 
  * `target: ` - No description available.
  * `_key: any` - No description available.
  * `index: number` - No description available.


* `registration(value: Registration): any` - 
  * `value: Registration` - No description available.


* `singleton(registerInChild?: boolean): any` - 
  * `registerInChild?: boolean` - No description available.


* `transient(key?: PrimitiveOrDependencyCtor): any` - 
  * `key?: PrimitiveOrDependencyCtor` - No description available.

