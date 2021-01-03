# aurelia-validation Module

> Validation for Aurelia applications

## Classes


### ExpressionVisitor

No description available.

#### Properties

* `visitArgs: any` - No description available.

#### Methods


* `visitAccessKeyed(access: AccessKeyed): void` - 
  * `access: AccessKeyed` - No description available


* `visitAccessMember(access: AccessMember): void` - 
  * `access: AccessMember` - No description available


* `visitAccessScope(access: AccessScope): void` - 
  * `access: AccessScope` - No description available


* `visitAccessThis(access: any): void` - 
  * `access: any` - No description available


* `visitAssign(assign: any): void` - 
  * `assign: any` - No description available


* `visitBinary(binary: Binary): void` - 
  * `binary: Binary` - No description available


* `visitBindingBehavior(behavior: BindingBehavior): void` - 
  * `behavior: BindingBehavior` - No description available


* `visitCallFunction(call: any): void` - 
  * `call: any` - No description available


* `visitCallMember(call: CallMember): void` - 
  * `call: CallMember` - No description available


* `visitCallScope(call: any): void` - 
  * `call: any` - No description available


* `visitChain(chain: any): void` - 
  * `chain: any` - No description available


* `visitConditional(conditional: Conditional): void` - 
  * `conditional: Conditional` - No description available


* `visitLiteralArray(literal: any): void` - 
  * `literal: any` - No description available


* `visitLiteralObject(literal: any): void` - 
  * `literal: any` - No description available


* `visitLiteralPrimitive(literal: LiteralPrimitive): void` - 
  * `literal: LiteralPrimitive` - No description available


* `visitLiteralString(literal: LiteralString): void` - 
  * `literal: LiteralString` - No description available


* `visitPrefix(prefix: any): void` - 
  * `prefix: any` - No description available


* `visitValueConverter(converter: ValueConverter): void` - 
  * `converter: ValueConverter` - No description available



### FluentEnsure

Part of the fluent rule API. Enables targeting properties and objects with rules.

#### Properties

* `assertInitialized: any` - No description available.
* `mergeRules: any` - No description available.
* `parsers: any` - No description available.
* `rules: ` - Rules that have been defined using the fluent API.

#### Methods


* `ensure(property: ): FluentRules` - Target a property with validation rules.
  * `property: ` - The property to target. Can be the property name or a property accessor
function.



* `ensureObject(): FluentRules` - Targets an object with validation rules.


* `on(target: any): this` - Applies the rules to a class or object, making them discoverable by the StandardValidator.
  * `target: any` - A class or object.




### FluentRuleCustomizer

Part of the fluent rule API. Enables customizing property rules.

#### Properties

* `fluentEnsure: any` - No description available.
* `fluentRules: any` - No description available.
* `parsers: any` - No description available.
* `rule: any` - No description available.

#### Methods


* `between(min: number, max: number): FluentRuleCustomizer` - Applies the &quot;between&quot; NUMBER validation rule to the property.
Value must be between but not equal to the specified min and max.
null and undefined values are considered valid.
  * `min: number` - No description available
  * `max: number` - No description available


* `email(): FluentRuleCustomizer` - Applies the &quot;email&quot; rule to the property.
null, undefined and empty-string values are considered valid.


* `ensure(subject: ): FluentRules` - Target a property with validation rules.
  * `subject: ` - No description available


* `ensureObject(): FluentRules` - Targets an object with validation rules.


* `equals(expectedValue: TValue): FluentRuleCustomizer` - Applies the &quot;equals&quot; validation rule to the property.
null, undefined and empty-string values are considered valid.
  * `expectedValue: TValue` - No description available


* `matches(regex: RegExp): FluentRuleCustomizer` - Applies the &quot;matches&quot; rule to the property.
Value must match the specified regular expression.
null, undefined and empty-string values are considered valid.
  * `regex: RegExp` - No description available


* `max(value: number): FluentRuleCustomizer` - Applies the &quot;max&quot; NUMBER validation rule to the property.
Value must be less than or equal to the specified constraint.
null and undefined values are considered valid.
  * `value: number` - No description available


* `maxItems(count: number): FluentRuleCustomizer` - Applies the &quot;maxItems&quot; ARRAY validation rule to the property.
null and undefined values are considered valid.
  * `count: number` - No description available


