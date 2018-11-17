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

* `exists: TranslationFunction` - Uses the same resolve functionality as the t function and returns true if a key exists.
* `format: FormatFunction` - Exposes interpolation.format function added on init.
* `isInitialized: boolean` - Is initialized
* `language: string` - Is set to the current detected or set language.
If you need the primary used language depending on your configuration (whilelist, load) you will prefer using i18next.languages[0].
* `languages: ` - Is set to an array of language-codes that will be used it order to lookup the translation value.
* `options: AureliaEnhancedOptions` - No description available.
* `t: TranslationFunction` - Please have a look at the translation functions like interpolation, formatting and plurals for more details on using it.

#### Methods


* `addResource(lng: string, ns: string, key: string, value: string, options?: ): void` - Adds one key/value.
  * `lng: string` - No description available.
  * `ns: string` - No description available.
  * `key: string` - No description available.
  * `value: string` - No description available.
  * `options?: ` - No description available.


* `addResourceBundle(lng: string, ns: string, resources: any, deep?: boolean, overwrite?: boolean): void` - Adds a complete bundle.
Setting deep param to true will extend existing translations in that file.
Setting overwrite to true it will overwrite existing translations in that file.
  * `lng: string` - No description available.
  * `ns: string` - No description available.
  * `resources: any` - No description available.
  * `deep?: boolean` - No description available.
  * `overwrite?: boolean` - No description available.


* `addResources(lng: string, ns: string, resources: any): void` - Adds multiple key/values.
  * `lng: string` - No description available.
  * `ns: string` - No description available.
  * `resources: any` - No description available.


* `changeLanguage(lng: string, callback?: Callback): void` - Changes the language. The callback will be called as soon translations were loaded or an error occurs while loading.
HINT: For easy testing - setting lng to &#x27;cimode&#x27; will set t function to always return the key.
  * `lng: string` - No description available.
  * `callback?: Callback` - No description available.


* `cloneInstance(options?: InitOptions, callback?: Callback): i18n` - Creates a clone of the current instance. Shares store, plugins and initial configuration.
Can be used to create an instance sharing storage but being independent on set language or namespaces.
  * `options?: InitOptions` - No description available.
  * `callback?: Callback` - No description available.


* `createInstance(options?: InitOptions, callback?: Callback): i18n` - Will return a new i18next instance.
Please read the options page for details on configuration options.
Providing a callback will automatically call init.
The callback will be called after all translations were loaded or with an error when failed (in case of using a backend).
  * `options?: InitOptions` - No description available.
  * `callback?: Callback` - No description available.


* `dir(lng?: string): ` - Returns rtl or ltr depending on languages read direction.
  * `lng?: string` - No description available.


* `getFixedT(lng: , ns?: ): TranslationFunction` - Returns a t function that defaults to given language or namespace.
Both params could be arrays of languages or namespaces and will be treated as fallbacks in that case.
On the returned function you can like in the t function override the languages or namespaces by passing them in options or by prepending namespace.
  * `lng: ` - No description available.
  * `ns?: ` - No description available.


* `getResource(lng: string, ns: string, key: string, options?: ): any` - Gets one value by given key.
  * `lng: string` - No description available.
  * `ns: string` - No description available.
  * `key: string` - No description available.
  * `options?: ` - No description available.


* `getResourceBundle(lng: string, ns: string): any` - Returns a resource bundle.
  * `lng: string` - No description available.
  * `ns: string` - No description available.


* `hasResourceBundle(lng: string, ns: string): boolean` - Checks if a resource bundle exists.
  * `lng: string` - No description available.
  * `ns: string` - No description available.


* `init(options: InitOptions, callback?: Callback): i18n` - The default export of the i18next module is an i18next instance ready to be initialized by calling init.
You can create additional instances using the createInstance function.
  * `options: InitOptions` - Initial options.
  * `callback?: Callback` - will be called after all translations were loaded or with an error when failed (in case of using a backend).



* `loadLanguages(lngs: , callback: Callback): void` - Loads additional languages not defined in init options (preload).
  * `lngs: ` - No description available.
  * `callback: Callback` - No description available.


* `loadNamespaces(ns: , callback: Callback): void` - Loads additional namespaces not defined in init options.
  * `ns: ` - No description available.
  * `callback: Callback` - No description available.


* `loadResources(callback?: ): void` - 
  * `callback?: ` - No description available.


