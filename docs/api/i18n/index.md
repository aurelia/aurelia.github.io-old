# I18N Module

> A plugin that provides i18n support.

## Classes


### Backend

No description available.

#### Properties

* `options: AureliaBackendOptions` - No description available.
* `services: any` - No description available.
* `type: string` - No description available.
* `static loader: Loader` - No description available.
* `static type: string` - No description available.

#### Methods


* `create(_languages: , _namespace: string, _key: string, _fallbackValue: string): void` - 
  * `_languages: ` - No description available
  * `_namespace: string` - No description available
  * `_key: string` - No description available
  * `_fallbackValue: string` - No description available


* `init(services: any, options?: AureliaBackendOptions): void` - 
  * `services: any` - No description available
  * `options?: AureliaBackendOptions` - No description available


* `loadUrl(url: string, callback: LoadCallback): Promise` - 
  * `url: string` - No description available
  * `callback: LoadCallback` - No description available


* `read(language: string, namespace: string, callback: LoadCallback): void` - 
  * `language: string` - No description available
  * `namespace: string` - No description available
  * `callback: LoadCallback` - No description available


* `readMulti(languages: , namespaces: , callback: LoadCallback): void` - 
  * `languages: ` - No description available
  * `namespaces: ` - No description available
  * `callback: LoadCallback` - No description available


* `static with(loader: Loader): Backend` - 
  * `loader: Loader` - No description available



### DfBindingBehavior

No description available.

#### Properties

* `signalBindingBehavior: any` - No description available.

#### Methods


* `bind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `static inject(): ` - 



### DfValueConverter

No description available.

#### Properties

* `service: any` - No description available.

#### Methods


* `toView(value: any, dfOrOptions?: , locale?: string): any` - 
  * `value: any` - No description available
  * `dfOrOptions?: ` - No description available
  * `locale?: string` - No description available


* `static inject(): ` - 



### I18N

No description available.

#### Properties

* `Intl: Intl` - No description available.
* `ea: any` - No description available.
* `globalVars: any` - No description available.
* `i18next: AureliaEnhancedI18Next` - No description available.
* `i18nextDeferred: Promise` - No description available.
* `signaler: any` - No description available.

#### Methods


* `df(options?: DateTimeFormatOptions, locales?: ): DateTimeFormat` - 
  * `options?: DateTimeFormatOptions` - No description available
  * `locales?: ` - No description available


* `getLocale(): string` - 


* `i18nextReady(): Promise` - 


* `nf(options?: NumberFormatOptions, locales?: ): NumberFormat` - 
  * `options?: NumberFormatOptions` - No description available
  * `locales?: ` - No description available


* `registerGlobalVariable(key: string, value: any): void` - 
  * `key: string` - No description available
  * `value: any` - No description available


* `setLocale(locale: string): Promise` - 
  * `locale: string` - No description available


* `setup(options?: ): Promise` - 
  * `options?: ` - No description available


* `tr(key: , options?: i18next.TranslationOptions): any` - 
  * `key: ` - No description available
  * `options?: i18next.TranslationOptions` - No description available


* `uf(numberLike: string, locale?: string): number` - 
  * `numberLike: string` - No description available
  * `locale?: string` - No description available


* `unregisterGlobalVariable(key: string): void` - 
  * `key: string` - No description available


* `updateTranslations(el: HTMLElement): void` - Scans an element for children that have a translation attribute and
updates their innerHTML with the current translation values.
  * `el: HTMLElement` - HTMLElement to search within



* `updateValue(node: , value: string, params: any): void` - 
  * `node: ` - No description available
  * `value: string` - No description available
  * `params: any` - No description available


* `static inject(): ` - 



### LazyOptional

No description available.

#### Properties

* `key: any` - No description available.

#### Methods


* `get(container: Container): ` - 
  * `container: Container` - No description available


* `static of(key: any): LazyOptional` - 
  * `key: any` - No description available



### NfBindingBehavior

No description available.

#### Properties

* `signalBindingBehavior: any` - No description available.

#### Methods


* `bind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `static inject(): ` - 



