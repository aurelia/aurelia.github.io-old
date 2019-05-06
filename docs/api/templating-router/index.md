# Templating-Router Module

> An implementation of the RouteLoader interface for use with the router module. Also contains a custom element that allows the templating engine to display the current route.

## Classes


### RouteHref

Helper custom attribute to help associate an element with a route by name

#### Properties

* `attribute: string` - Target property on a custom element if this attribute is put on a custom element
OR an attribute if this attribute is put on a normal element
* `element: Element` - Element this attribute is associated with
* `params: Record` - Parameters of this attribute to generate URL.
* `route: string` - Name of the route this attribute refers to. This name should exist in the current router hierarchy
* `router: Router` - Current router of this attribute

#### Methods


* `attributeChanged(value: any, previous: any): Promise` - 
  * `value: any` - No description available
  * `previous: any` - No description available


* `bind(): void` - 


* `processChange(): Promise` - 


* `unbind(): void` - 



### RouterView

Implementation of Aurelia Router ViewPort. Responsible for loading route, composing and swapping routes views

#### Properties

* `container: Container` - Container at this &lt;router-view/&gt; level
* `element: Element` - Element associated with this &lt;router-view/&gt; custom element
* `layoutModel: any` - Layout model used to activate layout view model, if specified with &#x60;layoutViewModel&#x60;
* `layoutView: any` - Layout view used for this router-view layout, if no layout-viewmodel specified
* `layoutViewModel: any` - Layout view model used as binding context for this router-view layout
Actual type would be {string | Constructable | object}
* `router: Router` - Current router associated with this &lt;router-view/&gt;
* `swapOrder: string` - Swapping order when going to a new route. By default, supports 3 value: before, after, with
- before &#x3D; new in -&gt; old out
- after &#x3D; old out -&gt; new in
- with &#x3D; new in + old out

#### Methods


* `bind(bindingContext: any, overrideContext: OverrideContext): void` - 
  * `bindingContext: any` - No description available
  * `overrideContext: OverrideContext` - No description available


* `created(owningView: View): void` - 
  * `owningView: View` - No description available


* `process($viewPortInstruction: any, waitToSwap?: boolean): Promise` - Implementation of &#x60;aurelia-router&#x60; ViewPort interface, responsible for templating related part in routing Pipeline
  * `$viewPortInstruction: any` - No description available
  * `waitToSwap?: boolean` - No description available


* `swap($viewPortInstruction: any): ` - 
  * `$viewPortInstruction: any` - No description available



### TemplatingRouteLoader

Default implementation of &#x60;RouteLoader&#x60; used for loading component based on a route config

#### Properties


#### Methods


* `loadRoute(router: Router, config: RouteConfig, _navInstruction: NavigationInstruction): Promise` - Load corresponding component of a route config of a navigation instruction
  * `router: Router` - No description available
  * `config: RouteConfig` - No description available
  * `_navInstruction: NavigationInstruction` - No description available



## Interfaces


### IFrameworkConfiguration

No description available.

#### Properties

* `container: Container` - No description available.

#### Methods


* `globalResources(args: ): this` - 
  * `args: ` - No description available.


* `singleton(args: ): this` - 
  * `args: ` - No description available.



## Constants


## Functions


* `configure(config: IFrameworkConfiguration): void` - 
  * `config: IFrameworkConfiguration` - No description available.

