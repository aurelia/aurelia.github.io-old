# Router Module

> A powerful client-side router.

## Classes


### ActivateNextStep

A pipeline step responsible for finding and activating method &#x60;activate&#x60; on a view model of a route

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Next): Promise` - 
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Next` - No description available



### AppRouter

The main application router.

#### Properties

* `baseUrl: string` - The [[Router]]&#x27;s current base URL, typically based on the [[Router.currentInstruction]].
* `container: Container` - Container associated with this router. Also used to create child container for creating child router.
* `couldDeactivate: boolean` - True if the previous instruction successfully completed the CanDeactivatePreviousStep in the current navigation.
* `currentInstruction: NavigationInstruction` - The currently active navigation instruction.
* `currentNavigationTracker: number` - The currently active navigation tracker.
* `events: EventAggregator` - No description available.
* `history: History` - History instance of Aurelia abstract class for wrapping platform history global object
* `isConfigured: boolean` - True if the [[Router]] has been configured.
* `isExplicitNavigation: boolean` - True if the [[Router]] is navigating due to explicit call to navigate function(s).
* `isExplicitNavigationBack: boolean` - True if the [[Router]] is navigating due to explicit call to navigateBack function.
* `isNavigating: boolean` - True if the [[Router]] is currently processing a navigation.
* `isNavigatingBack: boolean` - True if the [[Router]] is navigating back in the browser session history.
* `isNavigatingFirst: boolean` - True if the [[Router]] is navigating into the app for the first time in the browser session.
* `isNavigatingForward: boolean` - True if the [[Router]] is navigating forward in the browser session history.
* `isNavigatingNew: boolean` - True if the [[Router]] is navigating to a page instance not in the browser session history.
* `isNavigatingRefresh: boolean` - True if the [[Router]] is navigating due to a browser refresh.
* `isRoot: boolean` - Gets a value indicating whether or not this [[Router]] is the root in the router tree. I.e., it has no parent.
* `navigation: ` - The navigation models for routes that specified [[RouteConfig.nav]].
* `options: any` - No description available.
* `parent: Router` - The parent router, or null if this instance is not a child router.
* `routes: ` - List of route configs registered with this router
* `title: ` - If defined, used in generation of document title for [[Router]]&#x27;s routes.
* `titleSeparator: ` - The separator used in the document title between [[Router]]&#x27;s routes.
* `transformTitle: ` - Extension point to transform the document title before it is built and displayed.
By default, child routers delegate to the parent router, and the app router
returns the title unchanged.
* `viewPortDefaults: Record` - The defaults used when a viewport lacks specified content
* `viewPorts: Record` - A registry of registered viewport. Will be used to handle process navigation instruction route loading
and dom swapping

#### Methods


* `activate(options?: NavigationOptions): void` - Activates the router. This instructs the router to begin listening for history changes and processing instructions.
  * `options?: NavigationOptions` - No description available


* `addRoute(config: RouteConfig, navModel?: NavModel): void` - Registers a new route with the router.
  * `config: RouteConfig` - The [[RouteConfig]].
  * `navModel?: NavModel` - The [[NavModel]] to use for the route. May be omitted for single-pattern routes.



* `configure(callbackOrConfig: ): Promise` - Configures the router.
  * `callbackOrConfig: ` - The [[RouterConfiguration]] or a callback that takes a [[RouterConfiguration]].



* `createChild(container?: Container): Router` - Creates a child router of the current router.
  * `container?: Container` - The [[Container]] to provide to the child router. Uses the current [[Router]]&#x27;s [[Container]] if unspecified.


* `createNavModel(config: RouteConfig): NavModel` - Creates a [[NavModel]] for the specified route config.
  * `config: RouteConfig` - The route config.



* `deactivate(): void` - Deactivates the router.


* `ensureConfigured(): Promise` - Returns a Promise that resolves when the router is configured.


* `generate(nameOrRoute: , params?: any, options?: any): string` - Generates a URL fragment matching the specified route pattern.
  * `nameOrRoute: ` - No description available
  * `params?: any` - The route params to be used to populate the route pattern.
  * `options?: any` - If options.absolute &#x3D; true, then absolute url will be generated; otherwise, it will be relative url.


