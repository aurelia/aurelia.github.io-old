# aurelia-i18n Module

> A plugin that provides i18n support.

## Classes


### Backend

No description available.

#### Properties

* `options: AureliaBackendOptions` - No description available.
* `services: any` - No description available.
* `type: ` - No description available.
* `static loader: Loader` - No description available.
* `static type: ` - No description available.

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


* `tr(key: , options?: TOptions): TResult` - 
  * `key: ` - No description available
  * `options?: TOptions` - No description available


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


* `getRelativeTime(time: Date): string` - 
  * `time: Date` - No description available


* `getTimeDiffDescription(diff: number, unit: , timeDivisor: number): ` - 
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


* `toView(value: any, options?: TOptions): string` - 
  * `value: any` - No description available
  * `options?: TOptions` - No description available


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

* `appendNamespaceToCIMode: boolean` - Prefixes the namespace to the returned key when using &#x60;cimode&#x60;
* `appendNamespaceToMissingKey: boolean` - Appends namespace to missing key
* `attributes: ` - No description available.
* `cleanCode: boolean` - Language will be lowercased EN --&gt; en while leaving full locales like en-US
* `compatibilityJSON: ` - Compatibility JSON version
* `contextSeparator: string` - Char to split context from key
* `debug: boolean` - Logs info level to console output. Helps finding issues with loading not working.
* `defaultNS: ` - Default namespace used if not passed to translation function
* `fallbackLng: ` - Language to use if translations in user language are not available.
* `fallbackNS: ` - String or array of namespaces to lookup key if not found in given namespace.
* `ignoreJSONStructure: boolean` - Automatically lookup for a flat key if a nested key is not found an vice-versa
* `initImmediate: boolean` - Triggers resource loading in init function inside a setTimeout (default async behaviour).
Set it to false if your backend loads resources sync - that way calling i18next.t after
init is possible without relaying on the init callback.
* `interpolation: InterpolationOptions` - No description available.
* `joinArrays: ` - Char, eg. &#x27;\n&#x27; that arrays will be joined by
* `keySeparator: ` - Char to separate keys
* `lng: string` - Language to use (overrides language detection)
* `load: ` - Language codes to lookup, given set language is
&#x27;en-US&#x27;: &#x27;all&#x27; --&gt; [&#x27;en-US&#x27;, &#x27;en&#x27;, &#x27;dev&#x27;],
&#x27;currentOnly&#x27; --&gt; &#x27;en-US&#x27;,
&#x27;languageOnly&#x27; --&gt; &#x27;en&#x27;
* `locizeLastUsed: ` - Options for https://github.com/locize/locize-lastused
* `lowerCaseLng: boolean` - Language will be lowercased eg. en-US --&gt; en-us
* `maxParallelReads: number` - Limit parallelism of calls to backend
This is needed to prevent trying to open thousands of
sockets or file descriptors, which can cause failures
and actually make the entire process take longer.
* `maxRetries: number` - The maximum number of retries to perform.
Note that retries are only performed when a request has no response
and throws an error.
The default value is used if value is set below 0.
* `missingInterpolationHandler: ` - Gets called in case a interpolation value is undefined. This method will not be called if the value is empty string or null
* `missingKeyHandler: ` - Used for custom missing key handling (needs saveMissing set to true!)
* `missingKeyNoValueFallbackToKey: boolean` - Used to not fallback to the key as default value, when using saveMissing functionality.
i.e. when using with i18next-http-backend this will result in having a key with an empty string value.
* `nonExplicitSupportedLngs: boolean` - If true will pass eg. en-US if finding en in supportedLngs
* `ns: ` - String or array of namespaces to load
* `nsSeparator: ` - Char to split namespace from key
* `partialBundledLanguages: boolean` - Allow initializing with bundled resources while using a backend to load non bundled ones.
* `pluralSeparator: string` - Char to split plural from key
* `postProcess: ` - String or array of postProcessors to apply per default
* `postProcessPassResolved: boolean` - passthrough the resolved object including &#x27;usedNS&#x27;, &#x27;usedLang&#x27; etc into options object of postprocessors as &#x27;i18nResolved&#x27; property
* `preload: ` - Array of languages to preload. Important on server-side to assert translations are loaded before rendering views.
* `react: ReactOptions` - Options for react - check documentation of plugin
* `resources: Resource` - Resources to initialize with (if not using loading or not appending using addResourceBundle)
* `retryTimeout: number` - Set how long to wait, in milliseconds, betweeen retries of failed requests.
This number is compounded by a factor of 2 for subsequent retry.
The default value is used if value is set below 1ms.
* `returnDetails: boolean` - Returns an object that includes information about the used language, namespace, key and value
* `returnEmptyString: boolean` - Allows empty string as valid translation
* `returnNull: boolean` - Allows null values as valid translation
* `returnObjects: boolean` - Allows objects as valid translation result
* `saveMissing: boolean` - Calls save missing key function on backend if key not found.
* `saveMissingPlurals: boolean` - Calls save missing key function on backend if key not found also for plural forms.
* `saveMissingTo: ` - No description available.
* `simplifyPluralSuffix: boolean` - Will use &#x27;plural&#x27; as suffix for languages only having 1 plural form, setting it to false will suffix all with numbers
* `skipTranslationOnMissingKey: boolean` - No description available.
* `supportedLngs: ` - Array of allowed languages
* `updateMissing: boolean` - Experimental: enable to update default values using the saveMissing
(Works only if defaultValue different from translated value.
Only useful on initial development or when keeping code as source of truth not changing values outside of code.
Only supported if backend supports it already)

#### Methods


* `overloadTranslationOptionHandler(args: ): TOptions` - Sets defaultValue
  * `args: ` - No description available.


* `parseMissingKeyHandler(key: string, defaultValue?: string): any` - Receives a key that was not found in &#x60;t()&#x60; and returns a value, that will be returned by &#x60;t()&#x60;
  * `key: string` - No description available.
  * `defaultValue?: string` - No description available.


* `returnedObjectHandler(key: string, value: string, options: any): void` - Gets called if object was passed in as key but returnObjects was set to false
  * `key: string` - No description available.
  * `value: string` - No description available.
  * `options: any` - No description available.



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