* `off(event: string, listener: ): void` - Remove event listener
  * `event: string` - No description available.
  * `listener: ` - No description available.


* `on(event: , callback: ): void` - Gets fired after initialization.
  * `event: ` - No description available.
  * `callback: ` - No description available.


* `reloadResources(lngs?: , ns?: ): void` - Reloads resources on given state. Optionally you can pass an array of languages and namespaces as params if you don&#x27;t want to reload all.
  * `lngs?: ` - No description available.
  * `ns?: ` - No description available.


* `removeResourceBundle(lng: string, ns: string): void` - Removes an existing bundle.
  * `lng: string` - No description available.
  * `ns: string` - No description available.


* `setDefaultNamespace(ns: string): void` - Changes the default namespace.
  * `ns: string` - No description available.


* `use(module: any): i18n` - The use function is there to load additional plugins to i18next.
For available module see the plugins page and don&#x27;t forget to read the documentation of the plugin.
  * `module: any` - No description available.



### AureliaEnhancedOptions

No description available.

#### Properties

* `appendNamespaceToCIMode: boolean` - prefixes the namespace to the returned key when using cimode
* `appendNamespaceToMissingKey: boolean` - appends namespace to missing key
* `attributes: ` - No description available.
* `backend: object` - options for backend - check documentation of plugin
* `cache: object` - options for cache layer - check documentation of plugin
* `compatibilityJSON: string` - Compatibility JSON version
* `contextSeparator: string` - char to split context from key
* `debug: boolean` - logs info level to console output. Helps finding issues with loading not working.
* `defaultNS: string` - default namespace used if not passed to translation function
* `detection: object` - options for language detection - check documentation of plugin
* `fallbackLng: ` - language to use if translations in user language are not available.
* `fallbackNS: ` - string or array of namespaces to lookup key if not found in given namespace.
* `initImmediate: boolean` - triggers resource loading in init function inside a setTimeout (default async behaviour).
Set it to false if your backend loads resources sync - that way calling i18next.t after
init is possible without relaying on the init callback.
* `interpolation: InterpolationOptions` - No description available.
* `joinArrays: ` - char, eg. &#x27;\n&#x27; that arrays will be joined by
* `keySeparator: ` - char to separate keys
* `lng: string` - language to use (overrides language detection)
* `load: ` - language codes to lookup, given set language is
&#x27;en-US&#x27;: &#x27;all&#x27; --&gt; [&#x27;en-US&#x27;, &#x27;en&#x27;, &#x27;dev&#x27;],
&#x27;currentOnly&#x27; --&gt; &#x27;en-US&#x27;,
&#x27;languageOnly&#x27; --&gt; &#x27;en&#x27;
* `lowerCaseLng: boolean` - language will be lowercased eg. en-US --&gt; en-us
* `missingKeyHandler: ` - Used for custom missing key handling (needs saveMissing set to true!)
* `nonExplicitWhitelist: boolean` - if true will pass eg. en-US if finding en in whitelist
* `ns: ` - string or array of namespaces to load
* `nsSeparator: ` - char to split namespace from key
* `pluralSeparator: string` - char to split plural from key
* `postProcess: ` - string or array of postProcessors to apply per default
* `preload: ` - array of languages to preload. Important on serverside to assert translations are loaded before rendering views.
* `react: ReactOptions` - options for react - check documentation of plugin
* `resources: Resource` - resources to initialize with (if not using loading or not appending using addResourceBundle)
* `returnEmptyString: boolean` - allows empty string as valid translation
* `returnNull: boolean` - allows null values as valid translation
* `returnObjects: boolean` - allows objects as valid translation result
* `saveMissing: boolean` - calls save missing key function on backend if key not found
* `saveMissingTo: ` - No description available.
* `simplifyPluralSuffix: boolean` - will use &#x27;plural&#x27; as suffix for languages only having 1 plural form, setting it to false will suffix all with numbers
* `skipTranslationOnMissingKey: boolean` - No description available.
* `whitelist: ` - 	array of allowed languages

#### Methods


* `overloadTranslationOptionHandler(args: ): TranslationOptions` - default: sets defaultValue
  * `args: ` - No description available.


* `parseMissingKeyHandler(key: string): any` - receives a key that was not found in &#x60;t()&#x60; and returns a value, that will be returned by &#x60;t()&#x60;
  * `key: string` - No description available.


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