### NfValueConverter

No description available.

#### Properties

* `service: any` - No description available.

#### Methods


* `toView(value: any, nfOrOptions?: , locale?: string): any` - 
  * `value: any` - No description available
  * `nfOrOptions?: ` - No description available
  * `locale?: string` - No description available


* `static inject(): ` - 



### RelativeTime

No description available.

#### Properties

* `ea: any` - No description available.
* `service: any` - No description available.

#### Methods


* `addTranslationResource(key: string, translation: any): void` - 
  * `key: string` - No description available
  * `translation: any` - No description available


* `getRelativeTime(time: Date): any` - 
  * `time: Date` - No description available


* `getTimeDiffDescription(diff: number, unit: , timeDivisor: number): any` - 
  * `diff: number` - No description available
  * `unit: ` - No description available
  * `timeDivisor: number` - No description available


* `setup(locales?: ): void` - 
  * `locales?: ` - No description available


* `static inject(): ` - 



### RtBindingBehavior

No description available.

#### Properties

* `signalBindingBehavior: any` - No description available.

#### Methods


* `bind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `static inject(): ` - 



### RtValueConverter

No description available.

#### Properties

* `service: any` - No description available.

#### Methods


* `toView(value: any): any` - 
  * `value: any` - No description available


* `static inject(): ` - 



### TBindingBehavior

No description available.

#### Properties

* `signalBindingBehavior: any` - No description available.

#### Methods


* `bind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `unbind(binding: any, source: any): void` - 
  * `binding: any` - No description available
  * `source: any` - No description available


* `static inject(): ` - 



### TCustomAttribute

No description available.

#### Properties

* `ea: any` - No description available.
* `element: any` - No description available.
* `lazyParams: any` - No description available.
* `params: any` - No description available.
* `service: any` - No description available.
* `subscription: any` - No description available.
* `value: any` - No description available.

#### Methods


* `bind(): void` - 


* `paramsChanged(newValue: any, newParams: any): void` - 
  * `newValue: any` - No description available
  * `newParams: any` - No description available


* `unbind(): void` - 


* `valueChanged(newValue: any): void` - 
  * `newValue: any` - No description available


* `static configureAliases(aliases: ): void` - 
  * `aliases: ` - No description available


* `static inject(): ` - 



### TParamsCustomAttribute

No description available.

#### Properties

* `element: Element` - No description available.
* `service: any` - No description available.

#### Methods


* `valueChanged(): void` - 


* `static configureAliases(aliases: ): void` - 
  * `aliases: ` - No description available


* `static inject(): ` - 



### TValueConverter

No description available.

#### Properties

* `service: any` - No description available.

#### Methods


* `toView(value: any, options?: i18next.TranslationOptions): any` - 
  * `value: any` - No description available
  * `options?: i18next.TranslationOptions` - No description available


* `static inject(): ` - 



## Interfaces


### AureliaBackendOptions

No description available.

#### Properties

* `loadPath: LoadPathOption` - No description available.

#### Methods


* `parse(data: string, url: string): string` - 
  * `data: string` - No description available.
  * `url: string` - No description available.



### AureliaEnhancedI18Next

No description available.

#### Properties

* `options: AureliaEnhancedOptions` - No description available.

#### Methods



### AureliaEnhancedOptions

No description available.

#### Properties

* `attributes: ` - No description available.
* `skipTranslationOnMissingKey: boolean` - No description available.

#### Methods



### I18NEventPayload

No description available.

#### Properties

* `newValue: string` - No description available.
* `oldValue: string` - No description available.

#### Methods



## Constants

* `I18N_EA_SIGNAL: ` - No description available.

## Functions


* `configure(frameworkConfig: FrameworkConfiguration, cb: ): AureliaEnhancedI18Next` - 
  * `frameworkConfig: FrameworkConfiguration` - No description available.
  * `cb: ` - No description available.

