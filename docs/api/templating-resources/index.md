# Templating-Resources Module

> A standard set of behaviors, converters and other resources for use with the Aurelia templating library.

## Classes


### AbstractRepeater

An abstract base class for elements and attributes that repeat
views.

#### Properties


#### Methods


* `addView(bindingContext: any, overrideContext: any): void` - Adds a view to the repeater, binding the view to the
provided contexts.
  * `bindingContext: any` - The binding context to bind the new view to.
  * `overrideContext: any` - A secondary binding context that can override the primary context.



* `insertView(index: any, bindingContext: any, overrideContext: any): void` - Inserts a view to the repeater at a specific index, binding the view to the
provided contexts.
  * `index: any` - The index at which to create the new view at.
  * `bindingContext: any` - The binding context to bind the new view to.
  * `overrideContext: any` - A secondary binding context that can override the primary context.



* `matcher(): void` - Returns the matcher function to be used by the repeater, or null if strict matching is to be performed.


* `moveView(sourceIndex: any, targetIndex: any): void` - Moves a view across the repeater.
  * `sourceIndex: any` - No description available
  * `targetIndex: any` - No description available


* `removeAllViews(returnToCache?: boolean, skipAnimation?: boolean): void` - Removes all views from the repeater.
  * `returnToCache?: boolean` - Should the view be returned to the view cache?
  * `skipAnimation?: boolean` - Should the removal animation be skipped?


* `removeView(index: number, returnToCache?: boolean, skipAnimation?: boolean): void` - Removes a view from the repeater at a specific index.
  * `index: number` - The index of the view to be removed.
  * `returnToCache?: boolean` - Should the view be returned to the view cache?
  * `skipAnimation?: boolean` - Should the removal animation be skipped?


* `removeViews(viewsToRemove: Array, returnToCache?: boolean, skipAnimation?: boolean): void` - Removes an array of Views from the repeater.
  * `viewsToRemove: Array` - The array of views to be removed.
  * `returnToCache?: boolean` - Should the view be returned to the view cache?
  * `skipAnimation?: boolean` - Should the removal animation be skipped?


* `updateBindings(view: View): void` - Forces a particular view to update it&#x27;s bindings, called as part of
an in-place processing of items for better performance
  * `view: View` - the target view for bindings updates



* `view(index: any): any` - Returns a single view from the repeater at the provided index.
  * `index: any` - The index of the requested view.


* `viewCount(): number` - Returns the number of views the repeater knows about.


* `views(): ` - Returns all of the repeaters views as an array.



### ArrayRepeatStrategy

A strategy for repeating a template over an array.

#### Properties


#### Methods


* `getCollectionObserver(observerLocator: any, items: any): any` - Gets an observer for the specified collection.
  * `observerLocator: any` - The observer locator instance.
  * `items: any` - The items to be observed.



* `instanceChanged(repeat: any, items: any): void` - Handle the repeat&#x27;s collection instance changing.
  * `repeat: any` - The repeater instance.
  * `items: any` - The new array instance.



* `instanceMutated(repeat: any, array: any, splices: any): void` - Handle the repeat&#x27;s collection instance mutating.
  * `repeat: any` - The repeat instance.
  * `array: any` - The modified array.
  * `splices: any` - Records of array changes.




### AttrBindingBehavior

No description available.

#### Properties


#### Methods


* `bind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available



### BindingSignaler

No description available.

#### Properties

* `signals: __type` - No description available.

#### Methods


* `signal(name: string): void` - 
  * `name: string` - No description available



### Compose

Used to compose a new view / view-model template or bind to an existing instance.

#### Properties

* `model: any` - Model to bind the custom element to.
* `swapOrder: any` - SwapOrder to control the swapping order of the custom element&#x27;s view.
* `view: any` - View to bind the custom element to.
* `viewModel: any` - View-model to bind the custom element&#x27;s template to.

#### Methods


* `bind(bindingContext: any, overrideContext: any): void` - Used to set the bindingContext.
  * `bindingContext: any` - The context in which the view model is executed in.
  * `overrideContext: any` - The context in which the view model is executed in.



* `created(owningView: View): void` - Invoked when the component has been created.
  * `owningView: View` - The view that this component was created inside of.



* `modelChanged(newValue: any, oldValue: any): void` - Invoked everytime the bound model changes.
  * `newValue: any` - The new value.
  * `oldValue: any` - The old value.



* `unbind(): void` - Unbinds the Compose.


* `viewChanged(newValue: any, oldValue: any): void` - Invoked everytime the bound view changes.
  * `newValue: any` - The new value.
  * `oldValue: any` - The old value.



* `viewModelChanged(newValue: any, oldValue: any): void` - Invoked everytime the bound view model changes.
  * `newValue: any` - The new value.
  * `oldValue: any` - The old value.




### DebounceBindingBehavior

No description available.

#### Properties


#### Methods


* `bind(binding: any, source: any, delay?: number): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `delay?: number` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available