* `handleUnknownRoutes(config?: RouteConfigSpecifier): void` - Register a handler to use when the incoming URL fragment doesn&#x27;t match any registered routes.
  * `config?: RouteConfigSpecifier` - The moduleId, or a function that selects the moduleId, or a [[RouteConfig]].



* `hasOwnRoute(name: string): boolean` - Gets a value indicating whether or not this [[Router]] has a route registered with the specified name.
  * `name: string` - The name of the route to check.



* `hasRoute(name: string): boolean` - Gets a value indicating whether or not this [[Router]] or one of its ancestors has a route registered with the specified name.
  * `name: string` - The name of the route to check.



* `loadUrl(url: string): Promise` - Loads the specified URL.
  * `url: string` - The URL fragment to load.



* `navigate(fragment: string, options?: NavigationOptions): boolean` - Navigates to a new location.
  * `fragment: string` - The URL fragment to use as the navigation destination.
  * `options?: NavigationOptions` - The navigation options.



* `navigateBack(): void` - Navigates back to the most recent location in history.


* `navigateToRoute(route: string, params?: any, options?: NavigationOptions): boolean` - Navigates to a new location corresponding to the route and params specified. Equivallent to [[Router.generate]] followed
by [[Router.navigate]].
  * `route: string` - The name of the route to use when generating the navigation location.
  * `params?: any` - The route parameters to be used when populating the route pattern.
  * `options?: NavigationOptions` - The navigation options.



* `refreshNavigation(): void` - Updates the navigation routes with hrefs relative to the current location.
Note: This method will likely move to a plugin in a future release.


* `registerViewPort(viewPort: any, name?: string): Promise` - Registers a viewPort to be used as a rendering target for activated routes.
  * `viewPort: any` - The viewPort. This is typically a &lt;router-view/&gt; element in Aurelia default impl
  * `name?: string` - The name of the viewPort. &#x27;default&#x27; if unspecified.



* `reset(): void` - Fully resets the router&#x27;s internal state. Primarily used internally by the framework when multiple calls to setRoot are made.
Use with caution (actually, avoid using this). Do not use this to simply change your navigation model.


* `updateTitle(): void` - Updates the document title using the current navigation instruction.


* `useViewPortDefaults($viewPortDefaults: Record): void` - Sets the default configuration for the view ports. This specifies how to
 populate a view port for which no module is specified. The default is
 an empty view/view-model pair.
  * `$viewPortDefaults: Record` - No description available



### BuildNavigationPlanStep

Transform a navigation instruction into viewport plan record object,
or a redirect request if user viewmodel demands

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Next): Promise` - 
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Next` - No description available



### CanActivateNextStep

A pipeline step responsible for finding and activating method &#x60;canActivate&#x60; on a view model of a route

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Next): Promise` - 
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Next` - No description available



### CanDeactivatePreviousStep

A pipeline step responsible for finding and activating method &#x60;canDeactivate&#x60; on a view model of a route

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Next): Promise` - 
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Next` - No description available



### CommitChangesStep

A pipeline step for instructing a piepline to commit changes on a navigation instruction

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Function): Promise` - 
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Function` - No description available



### DeactivatePreviousStep

A pipeline step responsible for finding and activating method &#x60;deactivate&#x60; on a view model of a route

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Next): Promise` - 
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Next` - No description available



### LoadRouteStep

A pipeline step responsible for loading a route config of a navigation instruction

#### Properties


#### Methods


* `run(navigationInstruction: NavigationInstruction, next: Next): Promise` - Run the internal to load route config of a navigation instruction to prepare for next steps in the pipeline
  * `navigationInstruction: NavigationInstruction` - No description available
  * `next: Next` - No description available



### NavModel

Class for storing and interacting with a route&#x27;s navigation settings.

#### Properties

* `config: RouteConfig` - The route config.
* `href: string` - This nav item&#x27;s absolute href.
* `isActive: boolean` - True if this nav item is currently active.
* `order: ` - No description available.
* `relativeHref: string` - This nav item&#x27;s relative href.
* `router: Router` - The router associated with this navigation model.
* `settings: any` - Data attached to the route at configuration time.
* `title: string` - The title.

#### Methods


* `setTitle(title: string): void` - Sets the route&#x27;s title and updates document.title.
 If the a navigation is in progress, the change will be applied
 to document.title when the navigation completes.
  * `title: string` - The new title.




