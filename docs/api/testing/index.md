# aurelia-testing Module

> A collection of helpers for testing Aurelia apps and components.

## Classes


### CompileSpy

Attribute to be placed on any element to have it emit the View Compiler&#x27;s
TargetInstruction into the debug console, giving you insight into all the
parsed bindings, behaviors and event handers for the targeted element.

#### Properties


#### Methods



### ComponentTester

No description available.

#### Properties

* `_prepareLifecycle: any` - No description available.
* `attached: ` - No description available.
* `bind: ` - No description available.
* `bindingContext: any` - No description available.
* `detached: ` - No description available.
* `element: Element` - No description available.
* `host: any` - No description available.
* `html: any` - No description available.
* `resources: any` - No description available.
* `rootView: any` - No description available.
* `unbind: ` - No description available.
* `viewModel: T` - No description available.

#### Methods


* `bootstrap(configure: ): void` - 
  * `configure: ` - No description available


* `boundTo(bindingContext: __type): this` - 
  * `bindingContext: __type` - No description available


* `configure(aurelia: Aurelia): FrameworkConfiguration` - 
  * `aurelia: Aurelia` - No description available


* `create(bootstrap: ): Promise` - 
  * `bootstrap: ` - No description available


* `dispose(): Element` - 


* `inView(html: string): this` - 
  * `html: string` - No description available


* `manuallyHandleLifecycle(): this` - 


* `waitForElement(selector: string, options?: ): Promise` - 
  * `selector: string` - No description available
  * `options?: ` - No description available


* `waitForElements(selector: string, options?: ): Promise` - 
  * `selector: string` - No description available
  * `options?: ` - No description available


* `withResources(resources: ): this` - 
  * `resources: ` - No description available



### StageComponent

No description available.

#### Properties


#### Methods


* `static withResources(resources?: ): ComponentTester` - 
  * `resources?: ` - No description available



### ViewSpy

Attribute to be placed on any HTML element in a view to emit the View instance
to the debug console, giving you insight into the live View instance, including
all child views, live bindings, behaviors and more.

#### Properties

* `_log: any` - No description available.
* `logger: any` - No description available.
* `value: any` - No description available.
* `view: any` - No description available.
* `static $resource: IStaticResourceConfig` - No description available.

#### Methods


* `attached(): void` - Invoked when the target element is attached to the DOM.


* `bind(bindingContext: __type): void` - Invoked when the target view is bound.
  * `bindingContext: __type` - The target view&#x27;s binding context.



* `created(view: any): void` - Invoked when the target view is created.
  * `view: any` - The target view.



* `detached(): void` - Invoked when the target element is detached from the DOM.


* `unbind(): void` - Invoked when the target element is unbound.



## Interfaces


## Constants


## Functions


* `configure(config: FrameworkConfiguration): void` - 
  * `config: FrameworkConfiguration` - No description available.


* `waitFor(getter: , options?: ): Promise` - Generic function to wait for something to happen. Uses polling
  * `getter: ` - No description available.
  * `options?: ` - No description available.


* `waitForDocumentElement(selector: string, options?: ): Promise` - 
  * `selector: string` - No description available.
  * `options?: ` - No description available.


* `waitForDocumentElements(selector: string, options?: ): Promise` - 
  * `selector: string` - No description available.
  * `options?: ` - No description available.