* `maxLength(length: number): FluentRuleCustomizer` - Applies the &quot;maxLength&quot; STRING validation rule to the property.
null, undefined and empty-string values are considered valid.
  * `length: number` - No description available


* `min(value: number): FluentRuleCustomizer` - Applies the &quot;min&quot; NUMBER validation rule to the property.
Value must be greater than or equal to the specified constraint.
null and undefined values are considered valid.
  * `value: number` - No description available


* `minItems(count: number): FluentRuleCustomizer` - Applies the &quot;minItems&quot; ARRAY validation rule to the property.
null and undefined values are considered valid.
  * `count: number` - No description available


* `minLength(length: number): FluentRuleCustomizer` - Applies the &quot;minLength&quot; STRING validation rule to the property.
null, undefined and empty-string values are considered valid.
  * `length: number` - No description available


* `on(target: any): FluentEnsure` - Applies the rules to a class or object, making them discoverable by the StandardValidator.
  * `target: any` - A class or object.



* `range(min: number, max: number): FluentRuleCustomizer` - Applies the &quot;range&quot; NUMBER validation rule to the property.
Value must be between or equal to the specified min and max.
null and undefined values are considered valid.
  * `min: number` - No description available
  * `max: number` - No description available


* `required(): FluentRuleCustomizer` - Applies the &quot;required&quot; rule to the property.
The value cannot be null, undefined or whitespace.


* `satisfies(condition: , config?: object): FluentRuleCustomizer` - Applies an ad-hoc rule function to the ensured property or object.
  * `condition: ` - The function to validate the rule.
Will be called with two arguments, the property value and the object.
Should return a boolean or a Promise that resolves to a boolean.

  * `config?: object` - No description available


* `satisfiesRule(name: string, args: ): FluentRuleCustomizer` - Applies a rule by name.
  * `name: string` - The name of the custom or standard rule.
  * `args: ` - The rule&#x27;s arguments.



* `tag(tag: string): this` - Tags the rule instance, enabling the rule to be found easily
using ValidationRules.taggedRules(rules, tag)
  * `tag: string` - No description available


* `then(): this` - Validate subsequent rules after previously declared rules have
been validated successfully. Use to postpone validation of costly
rules until less expensive rules pass validation.


* `when(condition: ): this` - Specifies a condition that must be met before attempting to validate the rule.
  * `condition: ` - A function that accepts the object as a parameter and returns true
or false whether the rule should be evaluated.



* `withMessage(message: string): this` - Specifies rule&#x27;s validation message.
  * `message: string` - No description available


* `withMessageKey(key: string): this` - Specifies the key to use when looking up the rule&#x27;s validation message.
  * `key: string` - No description available



### FluentRules

Part of the fluent rule API. Enables applying rules to properties and objects.

#### Properties

* `fluentEnsure: any` - No description available.
* `parsers: any` - No description available.
* `property: any` - No description available.
* `sequence: number` - Current rule sequence number. Used to postpone evaluation of rules until rules
with lower sequence number have successfully validated. The &quot;then&quot; fluent API method
manages this property, there&#x27;s usually no need to set it directly.
* `static customRules: ` - No description available.

#### Methods


* `between(min: number, max: number): FluentRuleCustomizer` - Applies the &quot;between&quot; NUMBER validation rule to the property.
Value must be between but not equal to the specified min and max.
null and undefined values are considered valid.
  * `min: number` - No description available
  * `max: number` - No description available


* `displayName(name: ): this` - Sets the display name of the ensured property.
  * `name: ` - No description available


* `email(): FluentRuleCustomizer` - Applies the &quot;email&quot; rule to the property.
null, undefined and empty-string values are considered valid.


* `equals(expectedValue: TValue): FluentRuleCustomizer` - Applies the &quot;equals&quot; validation rule to the property.
null and undefined values are considered valid.
  * `expectedValue: TValue` - No description available


* `matches(regex: RegExp): FluentRuleCustomizer` - Applies the &quot;matches&quot; rule to the property.
Value must match the specified regular expression.
null, undefined and empty-string values are considered valid.
  * `regex: RegExp` - No description available


