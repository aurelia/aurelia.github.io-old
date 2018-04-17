# Platform Abstraction Layer (PAL) Module

> Aurelia&#x27;s platform abstraction layer (PAL).

## Classes


## Interfaces


### Dom

Represents the core APIs of the DOM.

#### Properties

* `Element: ` - The global DOM Element type.
* `NodeList: ` - The global DOM NodeList type.
* `SVGElement: ` - The global DOM SVGElement type.
* `activeElement: Element` - The document&#x27;s active/focused element.
* `boundary: string` - A key representing a DOM boundary.
* `title: string` - The document title.

#### Methods


* `addEventListener(eventName: string, callback: EventListenerOrEventListenerObject, capture: boolean): void` - Add an event listener to the document.
  * `eventName: string` - A string representing the event type to listen for.
  * `callback: EventListenerOrEventListenerObject` - The function that receives a notification when an event of the specified type occurs.
  * `capture: boolean` - If true, useCapture indicates that the user wishes to initiate capture.



* `adoptNode(node: Node): Node` - Adopts a node from an external document.
  * `node: Node` - The node to be adopted.


* `appendNode(newNode: Node, parentNode?: Node): void` - Appends a node to the parent, if provided, or the document.body otherwise.
  * `newNode: Node` - The node to append.
  * `parentNode?: Node` - The node to append to, otherwise the document.body.



* `createAttribute(name: string): Attr` - Creates the specified HTML attribute
  * `name: string` - A string that specifies the name of attribute to be created.


* `createComment(text: string): Comment` - Creates a new Comment node.
  * `text: string` - A string to populate the new Comment node.


* `createCustomEvent(eventType: string, options?: CustomEventInit): CustomEvent` - Creates a new CustomEvent.
  * `eventType: string` - A string representing the event type.
  * `options?: CustomEventInit` - An options object specifying bubbles:boolean, cancelable:boolean and/or detail:Object information.


* `createDocumentFragment(): DocumentFragment` - Creates a new DocumentFragment.


* `createElement(tagName: T): HTMLElementTagNameMap[T]` - Creates the specified HTML element or an HTMLUnknownElement if the given element name isn&#x27;t a known one.
  * `tagName: T` - A string that specifies the type of element to be created.


* `createMutationObserver(callback: Function): MutationObserver` - Creates a new MutationObserver.
  * `callback: Function` - A callback that will recieve the change records with the mutations.


* `createTemplateElement(): HTMLTemplateElement` - Creates a new HTMLTemplateElement.


* `createTemplateFromMarkup(markup: string): HTMLTemplateElement` - Creates an HTMLTemplateElement using the markup provided.
  * `markup: string` - A string containing the markup to turn into a template. Note: This string must contain the template element as well.


* `createTextNode(text: string): Text` - Creates a new Text node.
  * `text: string` - A string to populate the new Text node.


* `dispatchEvent(evt: Event): void` - Dispatches an event on the document.
  * `evt: Event` - The event to dispatch.



* `getComputedStyle(element: Element): CSSStyleDeclaration` - Gives the values of all the CSS properties of an element after applying the active stylesheets and resolving any basic computation those values may contain.
  * `element: Element` - The Element for which to get the computed style.


* `getElementById(id: string): Element` - Locates an element in the document according to its id.
  * `id: string` - The id to search the document for.


* `injectStyles(styles: string, destination?: Element, prepend?: boolean, id?: string): Node` - Injects styles into the destination element, or the document.head if no destination is provided.
  * `styles: string` - The css text to injext.
  * `destination?: Element` - The destination element to inject the css text into. If not specified it will default to the document.head.
  * `prepend?: boolean` - Indicates whether or not the styles should be prepended to the destination. By default they are appended.
  * `id?: string` - The existing style element&#x27;s id to replace the contents for


* `nextElementSibling(element: Node): Element` - Gets the element that is the next sibling of the provided element.
  * `element: Node` - The element whose next sibling is being located.


* `querySelector(selectors: K): ` - Performs a query selector on the document and returns first matched element, depth first.
  * `selectors: K` - No description available.


* `querySelectorAll(selectors: K): NodeListOf` - Performs a query selector on the document and returns all located matches.
  * `selectors: K` - No description available.


* `removeEventListener(eventName: string, callback: EventListenerOrEventListenerObject, capture: boolean): void` - Remove an event listener from the document.
  * `eventName: string` - A string representing the event type to listen for.
  * `callback: EventListenerOrEventListenerObject` - The function to remove from the event.
  * `capture: boolean` - Specifies whether the listener to be removed was registered as a capturing listener or not.



* `removeNode(node: Node, parentNode?: Node): void` - Removes the specified node from the parent node.
  * `node: Node` - The node to remove.
  * `parentNode?: Node` - The parent node from which the node will be removed.



* `replaceNode(newNode: Node, node: Node, parentNode?: Node): void` - Replaces a node in the parent with a new node.
  * `newNode: Node` - The node to replace the old node with.
  * `node: Node` - The node that is being replaced.
  * `parentNode?: Node` - The node that the current node is parented to.




### Feature