### NavigationInstruction

Class used to represent an instruction during a navigation.

#### Properties

* `config: RouteConfig` - The route config for the route matching this instruction.
* `fragment: string` - The URL fragment.
* `options: Record` - No description available.
* `params: any` - Parameters extracted from the route pattern.
* `parentCatchHandler: any` - No description available.
* `parentInstruction: NavigationInstruction` - The parent instruction, if this instruction was created by a child router.
* `plan: Record` - Current built viewport plan of this nav instruction
* `previousInstruction: NavigationInstruction` - The instruction being replaced by this instruction in the current router.
* `queryParams: any` - Parameters extracted from the query string.
* `queryString: string` - The query string.
* `router: Router` - The router instance.
* `viewPortInstructions: Record` - viewPort instructions to used activation.

#### Methods


* `addViewPortInstruction(name: string, strategy: ActivationStrategyType, moduleId: string, component: any): any` - Adds a viewPort instruction. Returns the newly created instruction based on parameters
  * `name: string` - No description available
  * `strategy: ActivationStrategyType` - No description available
  * `moduleId: string` - No description available
  * `component: any` - No description available


* `getAllInstructions(): Array` - Gets an array containing this instruction and all child instructions for the current navigation.


* `getAllPreviousInstructions(): Array` - Gets an array containing the instruction and all child instructions for the previous navigation.
Previous instructions are no longer available after navigation completes.


* `getBaseUrl(): string` - Gets the instruction&#x27;s base URL, accounting for wildcard route parameters.


* `getWildCardName(): string` - Gets the name of the route pattern&#x27;s wildcard parameter, if applicable.


* `getWildcardPath(): string` - Gets the path and query string created by filling the route
pattern&#x27;s wildcard parameter with the matching param.



### Pipeline

The class responsible for managing and processing the navigation pipeline.

#### Properties

* `steps: ` - The pipeline steps. And steps added via addStep will be converted to a function
The actualy running functions with correct step contexts of this pipeline

#### Methods


* `addStep(step: ): Pipeline` - Adds a step to the pipeline.
  * `step: ` - The pipeline step.



* `run(instruction: NavigationInstruction): Promise` - Runs the pipeline.
  * `instruction: NavigationInstruction` - The navigation instruction to process.




### PipelineProvider

Class responsible for creating the navigation pipeline.

#### Properties


#### Methods


* `addStep(name: string, step: ): void` - Adds a step into the pipeline at a known slot location.
  * `name: string` - No description available
  * `step: ` - No description available


* `createPipeline(useCanDeactivateStep?: boolean): Pipeline` - Create the navigation pipeline.
  * `useCanDeactivateStep?: boolean` - No description available


* `removeStep(name: string, step: PipelineStep): void` - Removes a step from a slot in the pipeline
  * `name: string` - No description available
  * `step: PipelineStep` - No description available


* `reset(): void` - Resets all pipeline slots



### Redirect

Used during the activation lifecycle to cause a redirect.

#### Properties

* `router: any` - No description available.
* `url: string` - No description available.

#### Methods


* `navigate(appRouter: Router): void` - Called by the navigation pipeline to navigate.
  * `appRouter: Router` - The router to be redirected.



* `setRouter(router: Router): void` - Called by the activation system to set the child router.
  * `router: Router` - The router.




### RedirectToRoute

Used during the activation lifecycle to cause a redirect to a named route.

#### Properties

* `params: any` - No description available.
* `route: string` - No description available.

#### Methods


* `navigate(appRouter: Router): void` - Called by the navigation pipeline to navigate.
  * `appRouter: Router` - The router to be redirected.



* `setRouter(router: Router): void` - Called by the activation system to set the child router.
  * `router: Router` - The router.




### RouteLoader

Abstract class that is responsible for loading view / view model from a route config
The default implementation can be found in &#x60;aurelia-templating-router&#x60;

#### Properties


#### Methods


* `loadRoute(router: Router, config: RouteConfig, navigationInstruction: NavigationInstruction): Promise` - Load a route config based on its viewmodel / view configuration
  * `router: Router` - No description available
  * `config: RouteConfig` - No description available
  * `navigationInstruction: NavigationInstruction` - No description available