* `max(constraint: number): FluentRuleCustomizer` - Applies the &quot;max&quot; NUMBER validation rule to the property.
Value must be less than or equal to the specified constraint.
null and undefined values are considered valid.
  * `constraint: number` - No description available


* `maxItems(count: number): FluentRuleCustomizer` - Applies the &quot;maxItems&quot; ARRAY validation rule to the property.
null and undefined values are considered valid.
  * `count: number` - No description available


* `maxLength(length: number): FluentRuleCustomizer` - Applies the &quot;maxLength&quot; STRING validation rule to the property.
null, undefined and empty-string values are considered valid.
  * `length: number` - No description available


* `min(constraint: number): FluentRuleCustomizer` - Applies the &quot;min&quot; NUMBER validation rule to the property.
Value must be greater than or equal to the specified constraint.
null and undefined values are considered valid.
  * `constraint: number` - No description available


* `minItems(count: number): FluentRuleCustomizer` - Applies the &quot;minItems&quot; ARRAY validation rule to the property.
null and undefined values are considered valid.
  * `count: number` - No description available


* `minLength(length: number): FluentRuleCustomizer` - Applies the &quot;minLength&quot; STRING validation rule to the property.
null, undefined and empty-string values are considered valid.
  * `length: number` - No description available


* `range(min: number, max: number): FluentRuleCustomizer` - Applies the &quot;range&quot; NUMBER validation rule to the property.
Value must be between or equal to the specified min and max.
null and undefined values are considered valid.
  * `min: number` - No description available
  * `max: number` - No description available


* `required(): FluentRuleCustomizer` - Applies the &quot;required&quot; rule to the property.
The value cannot be null, undefined or whitespace.


* `satisfies(condition: , config?: object): FluentRuleCustomizer` - Applies an ad-hoc rule function to the ensured property or object.
  * `condition: ` - The function to validate the rule.
Will be called with two arguments, the property value and the object.
Should return a boolean or a Promise that resolves to a boolean.

  * `config?: object` - No description available


* `satisfiesRule(name: string, args: ): FluentRuleCustomizer` - Applies a rule by name.
  * `name: string` - The name of the custom or standard rule.
  * `args: ` - The rule&#x27;s arguments.




### GlobalValidationConfiguration

Aurelia Validation Configuration API

#### Properties

* `validationTrigger: any` - No description available.
* `validatorType: any` - No description available.
* `static DEFAULT_VALIDATION_TRIGGER: validateTrigger` - No description available.

#### Methods


* `apply(container: Container): void` - Applies the configuration.
  * `container: Container` - No description available


* `customValidator(type: ValidatorCtor): this` - Use a custom Validator implementation.
  * `type: ValidatorCtor` - No description available


* `defaultValidationTrigger(trigger: validateTrigger): this` - 
  * `trigger: validateTrigger` - No description available


* `getDefaultValidationTrigger(): validateTrigger` - 



### MessageExpressionValidator

No description available.

#### Properties

* `originalMessage: any` - No description available.

#### Methods


* `visitAccessKeyed(access: AccessKeyed): void` - 
  * `access: AccessKeyed` - No description available


* `visitAccessMember(access: AccessMember): void` - 
  * `access: AccessMember` - No description available


* `visitAccessScope(access: AccessScope): void` - 
  * `access: AccessScope` - No description available


* `visitAccessThis(access: any): void` - 
  * `access: any` - No description available


* `visitAssign(assign: any): void` - 
  * `assign: any` - No description available


* `visitBinary(binary: Binary): void` - 
  * `binary: Binary` - No description available


* `visitBindingBehavior(behavior: BindingBehavior): void` - 
  * `behavior: BindingBehavior` - No description available


* `visitCallFunction(call: any): void` - 
  * `call: any` - No description available


* `visitCallMember(call: CallMember): void` - 
  * `call: CallMember` - No description available


* `visitCallScope(call: any): void` - 
  * `call: any` - No description available


* `visitChain(chain: any): void` - 
  * `chain: any` - No description available


* `visitConditional(conditional: Conditional): void` - 
  * `conditional: Conditional` - No description available


* `visitLiteralArray(literal: any): void` - 
  * `literal: any` - No description available


* `visitLiteralObject(literal: any): void` - 
  * `literal: any` - No description available


* `visitLiteralPrimitive(literal: LiteralPrimitive): void` - 
  * `literal: LiteralPrimitive` - No description available