### Else

No description available.

#### Properties


#### Methods


* `bind(bindingContext: any, overrideContext: any): void` - 
  * `bindingContext: any` - No description available
  * `overrideContext: any` - No description available


* `unbind(): void` - 



### Focus

CustomAttribute that binds provided DOM element&#x27;s focus attribute with a property on the viewmodel.

#### Properties


#### Methods


* `attached(): void` - Invoked when the attribute is attached to the DOM.


* `detached(): void` - Invoked when the attribute is detached from the DOM.


* `handleEvent(e: any): void` - 
  * `e: any` - No description available


* `valueChanged(newValue: any): void` - Invoked everytime the bound value changes.
  * `newValue: any` - The new value.




### FromViewBindingBehavior

No description available.

#### Properties

* `mode: bindingMode` - No description available.

#### Methods



### HTMLSanitizer

Default Html Sanitizer to prevent script injection.

#### Properties


#### Methods


* `sanitize(input: any): any` - Sanitizes the provided input.
  * `input: any` - The input to be sanitized.




### Hide

Binding to conditionally show markup in the DOM based on the value.
- different from &quot;if&quot; in that the markup is still added to the DOM, simply not shown.

#### Properties


#### Methods


* `bind(bindingContext: any): void` - Binds the Hide attribute.
  * `bindingContext: any` - No description available


* `created(): void` - Invoked when the behavior is created.


* `value(value: any): void` - 
  * `value: any` - No description available


* `valueChanged(newValue: any): void` - Invoked everytime the bound value changes.
  * `newValue: any` - The new value.




### If

Binding to conditionally include or not include template logic depending on returned result
- value should be Boolean or will be treated as such (truthy / falsey)

#### Properties

* `cache: ` - No description available.
* `condition: any` - No description available.
* `swapOrder: ` - No description available.

#### Methods


* `bind(bindingContext: any, overrideContext: any): void` - Binds the if to the binding context and override context
  * `bindingContext: any` - The binding context
  * `overrideContext: any` - An override context for binding.



* `conditionChanged(newValue: any): void` - Invoked everytime value property changes.
  * `newValue: any` - The new value



* `unbind(): void` - 



### IfCore

No description available.

#### Properties


#### Methods


* `bind(bindingContext: any, overrideContext: any): void` - 
  * `bindingContext: any` - No description available
  * `overrideContext: any` - No description available


* `unbind(): void` - 



### MapRepeatStrategy

A strategy for repeating a template over a Map.

#### Properties


#### Methods


* `getCollectionObserver(observerLocator: any, items: any): any` - Gets a Map observer.
  * `observerLocator: any` - No description available
  * `items: any` - The items to be observed.



* `instanceChanged(repeat: any, items: any): void` - Process the provided Map entries.
  * `repeat: any` - No description available
  * `items: any` - The entries to process.



* `instanceMutated(repeat: any, map: any, records: any): void` - Handle changes in a Map collection.
  * `repeat: any` - No description available
  * `map: any` - The underlying Map collection.
  * `records: any` - The change records.




### NullRepeatStrategy

A strategy for repeating a template over null or undefined (does nothing)

#### Properties


#### Methods


* `getCollectionObserver(observerLocator: any, items: any): void` - 
  * `observerLocator: any` - No description available
  * `items: any` - No description available


* `instanceChanged(repeat: any, items: any): void` - 
  * `repeat: any` - No description available
  * `items: any` - No description available



### NumberRepeatStrategy

A strategy for repeating a template over a number.

#### Properties


#### Methods


* `getCollectionObserver(): any` - Return the strategies collection observer. In this case none.