### Router

The primary class responsible for handling routing and navigation.

#### Properties

* `baseUrl: string` - The [[Router]]&#x27;s current base URL, typically based on the [[Router.currentInstruction]].
* `container: Container` - Container associated with this router. Also used to create child container for creating child router.
* `couldDeactivate: boolean` - True if the previous instruction successfully completed the CanDeactivatePreviousStep in the current navigation.
* `currentInstruction: NavigationInstruction` - The currently active navigation instruction.
* `currentNavigationTracker: number` - The currently active navigation tracker.
* `history: History` - History instance of Aurelia abstract class for wrapping platform history global object
* `isConfigured: boolean` - True if the [[Router]] has been configured.
* `isExplicitNavigation: boolean` - True if the [[Router]] is navigating due to explicit call to navigate function(s).
* `isExplicitNavigationBack: boolean` - True if the [[Router]] is navigating due to explicit call to navigateBack function.
* `isNavigating: boolean` - True if the [[Router]] is currently processing a navigation.
* `isNavigatingBack: boolean` - True if the [[Router]] is navigating back in the browser session history.
* `isNavigatingFirst: boolean` - True if the [[Router]] is navigating into the app for the first time in the browser session.
* `isNavigatingForward: boolean` - True if the [[Router]] is navigating forward in the browser session history.
* `isNavigatingNew: boolean` - True if the [[Router]] is navigating to a page instance not in the browser session history.
* `isNavigatingRefresh: boolean` - True if the [[Router]] is navigating due to a browser refresh.
* `isRoot: boolean` - Gets a value indicating whether or not this [[Router]] is the root in the router tree. I.e., it has no parent.
* `navigation: ` - The navigation models for routes that specified [[RouteConfig.nav]].
* `options: any` - No description available.
* `parent: Router` - The parent router, or null if this instance is not a child router.
* `routes: ` - List of route configs registered with this router
* `title: ` - If defined, used in generation of document title for [[Router]]&#x27;s routes.
* `titleSeparator: ` - The separator used in the document title between [[Router]]&#x27;s routes.
* `transformTitle: ` - Extension point to transform the document title before it is built and displayed.
By default, child routers delegate to the parent router, and the app router
returns the title unchanged.
* `viewPortDefaults: Record` - The defaults used when a viewport lacks specified content
* `viewPorts: Record` - A registry of registered viewport. Will be used to handle process navigation instruction route loading
and dom swapping

#### Methods


* `addRoute(config: RouteConfig, navModel?: NavModel): void` - Registers a new route with the router.
  * `config: RouteConfig` - The [[RouteConfig]].
  * `navModel?: NavModel` - The [[NavModel]] to use for the route. May be omitted for single-pattern routes.



* `configure(callbackOrConfig: ): Promise` - Configures the router.
  * `callbackOrConfig: ` - The [[RouterConfiguration]] or a callback that takes a [[RouterConfiguration]].



* `createChild(container?: Container): Router` - Creates a child router of the current router.
  * `container?: Container` - The [[Container]] to provide to the child router. Uses the current [[Router]]&#x27;s [[Container]] if unspecified.


* `createNavModel(config: RouteConfig): NavModel` - Creates a [[NavModel]] for the specified route config.
  * `config: RouteConfig` - The route config.



* `ensureConfigured(): Promise` - Returns a Promise that resolves when the router is configured.


* `generate(nameOrRoute: , params?: any, options?: any): string` - Generates a URL fragment matching the specified route pattern.
  * `nameOrRoute: ` - No description available
  * `params?: any` - The route params to be used to populate the route pattern.
  * `options?: any` - If options.absolute &#x3D; true, then absolute url will be generated; otherwise, it will be relative url.


* `handleUnknownRoutes(config?: RouteConfigSpecifier): void` - Register a handler to use when the incoming URL fragment doesn&#x27;t match any registered routes.
  * `config?: RouteConfigSpecifier` - The moduleId, or a function that selects the moduleId, or a [[RouteConfig]].



* `hasOwnRoute(name: string): boolean` - Gets a value indicating whether or not this [[Router]] has a route registered with the specified name.
  * `name: string` - The name of the route to check.