* `visitLiteralString(literal: LiteralString): void` - 
  * `literal: LiteralString` - No description available


* `visitPrefix(prefix: any): void` - 
  * `prefix: any` - No description available


* `visitValueConverter(converter: ValueConverter): void` - 
  * `converter: ValueConverter` - No description available


* `static validate(expression: Expression, originalMessage: string): void` - 
  * `expression: Expression` - No description available
  * `originalMessage: string` - No description available



### PropertyAccessorParser

No description available.

#### Properties

* `parser: any` - No description available.
* `static inject: ` - No description available.

#### Methods


* `parse(property: ): ` - 
  * `property: ` - No description available



### Rules

Sets, unsets and retrieves rules on an object or constructor function.

#### Properties

* `static key: any` - The name of the property that stores the rules.

#### Methods


* `static get(target: any): ` - Retrieves the target&#x27;s rules.
  * `target: any` - No description available


* `static set(target: any, rules: ): void` - Applies the rules to a target.
  * `target: any` - No description available
  * `rules: ` - No description available


* `static unset(target: any): void` - Removes rules from a target.
  * `target: any` - No description available



### StandardValidator

Validates.
Responsible for validating objects and properties.

#### Properties

* `getDisplayName: any` - No description available.
* `getMessage: any` - No description available.
* `lookupFunctions: any` - No description available.
* `messageProvider: any` - No description available.
* `validate: any` - No description available.
* `validateRuleSequence: any` - No description available.
* `static inject: ` - No description available.

#### Methods


* `ruleExists(rules: , rule: Rule): boolean` - Determines whether a rule exists in a set of rules.
  * `rules: ` - The rules to search.
  * `rule: Rule` - No description available


* `validateObject(object: any, rules?: any): Promise` - Validates all rules for specified object and it&#x27;s properties.
  * `object: any` - The object to validate.
  * `rules?: any` - Optional. If unspecified, the rules will be looked up using the metadata
for the object created by ValidationRules....on(class/object)



* `validateProperty(object: any, propertyName: , rules?: any): Promise` - Validates the specified property.
  * `object: any` - The object to validate.
  * `propertyName: ` - The name of the property to validate.
  * `rules?: any` - Optional. If unspecified, the rules will be looked up using the metadata
for the object created by ValidationRules....on(class/object)




### ValidateBindingBehavior

Binding behavior. Indicates the bound property should be validated
when the validate trigger specified by the associated controller&#x27;s
validateTrigger property occurs.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(controller: ValidationController): validateTrigger` - 
  * `controller: ValidationController` - No description available


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateBindingBehaviorBase

No description available.

#### Properties

* `taskQueue: any` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(controller: ValidationController): validateTrigger` - 
  * `controller: ValidationController` - No description available


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateEvent

No description available.

#### Properties

* `controllerValidateResult: ` - In events with type &#x3D;&#x3D;&#x3D; &quot;validate&quot;, this property will contain the result
of validating the instruction (see &quot;instruction&quot; property). Use the controllerValidateResult
to access the validate results specific to the call to &quot;validate&quot;
(as opposed to using the &quot;results&quot; and &quot;errors&quot; properties to access the controller&#x27;s entire
set of results/errors).
* `errors: ` - The controller&#x27;s current array of errors. For an array containing both
failed rules and passed rules, use the &quot;results&quot; property.
* `instruction: ` - The instruction passed to the &quot;validate&quot; or &quot;reset&quot; event. Will be null when
the controller&#x27;s validate/reset method was called with no instruction argument.
* `results: ` - The controller&#x27;s current array of validate results. This
includes both passed rules and failed rules. For an array of only failed rules,
use the &quot;errors&quot; property.
* `type: ` - The type of validate event. Either &quot;validate&quot; or &quot;reset&quot;.

#### Methods



### ValidateManuallyBindingBehavior

Binding behavior. Indicates the bound property will be validated
manually, by calling controller.validate(). No automatic validation
triggered by data-entry or blur will occur.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(): validateTrigger` - 


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateOnBlurBindingBehavior

Binding behavior. Indicates the bound property should be validated
when the associated element blurs.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(): validateTrigger` - 


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateOnChangeBindingBehavior

Binding behavior. Indicates the bound property should be validated
when the associated element is changed by the user, causing a change
to the model.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(): validateTrigger` - 


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateOnChangeOrBlurBindingBehavior

Binding behavior. Indicates the bound property should be validated
when the associated element blurs or is changed by the user, causing
a change to the model.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(): validateTrigger` - 


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateOnChangeOrFocusoutBindingBehavior

No description available.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(): validateTrigger` - 


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateOnFocusoutBindingBehavior

No description available.

#### Properties

* `static inject: ` - No description available.

#### Methods


* `bind(binding: any, source: any, rulesOrController?: , rules?: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available
  * `rulesOrController?: ` - No description available
  * `rules?: any` - No description available


* `getValidateTrigger(): validateTrigger` - 


* `unbind(binding: any): void` - 
  * `binding: any` - No description available



### ValidateResult

The result of validating an individual validation rule.

#### Properties

* `id: number` - A number that uniquely identifies the result instance.
* `message: ` - No description available.
* `object: any` - No description available.
* `propertyName: ` - No description available.
* `rule: any` - No description available.
* `valid: boolean` - No description available.
* `static nextId: any` - No description available.

#### Methods


* `toString(): ` - 



### ValidationController

Orchestrates validation.
Manages a set of bindings, renderers and objects.
Exposes the current list of validation results for binding purposes.

#### Properties

* `bindings: any` - No description available.
* `elements: any` - No description available.
* `errors: ` - Validation errors that have been rendered by the controller.
* `eventCallbacks: any` - No description available.
* `finishValidating: any` - No description available.
* `getAssociatedElements: any` - Gets the elements associated with an object and propertyName (if any).
* `getInstructionPredicate: any` - Interprets the instruction and returns a predicate that will identify
relevant results in the list of rendered validation results.
* `invokeCallbacks: any` - No description available.
* `objects: any` - No description available.
* `processResultDelta: any` - No description available.
* `propertyParser: any` - No description available.
* `renderers: any` - No description available.
* `results: any` - Validation results that have been rendered by the controller.
* `validateTrigger: validateTrigger` - The trigger that will invoke automatic validation of a property used in a binding.
* `validating: boolean` -  Whether the controller is currently validating.
* `validator: any` - No description available.
* `static inject: ` - No description available.

#### Methods


* `addError(message: string, object: TObject, propertyName?: ): ValidateResult` - Adds and renders an error.
  * `message: string` - No description available
  * `object: TObject` - No description available
  * `propertyName?: ` - No description available


* `addObject(object: any, rules?: any): void` - Adds an object to the set of objects that should be validated when validate is called.
  * `object: any` - The object.
  * `rules?: any` - Optional. The rules. If rules aren&#x27;t supplied the Validator implementation will lookup the rules.



* `addRenderer(renderer: ValidationRenderer): void` - Adds a renderer.
  * `renderer: ValidationRenderer` - The renderer.



* `changeTrigger(newTrigger: validateTrigger): void` - Changes the controller&#x27;s validateTrigger.
  * `newTrigger: validateTrigger` - The new validateTrigger



* `registerBinding(binding: Binding, target: Element, rules?: any): void` - Registers a binding with the controller.
  * `binding: Binding` - The binding instance.
  * `target: Element` - The DOM element.
  * `rules?: any` - (optional) rules associated with the binding. Validator implementation specific.



* `removeError(result: ValidateResult): void` - Removes and unrenders an error.
  * `result: ValidateResult` - No description available


* `removeObject(object: any): void` - Removes an object from the set of objects that should be validated when validate is called.
  * `object: any` - The object.



* `removeRenderer(renderer: ValidationRenderer): void` - Removes a renderer.
  * `renderer: ValidationRenderer` - The renderer.



* `reset(instruction?: ValidateInstruction): void` - Resets any rendered validation results (unrenders).
  * `instruction?: ValidateInstruction` - Optional. Instructions on what to reset. If unspecified all rendered results
will be unrendered.



* `resetBinding(binding: Binding): void` - Resets the results for a property associated with a binding.
  * `binding: Binding` - No description available


* `revalidateErrors(): void` - Revalidates the controller&#x27;s current set of errors.


* `subscribe(callback: ): ` - Subscribe to controller validate and reset events. These events occur when the
controller&#x27;s &quot;validate&quot;&quot; and &quot;reset&quot; methods are called.
  * `callback: ` - The callback to be invoked when the controller validates or resets.



* `unregisterBinding(binding: Binding): void` - Unregisters a binding with the controller.
  * `binding: Binding` - The binding instance.



* `validate(instruction?: ValidateInstruction): Promise` - Validates and renders results.
  * `instruction?: ValidateInstruction` - Optional. Instructions on what to validate. If undefined, all
objects and bindings will be validated.



* `validateBinding(binding: Binding): void` - Validates the property associated with a binding.
  * `binding: Binding` - No description available



### ValidationControllerFactory

Creates ValidationController instances.

#### Properties

* `container: any` - No description available.

#### Methods


* `create(validator?: Validator): ValidationController` - Creates a new controller instance.
  * `validator?: Validator` - No description available


* `createForCurrentScope(validator?: Validator): ValidationController` - Creates a new controller and registers it in the current element&#x27;s container so that it&#x27;s
available to the validate binding behavior and renderers.
  * `validator?: Validator` - No description available


* `static get(container: Container): ValidationControllerFactory` - 
  * `container: Container` - No description available



### ValidationErrorsCustomAttribute

No description available.

#### Properties

* `boundaryElement: any` - No description available.
* `controller: ` - No description available.
* `controllerAccessor: any` - No description available.
* `errors: ` - No description available.
* `errorsInternal: any` - No description available.

#### Methods


* `bind(): void` - 


* `interestingElements(elements: ): ` - 
  * `elements: ` - No description available


* `render(instruction: RenderInstruction): void` - 
  * `instruction: RenderInstruction` - No description available


* `sort(): void` - 


* `unbind(): void` - 


* `static inject(): ` - 



### ValidationMessageParser

No description available.

#### Properties

* `bindinqLanguage: any` - No description available.
* `cache: any` - No description available.
* `coalesce: any` - No description available.
* `emptyStringExpression: any` - No description available.
* `nullExpression: any` - No description available.
* `undefinedExpression: any` - No description available.
* `static inject: ` - No description available.

#### Methods


* `parse(message: string): Expression` - 
  * `message: string` - No description available



### ValidationMessageProvider

Retrieves validation messages and property display names.

#### Properties

* `parser: ValidationMessageParser` - No description available.
* `static inject: ` - No description available.

#### Methods


* `getDisplayName(propertyName: , displayName?: ): string` - Formulates a property display name using the property name and the configured
displayName (if provided).
Override this with your own custom logic.
  * `propertyName: ` - The property name.

  * `displayName?: ` - No description available


* `getMessage(key: string): Expression` - Returns a message binding expression that corresponds to the key.
  * `key: string` - The message key.




### ValidationRendererCustomAttribute

No description available.

#### Properties

* `container: any` - No description available.
* `controller: any` - No description available.
* `renderer: any` - No description available.
* `value: any` - No description available.

#### Methods


* `bind(): void` - 


* `created(view: any): void` - 
  * `view: any` - No description available


* `unbind(): void` - 



### ValidationRules

Fluent rule definition API.

#### Properties

* `static parsers: any` - No description available.

#### Methods


* `static customRule(name: string, condition: , message: string, argsToConfig?: ): void` - Defines a custom rule.
  * `name: string` - The name of the custom rule. Also serves as the message key.
  * `condition: ` - The rule function.
  * `message: string` - The message expression
  * `argsToConfig?: ` - A function that maps the rule&#x27;s arguments to a &quot;config&quot;
object that can be used when evaluating the message expression.



* `static ensure(property: ): FluentRules` - Target a property with validation rules.
  * `property: ` - The property to target. Can be the property name or a property accessor function.



* `static ensureObject(): FluentRules` - Targets an object with validation rules.


* `static initialize(messageParser: ValidationMessageParser, propertyParser: PropertyAccessorParser): void` - 
  * `messageParser: ValidationMessageParser` - No description available
  * `propertyParser: PropertyAccessorParser` - No description available


* `static off(target: any): void` - Removes the rules from a class or object.
  * `target: any` - A class or object.



* `static taggedRules(rules: , tag: string): ` - Returns rules with the matching tag.
  * `rules: ` - The rules to search.
  * `tag: string` - The tag to search for.



* `static untaggedRules(rules: ): ` - Returns rules that have no tag.
  * `rules: ` - The rules to search.




### Validator

Validates objects and properties.

#### Properties


#### Methods


* `ruleExists(rules: any, rule: any): boolean` - Determines whether a rule exists in a set of rules.
  * `rules: any` - The rules to search.
  * `rule: any` - No description available


* `validateObject(object: any, rules?: any): Promise` - Validates all rules for specified object and it&#x27;s properties.
  * `object: any` - The object to validate.
  * `rules?: any` - Optional. If unspecified, the implementation should lookup the rules for the
specified object. This may not be possible for all implementations of this interface.



* `validateProperty(object: any, propertyName: string, rules?: any): Promise` - Validates the specified property.
  * `object: any` - The object to validate.
  * `propertyName: string` - The name of the property to validate.
  * `rules?: any` - Optional. If unspecified, the implementation should lookup the rules for the
specified object. This may not be possible for all implementations of this interface.




## Interfaces


### ControllerValidateResult

The result of a call to the validation controller&#x27;s validate method.

#### Properties

* `instruction: ValidateInstruction` - The instruction passed to the controller&#x27;s validate method.
* `results: ` - The validation result of every rule that was evaluated.
* `valid: boolean` - Whether validation passed.

#### Methods



### Parsers

No description available.

#### Properties

* `message: ValidationMessageParser` - No description available.
* `property: PropertyAccessorParser` - No description available.

#### Methods



### RenderInstruction

Defines which validation results to render and which validation results to unrender.

#### Properties

* `kind: ` - The &quot;kind&quot; of render instruction. Either &#x27;validate&#x27; or &#x27;reset&#x27;.
* `render: ` - The results to render.
* `unrender: ` - The results to unrender.

#### Methods



### RenderedError

No description available.

#### Properties

* `error: ValidateResult` - No description available.
* `targets: ` - No description available.

#### Methods



### ResultInstruction

A result to render (or unrender) and the associated elements (if any)

#### Properties

* `elements: ` - The associated elements (if any).
* `result: ValidateResult` - The validation result.

#### Methods



### Rule

A rule definition. Associations a rule with a property or object.

#### Properties

* `condition: ` - No description available.
* `config: object` - No description available.
* `message: ` - No description available.
* `messageKey: string` - No description available.
* `property: RuleProperty` - No description available.
* `sequence: number` - No description available.
* `tag: string` - No description available.
* `when: ` - No description available.

#### Methods



### RuleProperty

Information related to a property that is the subject of validation.

#### Properties

* `displayName: ` - The displayName of the property (or object).
* `name: ` - The property name. null indicates the rule targets the object itself.

#### Methods



### ValidateInstruction

Instructions for the validation controller&#x27;s validate method.

#### Properties

* `object: any` - The object to validate.
* `propertyName: any` - The property to validate. Optional.
* `rules: any` - The rules to validate. Optional.

#### Methods



### ValidationMessages

No description available.

#### Properties


#### Methods



### ValidationRenderer

Renders validation results.

#### Properties


#### Methods


* `render(instruction: RenderInstruction): void` - Render the validation results.
  * `instruction: RenderInstruction` - The render instruction. Defines which results to render and which
results to unrender.




## Constants

* `validationMessages: ValidationMessages` - Dictionary of validation messages. [messageKey]: messageExpression

## Functions


* `configure(frameworkConfig: , callback?: ): void` - Configures the plugin.
  * `frameworkConfig: ` - No description available.
  * `callback?: ` - No description available.


* `getAccessorExpression(fn: string): string` - 
  * `fn: string` - No description available.


* `getPropertyInfo(expression: Expression, source: Scope): ` - Retrieves the object and property name for the specified expression.
  * `expression: Expression` - The expression
  * `source: Scope` - The scope



* `getTargetDOMElement(binding: any, view: any): Element` - Gets the DOM element associated with the data-binding. Most of the time it&#x27;s
the binding.target but sometimes binding.target is an aurelia custom element,
or custom attribute which is a javascript &quot;class&quot; instance, so we need to use
the controller&#x27;s container to retrieve the actual DOM element.
  * `binding: any` - No description available.
  * `view: any` - No description available.