* `instanceChanged(repeat: any, value: any): void` - Process the provided Number.
  * `repeat: any` - No description available
  * `value: any` - The Number of how many time to iterate.




### OneTimeBindingBehavior

No description available.

#### Properties

* `mode: bindingMode` - No description available.

#### Methods



### OneWayBindingBehavior

No description available.

#### Properties

* `mode: bindingMode` - No description available.

#### Methods



### Repeat

Binding to iterate over iterable objects (Array, Map and Number) to genereate a template for each iteration.

#### Properties

* `items: any` - List of items to bind the repeater to.
* `key: any` - Key when iterating over Maps.
* `local: any` - Local variable which gets assigned on each iteration.
* `value: any` - Value when iterating over Maps.

#### Methods


* `addView(bindingContext: any, overrideContext: any): void` - 
  * `bindingContext: any` - No description available
  * `overrideContext: any` - No description available


* `bind(bindingContext: any, overrideContext: any): void` - Binds the repeat to the binding context and override context.
  * `bindingContext: any` - The binding context.
  * `overrideContext: any` - An override context for binding.



* `call(context: any, changes: any): void` - 
  * `context: any` - No description available
  * `changes: any` - No description available


* `handleCollectionMutated(collection: any, changes: any): void` - Invoked when the underlying collection changes.
  * `collection: any` - No description available
  * `changes: any` - No description available


* `handleInnerCollectionMutated(collection: any, changes: any): void` - Invoked when the underlying inner collection changes.
  * `collection: any` - No description available
  * `changes: any` - No description available


* `insertView(index: any, bindingContext: any, overrideContext: any): void` - 
  * `index: any` - No description available
  * `bindingContext: any` - No description available
  * `overrideContext: any` - No description available


* `itemsChanged(): void` - Invoked everytime the item property changes.


* `matcher(): any` - 


* `moveView(sourceIndex: any, targetIndex: any): void` - 
  * `sourceIndex: any` - No description available
  * `targetIndex: any` - No description available


* `removeAllViews(returnToCache: any, skipAnimation: any): any` - 
  * `returnToCache: any` - No description available
  * `skipAnimation: any` - No description available


* `removeView(index: any, returnToCache: any, skipAnimation: any): any` - 
  * `index: any` - No description available
  * `returnToCache: any` - No description available
  * `skipAnimation: any` - No description available


* `removeViews(viewsToRemove: any, returnToCache: any, skipAnimation: any): any` - 
  * `viewsToRemove: any` - No description available
  * `returnToCache: any` - No description available
  * `skipAnimation: any` - No description available


* `unbind(): void` - Unbinds the repeat


* `updateBindings(view: View): void` - 
  * `view: View` - No description available


* `view(index: any): any` - 
  * `index: any` - No description available


* `viewCount(): any` - 


* `views(): any` - 



### RepeatStrategyLocator

Locates the best strategy to best repeating a template over different types of collections.
Custom strategies can be plugged in as well.

#### Properties


#### Methods


* `addStrategy(matcher: , strategy: RepeatStrategy): void` - Adds a repeat strategy to be located when repeating a template over different collection types.
  * `matcher: ` - No description available
  * `strategy: RepeatStrategy` - A repeat strategy that can iterate a specific collection type.



* `getStrategy(items: any): RepeatStrategy` - Gets the best strategy to handle iteration.
  * `items: any` - No description available



### Replaceable

Marks any part of a view to be replacable by the consumer.

#### Properties


#### Methods


* `bind(bindingContext: any, overrideContext: any): void` - Binds the replaceable to the binding context and override context.
  * `bindingContext: any` - The binding context.
  * `overrideContext: any` - An override context for binding.



* `unbind(): void` - Unbinds the replaceable.



### SanitizeHTMLValueConverter

Simple html sanitization converter to preserve whitelisted elements and attributes on a bound property containing html.

#### Properties


#### Methods


* `toView(untrustedMarkup: any): any` - Process the provided markup that flows to the view.
  * `untrustedMarkup: any` - The untrusted markup to be sanitized.




### SelfBindingBehavior

No description available.

#### Properties


#### Methods