* `hasRoute(name: string): boolean` - Gets a value indicating whether or not this [[Router]] or one of its ancestors has a route registered with the specified name.
  * `name: string` - The name of the route to check.



* `navigate(fragment: string, options?: NavigationOptions): boolean` - Navigates to a new location.
  * `fragment: string` - The URL fragment to use as the navigation destination.
  * `options?: NavigationOptions` - The navigation options.



* `navigateBack(): void` - Navigates back to the most recent location in history.


* `navigateToRoute(route: string, params?: any, options?: NavigationOptions): boolean` - Navigates to a new location corresponding to the route and params specified. Equivallent to [[Router.generate]] followed
by [[Router.navigate]].
  * `route: string` - The name of the route to use when generating the navigation location.
  * `params?: any` - The route parameters to be used when populating the route pattern.
  * `options?: NavigationOptions` - The navigation options.



* `refreshNavigation(): void` - Updates the navigation routes with hrefs relative to the current location.
Note: This method will likely move to a plugin in a future release.


* `registerViewPort(viewPort: any, name?: string): void` - Registers a viewPort to be used as a rendering target for activated routes.
  * `viewPort: any` - The viewPort.
  * `name?: string` - The name of the viewPort. &#x27;default&#x27; if unspecified.



* `reset(): void` - Fully resets the router&#x27;s internal state. Primarily used internally by the framework when multiple calls to setRoot are made.
Use with caution (actually, avoid using this). Do not use this to simply change your navigation model.


* `updateTitle(): void` - Updates the document title using the current navigation instruction.


* `useViewPortDefaults($viewPortDefaults: Record): void` - Sets the default configuration for the view ports. This specifies how to
 populate a view port for which no module is specified. The default is
 an empty view/view-model pair.
  * `$viewPortDefaults: Record` - No description available



### RouterConfiguration

Class used to configure a [[Router]] instance.

#### Properties

* `instructions: Array` - No description available.
* `options: ` - No description available.
* `pipelineSteps: Array` - No description available.
* `title: string` - No description available.
* `titleSeparator: string` - No description available.
* `unknownRouteConfig: RouteConfigSpecifier` - No description available.
* `viewPortDefaults: Record` - No description available.

#### Methods


* `addAuthorizeStep(step: ): RouterConfiguration` - Adds a step to be run during the [[Router]]&#x27;s authorize pipeline slot.
  * `step: ` - The pipeline step.


* `addPipelineStep(name: string, step: ): RouterConfiguration` - Adds a step to be run during the [[Router]]&#x27;s navigation pipeline.
  * `name: string` - The name of the pipeline slot to insert the step into.
  * `step: ` - The pipeline step.


* `addPostRenderStep(step: ): RouterConfiguration` - Adds a step to be run during the [[Router]]&#x27;s postRender pipeline slot.
  * `step: ` - The pipeline step.


* `addPreActivateStep(step: ): RouterConfiguration` - Adds a step to be run during the [[Router]]&#x27;s preActivate pipeline slot.
  * `step: ` - The pipeline step.


* `addPreRenderStep(step: ): RouterConfiguration` - Adds a step to be run during the [[Router]]&#x27;s preRender pipeline slot.
  * `step: ` - The pipeline step.


* `exportToRouter(router: Router): void` - Applies the current configuration to the specified [[Router]].
  * `router: Router` - The [[Router]] to apply the configuration to.



* `fallbackRoute(fragment: string): RouterConfiguration` - Configures a route that will be used if there is no previous location available on navigation cancellation.
  * `fragment: string` - The URL fragment to use as the navigation destination.


* `map(route: ): RouterConfiguration` - Maps one or more routes to be registered with the router.
  * `route: ` - The [[RouteConfig]] to map, or an array of [[RouteConfig]] to map.


* `mapRoute(config: RouteConfig): RouterConfiguration` - Maps a single route to be registered with the router.
  * `config: RouteConfig` - No description available


* `mapUnknownRoutes(config: RouteConfigSpecifier): RouterConfiguration` - Registers an unknown route handler to be run when the URL fragment doesn&#x27;t match any registered routes.
  * `config: RouteConfigSpecifier` - A string containing a moduleId to load, or a [[RouteConfig]], or a function that takes the
 [[NavigationInstruction]] and selects a moduleId to load.