Enables discovery of what features the runtime environment supports.

#### Properties

* `htmlTemplateElement: boolean` - Does the runtime environment support native HTMLTemplateElement?
* `mutationObserver: boolean` - Does the runtime environment support native DOM mutation observers?
* `scopedCSS: boolean` - Does the runtime environment support the css scoped attribute?
* `shadowDOM: boolean` - Does the runtime environment support ShadowDOM?

#### Methods



### ModuleNameOptions

Options used during the static analysis that inform how to process a given module.

#### Properties

* `chunk: string` - Add the module to a chunk by name
* `exports: ` - Optionally declare which exports are used. This enables tree-shaking when only few out of many exports are used.

#### Methods



### Performance

The runtime&#x27;s performance API.

#### Properties


#### Methods


* `clearMarks(markName?: string): void` - Removes the given mark from the browser&#x27;s performance entry buffer.
  * `markName?: string` - No description available.


* `clearMeasures(measureName?: string): void` - Removes the given measure from the browser&#x27;s performance entry buffer.
  * `measureName?: string` - No description available.


* `getEntriesByName(name: string, entryType?: string): any` - Returns a list of PerformanceEntry objects based on the given name and entry type.
  * `name: string` - The name of the entry to retrieve
  * `entryType?: string` - No description available.


* `getEntriesByType(entryType: string): any` - Returns a list of PerformanceEntry objects of the given entry type.
  * `entryType: string` - The type of entry to retrieve such as &quot;mark&quot;. The valid entry types are listed in PerformanceEntry.entryType.


* `mark(markName: string): void` - Creates a timestamp in the browser&#x27;s performance entry buffer with the given name.
  * `markName: string` - a DOMString representing the name of the mark


* `measure(measureName: string, startMarkName?: string, endMarkName?: string): void` - Creates a named timestamp in the browser&#x27;s performance entry buffer between two specified marks (known as the start mark and end mark, respectively).
  * `measureName: string` - a DOMString representing the name of the measure.
  * `startMarkName?: string` - No description available.
  * `endMarkName?: string` - No description available.


* `now(): number` - Gets a DOMHighResTimeStamp.



### Platform

Represents the core APIs of the runtime environment.

#### Properties

* `Loader: any` - Reference to the Loader Class (set after the loader has been first imported)
* `XMLHttpRequest: ` - The runtime&#x27;s XMLHttpRequest API.
* `global: any` - The runtime environment&#x27;s global.
* `history: History` - The runtime&#x27;s history API.
* `location: Location` - The runtime&#x27;s location API.
* `noop: Function` - A function wich does nothing.
* `performance: Performance` - The runtime&#x27;s performance API

#### Methods


* `addEventListener(eventName: string, callback: EventListenerOrEventListenerObject, capture?: boolean): void` - Add a global event listener.
  * `eventName: string` - A string representing the event type to listen for.
  * `callback: EventListenerOrEventListenerObject` - The function or listener object that receives a notification when an event of the specified type occurs.
  * `capture?: boolean` - If true, useCapture indicates that the user wishes to initiate capture.



* `eachModule(callback: ): void` - Iterate all modules loaded by the script loader.
  * `callback: ` - A callback that will receive each module id along with the module object. Return true to end enumeration.



* `moduleName(moduleName: string, options?: ModuleNameOptions): string` - Resolves a module name to a path resolvable by the loader. By default returns the first parameter.
It is recommended to use this for all dynamic imports as it enables static analysis
and optionally allows adding custom metadata used by the build step.
  * `moduleName: string` - Absolute or relative path to the module.
  * `options?: ModuleNameOptions` - Optional options used during the static analysis that inform how to process the module.



* `removeEventListener(eventName: string, callback: EventListenerOrEventListenerObject, capture?: boolean): void` - Remove a global event listener.
  * `eventName: string` - A string representing the event type to listen for.
  * `callback: EventListenerOrEventListenerObject` - The function or listener object to remove from the event.
  * `capture?: boolean` - Specifies whether the listener to be removed was registered as a capturing listener or not.



* `requestAnimationFrame(callback: ): number` - Registers a function to call when the system is ready to update (repaint) the display.
  * `callback: ` - The function to call.



## Constants

* `DOM: Dom` - The singleton instance of the Dom API.
* `FEATURE: Feature` - The singleton instance of the Feature discovery API.
* `PLATFORM: Platform` - The singleton instance of the Platform API.
* `isInitialized: any` - No description available.

## Functions


* `AggregateError(message: string, innerError?: Error, skipIfAlreadyAggregate?: boolean): Error` - Creates an instance of Error that aggregates and preserves an innerError.
  * `message: string` - The error message.
  * `innerError?: Error` - The inner error message to aggregate.
  * `skipIfAlreadyAggregate?: boolean` - Indicates to not wrap the inner error if it itself already has an innerError.


* `initializePAL(callback: ): void` - Enables initializing a specific implementation of the Platform Abstraction Layer (PAL).
  * `callback: ` - Allows providing a callback which configures the three PAL singletons with their platform-specific implementations.



* `reset(): any` - 

