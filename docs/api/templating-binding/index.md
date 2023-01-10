# aurelia-templating-binding Module

> An implementation of the templating engine&#x27;s Binding Language abstraction which uses a pluggable command syntax.

## Classes


### AttributeMap

No description available.

#### Properties

* `allElements: any` - No description available.
* `elements: any` - No description available.

#### Methods


* `map(elementName: string, attributeName: string): any` - Returns the javascript property name for a particlar HTML attribute.
  * `elementName: string` - No description available
  * `attributeName: string` - No description available


* `register(elementName: string, attributeName: string, propertyName: string): void` - Maps a specific HTML element attribute to a javascript property.
  * `elementName: string` - No description available
  * `attributeName: string` - No description available
  * `propertyName: string` - No description available


* `registerUniversal(attributeName: string, propertyName: string): void` - Maps an HTML attribute to a javascript property.
  * `attributeName: string` - No description available
  * `propertyName: string` - No description available



### ChildInterpolationBinding

No description available.

#### Properties


#### Methods


* `bind(source: any): void` - 
  * `source: any` - No description available


* `call(): void` - 


* `connect(evaluate: any): void` - 
  * `evaluate: any` - No description available


* `unbind(): void` - 


* `updateTarget(value: any): void` - 
  * `value: any` - No description available



### InterpolationBinding

No description available.

#### Properties


#### Methods


* `bind(source: any): void` - 
  * `source: any` - No description available


* `interpolate(): void` - 


* `unbind(): void` - 


* `updateOneTimeBindings(): void` - 



### InterpolationBindingExpression

No description available.

#### Properties


#### Methods


* `createBinding(target: any): ` - 
  * `target: any` - No description available



### LetBinding

No description available.

#### Properties


#### Methods


* `bind(source: any): void` - 
  * `source: any` - Binding context



* `call(context: any): void` - 
  * `context: any` - No description available


* `connect(): void` - 


* `unbind(): void` - 


* `unobserve(arg0: boolean): void` - 
  * `arg0: boolean` - No description available


* `updateTarget(): void` - 



### LetExpression

No description available.

#### Properties


#### Methods


* `createBinding(): LetBinding` - 



### LetInterpolationBinding

No description available.

#### Properties


#### Methods


* `bind(source: any): void` - 
  * `source: any` - 



* `createInterpolationBinding(): ` - 


* `unbind(): void` - 



### LetInterpolationBindingExpression

No description available.

#### Properties


#### Methods


* `createBinding(): LetInterpolationBinding` - 



### SyntaxInterpreter

No description available.

#### Properties

* `language: BindingLanguage` - No description available.

#### Methods


* `bind(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction, context: HtmlBehaviorResource): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available
  * `context: HtmlBehaviorResource` - No description available


* `call(resources: ViewResources, element: any, info: AttributeInfo, existingInstruction: BehaviorInstruction): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: any` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available


* `capture(resources: ViewResources, element: any, info: AttributeInfo): ListenerExpression` - 
  * `resources: ViewResources` - No description available
  * `element: any` - No description available
  * `info: AttributeInfo` - No description available


* `delegate(resources: ViewResources, element: any, info: AttributeInfo): ListenerExpression` - 
  * `resources: ViewResources` - No description available
  * `element: any` - No description available
  * `info: AttributeInfo` - No description available


* `determineDefaultBindingMode(element: Element, attrName: string, context: HtmlBehaviorResource): bindingMode` - 
  * `element: Element` - No description available
  * `attrName: string` - No description available
  * `context: HtmlBehaviorResource` - No description available


* `for(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction): ` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available


* `from-view(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available


* `handleUnknownCommand(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction, context: HtmlBehaviorResource): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available
  * `context: HtmlBehaviorResource` - No description available


* `interpret(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction?: BehaviorInstruction, context?: HtmlBehaviorResource): any` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction?: BehaviorInstruction` - No description available
  * `context?: HtmlBehaviorResource` - No description available


* `one-time(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available


* `options(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction, context: HtmlBehaviorResource): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available
  * `context: HtmlBehaviorResource` - No description available


* `to-view(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available


* `trigger(resources: ViewResources, element: any, info: AttributeInfo): ListenerExpression` - 
  * `resources: ViewResources` - No description available
  * `element: any` - No description available
  * `info: AttributeInfo` - No description available


* `two-way(resources: ViewResources, element: Element, info: AttributeInfo, existingInstruction: BehaviorInstruction): BehaviorInstruction` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `info: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available



### TemplatingBindingLanguage

No description available.

#### Properties


#### Methods


* `createAttributeInstruction(resources: ViewResources, element: Element, theInfo: AttributeInfo, existingInstruction: BehaviorInstruction, context: HtmlBehaviorResource): any` - 
  * `resources: ViewResources` - No description available
  * `element: Element` - No description available
  * `theInfo: AttributeInfo` - No description available
  * `existingInstruction: BehaviorInstruction` - No description available
  * `context: HtmlBehaviorResource` - No description available


* `createLetExpressions(resources: ViewResources, letElement: Element): ` - 
  * `resources: ViewResources` - No description available
  * `letElement: Element` - No description available


* `inspectAttribute(resources: ViewResources, elementName: string, attrName: string, attrValue: string): AttributeInfo` - 
  * `resources: ViewResources` - No description available
  * `elementName: string` - No description available
  * `attrName: string` - No description available
  * `attrValue: string` - No description available


* `inspectTextContent(resources: ViewResources, value: string): InterpolationBindingExpression` - 
  * `resources: ViewResources` - No description available
  * `value: string` - No description available


* `parseInterpolation(resources: ViewResources, value: string): any` - 
  * `resources: ViewResources` - No description available
  * `value: string` - No description available



## Interfaces


### AttributeInfo

An object describing information analyzed from an attribute in an Aurelia templates

#### Properties

* `attrName: string` - No description available.
* `attrValue: string` - No description available.
* `command: string` - No description available.
* `defaultBindingMode: bindingMode` - No description available.
* `expression: ` - No description available.

#### Methods



## Constants


## Functions


* `configure(config: any): void` - 
  * `config: any` - No description available.