* `useViewPortDefaults(viewPortConfig: Record): RouterConfiguration` - Configures defaults to use for any view ports.
  * `viewPortConfig: Record` - a view port configuration object to use as a
 default, of the form { viewPortName: { moduleId } }.



## Interfaces


### ActivationStrategy

An optional interface describing the available activation strategies.

#### Properties

* `invokeLifecycle: ` - Reuse the existing view model, invoking Router lifecycle hooks.
* `noChange: ` - Reuse the existing view model, without invoking Router lifecycle hooks.
* `replace: ` - Replace the existing view model, invoking Router lifecycle hooks.

#### Methods



### ConfiguresRouter

An optional interface describing the router configuration convention.

#### Properties


#### Methods


* `configureRouter(config: RouterConfiguration, router: Router): ` - Implement this hook if you want to configure a router.
  * `config: RouterConfiguration` - No description available.
  * `router: Router` - No description available.



### IObservable

A basic interface for an Observable type

#### Properties


#### Methods


* `subscribe(sub?: IObservableConfig): ISubscription` - 
  * `sub?: IObservableConfig` - No description available.



### IObservableConfig

No description available.

#### Properties


#### Methods


* `complete(): void` - 


* `error(err?: any): void` - 
  * `err?: any` - No description available.


* `next(): void` - 



### IPipelineSlot

A multi-step pipeline step that helps enable multiple hooks to the pipeline

#### Properties


#### Methods



### ISubscription

A basic interface for a Subscription to an Observable

#### Properties


#### Methods


* `unsubscribe(): void` - 



### NavigationCommand

When a navigation command is encountered, the current navigation
will be cancelled and control will be passed to the navigation
command so it can determine the correct action.

#### Properties

* `navigate: ` - No description available.

#### Methods



### NavigationInstructionInit

Initialization options for a navigation instruction

#### Properties

* `config: RouteConfig` - No description available.
* `fragment: string` - No description available.
* `options: Object` - No description available.
* `params: Record` - No description available.
* `parentInstruction: NavigationInstruction` - No description available.
* `plan: Record` - No description available.
* `previousInstruction: NavigationInstruction` - No description available.
* `queryParams: Record` - No description available.
* `queryString: string` - No description available.
* `router: Router` - No description available.

#### Methods



### Next

A callback to indicate when pipeline processing should advance to the next step
or be aborted.

#### Properties

* `cancel: NextCompletionHandler` - Indicates that the pipeline should cancel processing.
* `complete: NextCompletionHandler` - Indicates the successful completion of the entire pipeline.
* `reject: NextCompletionHandler` - Indicates that pipeline processing has failed and should be stopped.

#### Methods



### NextCompletionResult

Next Completion result. Comprises of final status, output (could be value/error) and flag &#x60;completed&#x60;

#### Properties

* `completed: boolean` - No description available.
* `output: T` - No description available.
* `status: PipelineStatus` - No description available.

#### Methods



### PipelineResult

The result of a pipeline run.

#### Properties

* `completed: boolean` - No description available.
* `instruction: NavigationInstruction` - No description available.
* `output: any` - No description available.
* `status: string` - No description available.

#### Methods



### PipelineStep

A step to be run during processing of the pipeline.

#### Properties


#### Methods


* `run(instruction: NavigationInstruction, next: Next): Promise` - Execute the pipeline step. The step should invoke next(), next.complete(),
next.cancel(), or next.reject() to allow the pipeline to continue.
  * `instruction: NavigationInstruction` - The navigation instruction.
  * `next: Next` - The next step in the pipeline.




### RedirectConfig

A configuration object that describes a route for redirection

#### Properties

* `redirect: string` - path that will be redirected to. This is relative to currently in process router

#### Methods



### RoutableComponentActivate

An optional interface describing the activate convention.

#### Properties


#### Methods


* `activate(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction): ` - Implement this hook if you want to perform custom logic just before your view-model is displayed.
You can optionally return a promise to tell the router to wait to bind and attach the view until
after you finish your work.
  * `params: any` - No description available.
  * `routeConfig: RouteConfig` - No description available.
  * `navigationInstruction: NavigationInstruction` - No description available.



### RoutableComponentCanActivate

An optional interface describing the canActivate convention.

#### Properties


#### Methods