* `bind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available



### SetRepeatStrategy

A strategy for repeating a template over a Set.

#### Properties


#### Methods


* `getCollectionObserver(observerLocator: any, items: any): any` - Gets a Set observer.
  * `observerLocator: any` - No description available
  * `items: any` - The items to be observed.



* `instanceChanged(repeat: any, items: any): void` - Process the provided Set entries.
  * `repeat: any` - No description available
  * `items: any` - The entries to process.



* `instanceMutated(repeat: any, set: any, records: any): void` - Handle changes in a Set collection.
  * `repeat: any` - The repeat instance.
  * `set: any` - The underlying Set collection.
  * `records: any` - The change records.




### Show

Binding to conditionally show markup in the DOM based on the value.
- different from &quot;if&quot; in that the markup is still added to the DOM, simply not shown.

#### Properties

* `value: any` - No description available.

#### Methods


* `bind(bindingContext: any): void` - Binds the Show attribute.
  * `bindingContext: any` - No description available


* `created(): void` - Invoked when the behavior is created.


* `valueChanged(newValue: any): void` - Invoked everytime the bound value changes.
  * `newValue: any` - The new value.




### SignalBindingBehavior

No description available.

#### Properties

* `signals: any` - No description available.

#### Methods


* `bind(binding: any, source: any, names: ): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `names: ` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available



### ThrottleBindingBehavior

No description available.

#### Properties


#### Methods


* `bind(binding: any, source: any, delay?: number): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `delay?: number` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available



### ToViewBindingBehavior

No description available.

#### Properties

* `mode: bindingMode` - No description available.

#### Methods



### TwoWayBindingBehavior

No description available.

#### Properties

* `mode: bindingMode` - No description available.

#### Methods



### UpdateTriggerBindingBehavior

No description available.

#### Properties


#### Methods


* `bind(binding: any, source: any, events: ): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `events: ` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available



### With

Creates a binding context for decandant elements to bind to.

#### Properties

* `value: any` - No description available.

#### Methods


* `bind(bindingContext: any, overrideContext: any): void` - Binds the With with provided binding context and override context.
  * `bindingContext: any` - The binding context.
  * `overrideContext: any` - An override context for binding.



* `unbind(): void` - Unbinds With


* `valueChanged(newValue: any): void` - Invoked everytime the bound value changes.
  * `newValue: any` - The new value.




## Interfaces


### RepeatStrategy

A strategy is for repeating a template over an iterable or iterable-like object.

#### Properties


#### Methods


* `getCollectionObserver(observerLocator: any, items: any): any` - 
  * `observerLocator: any` - No description available.
  * `items: any` - No description available.


* `instanceChanged(repeat: Repeat, items: any): void` - 
  * `repeat: Repeat` - No description available.
  * `items: any` - No description available.


* `instanceMutated(repeat: Repeat, items: any, changes: any): void` - 
  * `repeat: Repeat` - No description available.
  * `items: any` - No description available.
  * `changes: any` - No description available.



## Constants


## Functions


* `configure(config: any): void` - 
  * `config: any` - No description available.


* `createFullOverrideContext(repeat: any, data: any, index: any, length: any, key?: string): OverrideContext` - Creates a complete override context.
  * `repeat: any` - No description available.
  * `data: any` - The item&#x27;s value.
  * `index: any` - The item&#x27;s index.
  * `length: any` - The collections total length.
  * `key?: string` - The key in a key/value pair.



* `getItemsSourceExpression(instruction: any, attrName: any): any` - Gets a repeat instruction&#x27;s source expression.
  * `instruction: any` - No description available.
  * `attrName: any` - No description available.


* `isOneTime(expression: any): boolean` - Returns whether an expression has the OneTimeBindingBehavior applied.
  * `expression: any` - No description available.


* `unwrapExpression(expression: any): any` - Unwraps an expression to expose the inner, pre-converted / behavior-free expression.
  * `expression: any` - No description available.


* `updateOneTimeBinding(binding: any): void` - Forces a binding instance to reevaluate.
  * `binding: any` - No description available.


* `updateOverrideContext(overrideContext: any, index: any, length: any): void` - Updates the override context.
  * `overrideContext: any` - No description available.
  * `index: any` - The context&#x27;s index.
  * `length: any` - The collection&#x27;s length.



* `viewsRequireLifecycle(viewFactory: any): any` - 
  * `viewFactory: any` - No description available.