* `canActivate(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction): ` - Implement this hook if you want to control whether or not your view-model can be navigated to.
Return a boolean value, a promise for a boolean value, or a navigation command.
  * `params: any` - No description available.
  * `routeConfig: RouteConfig` - No description available.
  * `navigationInstruction: NavigationInstruction` - No description available.



### RoutableComponentCanDeactivate

An optional interface describing the canDeactivate convention.

#### Properties

* `canDeactivate: ` - Implement this hook if you want to control whether or not the router can navigate away from your
view-model when moving to a new route. Return a boolean value, a promise for a boolean value,
or a navigation command.

#### Methods



### RoutableComponentDeactivate

An optional interface describing the deactivate convention.

#### Properties

* `deactivate: ` - Implement this hook if you want to perform custom logic when your view-model is being
navigated away from. You can optionally return a promise to tell the router to wait until
after you finish your work.

#### Methods



### RoutableComponentDetermineActivationStrategy

An optional interface describing the determineActivationStrategy convention.

#### Properties


#### Methods


* `determineActivationStrategy(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction): ActivationStrategyType` - Implement this hook if you want to give hints to the router about the activation strategy, when reusing
a view model for different routes. Available values are &#x27;replace&#x27; and &#x27;invoke-lifecycle&#x27;.
  * `params: any` - No description available.
  * `routeConfig: RouteConfig` - No description available.
  * `navigationInstruction: NavigationInstruction` - No description available.



### RouteConfig

A configuration object that describes a route.

#### Properties

* `activationStrategy: ActivationStrategyType` - Add to specify an activation strategy if it is always the same and you do not want that
to be in your view-model code. Available values are &#x27;replace&#x27; and &#x27;invoke-lifecycle&#x27;.
* `caseSensitive: boolean` - When true is specified, this route will be case sensitive.
* `generationUsesHref: boolean` - Indicates that when route generation is done for this route, it should just take the literal value of the href property.
* `href: string` - The URL fragment to use in nav models. If unspecified, the [[RouteConfig.route]] will be used.
However, if the [[RouteConfig.route]] contains dynamic segments, this property must be specified.
* `layoutModel: any` - specifies the model parameter to pass to the layout view model&#x27;s &#x60;activate&#x60; function.
* `layoutView: string` - specifies the file name of a layout view to use.
* `layoutViewModel: string` - specifies the moduleId of the view model to use with the layout view.
* `moduleId: string` - The moduleId of the view model that should be activated for this route.
* `name: string` - A unique name for the route that may be used to identify the route when generating URL fragments.
Required when this route should support URL generation, such as with [[Router.generate]] or
the route-href custom attribute.
* `nav: ` - When specified, this route will be included in the [[Router.navigation]] nav model. Useful for
dynamically generating menus or other navigation elements. When a number is specified, that value
will be used as a sort order.
* `navModel: NavModel` - The navigation model for storing and interacting with the route&#x27;s navigation settings.
* `navigationStrategy: ` - A function that can be used to dynamically select the module or modules to activate.
The function is passed the current [[NavigationInstruction]], and should configure
instruction.config with the desired moduleId, viewPorts, or redirect.
* `redirect: string` - A URL fragment to redirect to when this route is matched.
* `route: ` - The route pattern to match against incoming URL fragments, or an array of patterns.
* `settings: any` - Arbitrary data to attach to the route. This can be used to attached custom data needed by components
like pipeline steps and activated modules.
* `title: string` - The document title to set when this route is active.
* `viewPorts: any` - The view ports to target when activating this route. If unspecified, the target moduleId is loaded
into the default viewPort (the viewPort with name &#x27;default&#x27;). The viewPorts object should have keys
whose property names correspond to names used by &lt;router-view&gt; elements. The values should be objects
specifying the moduleId to load into that viewPort.  The values may optionally include properties related to layout:
&#x60;layoutView&#x60;, &#x60;layoutViewModel&#x60; and &#x60;layoutModel&#x60;.

#### Methods



## Constants

* `activationStrategy: ActivationStrategy` - The strategy to use when activating modules during navigation.

## Functions


* `isNavigationCommand(obj: any): boolean` - Determines if the provided object is a navigation command.
A navigation command is anything with a navigate method.
  * `obj: any` - The object to check.


