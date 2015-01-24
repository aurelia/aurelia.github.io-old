# Docs

We've got a very rich set of docs planned for Aurelia. Unfortunately, we haven't quite finished them yet. During this early preview period, we're providing you with a simple "cheat sheet" containing examples of the most common tasks you might want to perform. If you have questions, we hope that you will join us on our [gitter channel](https://gitter.im/aurelia/discuss).

## Startup & Configuration

Most platforms have a "main" or entry point for code execution. Aurelia is no different. If you've read the [Get Started](/get-started.html) page, then you've seen the `aurelia-app` attribute. Simply place this on an HTML element and Aurelia's bootstrapper will load an _app.js_ and _app.html_, databind them together and inject them into the DOM element on which you placed that attribute. If you don't want to use that convention, simply provide a value to the attribute indicating which view-model to load. For example `<body aurelia-app="todo">` will result in a _todo.js_ and _todo.html_ being loaded instead.

The `aurelia-app` attribute is convenient for getting started, but often times you want to configure the framework or run some code prior to displaying anything to the user. So chances are, as your project progresses, you will migrate towards using `aurelia-main`.

>**Note:** If you are using AtScript, add an `atscript` attribute to the DOM element for your app. If you are using ES5 instead of ES6, add an `es5` attribute. Doing so will "turn on" functionality with makes using these languages easier.

**What is the difference?**

`aurelia-app` instantiates an Aurelia app and pre-configures it with the default set of options for the framework, then loads your application view-model. `aurelia-main` loads your custom configuration module, _main.js_ by default, then invokes your `configure` function, passing it the Aurelia object which you can then use to configure the framework yourself and decide what, when and where to display your UI. Here's an example _main.js_ file:

```javascript
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('./path/to/plugin');

  aurelia.start().then(a => a.setRoot('app', document.body));
}
```

With the exception of the custom plugin, this code is essentially what `aurelia-app` normally does for you. When you switch to `aurelia-main` you need to configure these things yourself, but you can also install custom plugins, set up the depedency injection container with some services and install global resources to be used in view templates.

>**Note:** To turn on AtScript when manually configuring, call `aurelia.use.atscript()` and to turn on ES5, call `aurelia.use.es5()`.

### Logging

Aurelia has a simple logging abstraction that the framework itself uses. By default it is a no-op. The configuration above shows how to install an appender which will take the log data and output it the console. You can also see how to set the log level. Options for this setting include: `none`, `error`, `warn`, `info` and `debug`.

You can easily create your own appenders. Simply implement a class that matches the appender interface. The best way to see how to do this is to look at our own [console log appender's source](https://github.com/aurelia/logging-console/blob/master/src/index.js).

### Plugins

A _plugin_ is simply a module with an exported `install` function. During startup Aurelia will load all plugin modules and call their `install` functions, passing to them the Aurelia instance so that they can configure the framework appropriately. Plugins can optionally return a `Promise` from their `install` function in order to perform asynchronous configuration tasks. When writing a plugin, be sure to follow these rules:

1. Use a flat directory structure. Do not locate behaviors or views in subdirectories.
2. Your file name and your behavior name must match.
3. Explicilty supply all metadata, including a View Strategy for Custom Elements.

> **Note:** Regarding #2 and #3: Do not rely on naming conventions inside plugins. You do not know how the consumer of your plugin will change Aurelia's conventions. 3rd party plugins should be explicit in order to ensure that they function correctly in different contexts.

### The Aurelia Object

Since both a custom _main_ module and plugins do their work by interacting with the Aurelia object, we provide a brief explanation of that API in code below:

```javascript
export class Aurelia {
  loader:Loader; //the module loader
  container:Container; //the app-level dependency injection container
  resources:ResourceRegistry; //the app level view resource registery
  use:Plugins; //the plugins api

  withInstance(type, instance):Aurelia; //DI helper method (pass through to container)
  withSingleton(type, implementation):Aurelia; //DI helper method (pass through to container)
  withResources(resources):Aurelia; //resource helper method

  start():Promise; //starts the framework, causing plugins to be installed and resources to be loaded
  setRoot(root, applicationHost):Promise; //set your "root" or "app" view-model and display it
}
```

## Views and View Models

In Aurelia, user interface elements are composed of _view_ and _view-model_ pairs. The _view_ is written with HTML and is rendered into the DOM. The _view-model_ is written with JavaScript and provides data and behavior to the _view_. The templating engine and/or DI are responsible for creating these pairs and enforcing a predictable lifecycle for the process. Once instantiated, Aurelia's powerful _databinding_ links the two pieces together allowing changes in your data to be reflected in the _view_ and vice versa.

### Dependency Injection (DI)

View-models and other interface elements, such as Template Controllers and Attached Behaviors, are created as classes which are instantiated by the framework using a dependency injection container. Code written in this style is easy to modularize and test. Rather than creating large classes, you can break things down into small objects that collaborate to achieve a goal. The DI can then put the pieces together for you at runtime.

In order to leverage DI you simply need to add a bit of metadata to your class to tell the framwork what it should pass to its constructor. Here's an example of a view-model that depends on Aurelia's HttpClient.

```javascript
import {HttpClient} from 'aurelia-http-client';

export class CustomerDetail{
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }
}
```

Just provide a static method named `inject` that returns an array of things to inject.

> **Note:** If writing in TypeScript or CofeeScript, you can use a static array property instead of a method. In ES5 you can add the property onto the constructor itself. You can also do this with ES6 but we enable the static method option since it can be located closer to the constructor in Vanilla JS. If you are using AtScript, you can actually take advantage of type annotations by defining your constructor like this: `constructor(http:HttpClient)`. (Before this will work you need to place the `atscript` attribute on your application host element or call `aurelia.use.atscript()` manually.)

The dependencies in your inject array don't have to be just constructor types. They can also be instances of `resolvers`. For example, have a look at this:

```javascript
import {Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class CustomerDetail{
    static inject() { return [Lazy.of(HttpClient)]; }
    constructor(getHTTP){
        this.getHTTP = getHTTP;
    }
}
```

The `Lazy` resolver doesn't actually provide an instance of `HttpClient`. Instead, it provides a function which, when called, will return you an instance of HttpClient. There are several different resolvers out-of-the-box and you can create your own by authoring a class that inherits from `Resolver`. Here's a list of what we provide for you:

* `Lazy` - Injects a function for lazily evaluating the dependency.
    * ex. `Lazy.of(HttpClient)`
* `All` - Injects an array of all services registered with the provided key.
    * ex. `All.of(Plugin)`
* `Optional` - Injects an instance of a class only if it already exists in the container; null otherwise.
    * ex. `Optional.of(LoggedInUser)`
* `Parent` - Bypasses the current DI container and attempts to inject an instance stored in a parent container.
    * ex. `Parent.of(Router)`

In addition to these resolvers, you can also use `Registration` annotations to specify the default registration or lifetime for an instance. By default, the DI container assumes that everything is a singleton instance; one instance per container. However, you can use a registration annotation to change this. Here's an example:

```javascript
import {Metadata} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class CustomerDetail{
    static metadata(){ return Metadata.transient(); }
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }
}
```

Now, each time the DI container is asked for an instance of `CustomerDetail` the container will return a new instance, rather than a singleton. `Singleton` and `Transient` registrations are provided out-of-the-box, but you can create your own by writing a class that inherits from `Registration`.

> **Note:** This last example introduces _metadata_ to provide contextual information to the framework. You will see metadata again when we talk about behaviors.

## Templating

Aurelia's templating engine is responsible for loading your views and their imported resources, compiling your HTML for optimal performance and rendering your UI to the screen. To create a view, all you need to do is author an HTML file with an `HTMLTemplate` inside. Here's a simple view:

```markup
<template>
    <div>Hello World!</div>
</template>
```

Everything inside the `template` tag will be managed by Aurelia. However, since Aurelia uses HTMLImport technology to load views, you can also include links, and they will be properly loaded, including relative resource resolution semantics. In other words, you can do this:

```markup
<link rel="stylesheet" type="text/css" href="./hello.css">

<template>
    <div class="hello">Hello World!</div>
</template>
```

This enables you to dynamically load per-view style sheets and even Web Components on the fly.

Any time you want to import an Aurelia-specific resource, such as an Aurelia _Custom Element_, _Attached Behavior_, _Template Controller_ or _Value Converter_, you should use an `import` element inside your view instead. Here's an example:

```markup
<template>
  <import from='./nav-bar'></import>

  <nav-bar router.bind="router"></nav-bar>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>
```

In this case `nav-bar` is an Aurelia _Custom Element_ which we've imported for use. Using Aurelia's `import` element causes the framework's resource pipeline to process the imported item, which has the following advantages:

* Deduping - The resource is downloaded once in the app. Even if other views import the same element, it will not be downloaded again.
* One-time Compilation - Templates for Custom Elements imported this way are compiled once for the entire application.
* Local Scope - The imported resource is only visible inside the view that imports it, reducing the likelihood of name conflicts.
* Renaming - Resources can be renamed upon import if two 3rd party resources with the same name need to be used in the same view.
    - ex. `<import from="./nav-bar" as="foo-bar"></import>` - Now instead of using a `nav-bar` element you can use a `foo-bar` element. (This is based on ES6 where renaming is considered a replacement for using an Alias because it strictly renames the type.)
* Packages - The import can point to a module with multiple resources which will all be imported into the same view.
* Extensibility - You can define new types of resources which, when imported in this way, can execute custom loading (async one-time) and registration (once per-view).
* ES6 - Code is loaded by the ES6 loader rather than the HTMLImport mechanism, enabling all the features and extensibility of your loader.

In your view you will often leverage the different types of resources mentioned above as well as databinding.

>**Note:** You may be concerned about the tediousness of having to import things into each view. Remember, during the bootstrapping phase you can configure Aurelia with global resources to be available in every view.

### Databinding

Databinding allows you to link the state and behavior in a JavaScript object to an HTML view. When this link is established, any changes in linked properties can be synced in one or both directions. Changes in the JavaScript object can be reflected in the view and changes in the view can be reflected in the JavaScript object. To establish this link, you will leverage "binding commands" in your HTML. Binding commands are clearly identifiable via their use of the "." as a kind of binding operator. Whenever an HTML attribute contains a ".", the compiler will pass the attribute name and value off to the binding language for interpretation. The result is one or more binding expressions that are capable of establishing the linkage when the view is created.

You can extend the system with your own binding commands, but Aurelia provides a collection to cover the most common use cases.

#### bind, one-way, two-way & one-time

The most common binding command is `.bind`. This will cause the property to be bound using a "one-way" binding for all attributes, except form element values, which are bound with a "two-way" binding.

_What does this mean though?_

One-way binding means that changes flow from your JavaScript view-models into the view, not from the view into the view-model. Two-way binding means that changes flow in both directions. `.bind` attempts to use a sensible default by assuming that if you are binding to a form element's value property then you probably wish the changes made in the form to flow into your view-model. For everything else it uses one-way binding, especially since, in many cases, two-way binding to non-form elements would be nonsensical. Here's a small binding example using `.bind`:

```markup
<input type="text" value.bind="firstName">
<a href.bind="url">Aurelia</a>
```

In the above example, the `input` will have its `value` bound to the `firstName` property on the view-model. Changes in the `firstName` property will update the `input.value` and changes in the `input.value` will update the `firstName` property. On the other hand, the `a` tag will have its `href` bound to the `url` property on the view-model. Only changes in the `url` property will flow into the `href` of the `a` tag, not the other way.

You can always be explicit and use `.one-way` or `.two-way` in place of `.bind`though. A common case where this is required is with Web Components that function as input-type controls. So, you can imagine doing something like this:

```markup
<markdown-editor value.two-way="markdown"></markdown-editor>
```

In order to optimize performance and minimize CPU and memory usage, you can alternatively leverage the `.one-time` binding command to flow data from the view-model into the view "one time". This will happen during the initial binding phase, after which no synchronization will occur.

#### delegate, trigger & call

Binding commands don't only connect properties and attributes, but can be used to trigger behavior. For example, if you want to invoke a method on the view-model when a button is clicked, you would use the `trigger` command like this:

```markup
<button click.trigger="sayHello()">Say Hello</button>
```

When the button is clicked, the `sayHello` method on the view-model will be invoked. That said, adding event handlers to every single element like this isn't very efficient, so often times you will want to use event delegation. To do that, use the `.delegate` command. Here's the same example but with event delegation instead:

```markup
<button click.delegate="sayHello()">Say Hello</button>
```

> **Note:** If you aren't familiar with event delegation, it's a technique that uses the bubbling nature of DOM events. When using `.delegete` a single event handler is attached to the document, rather than on each element. When the element's event is fired, it bubbles up the DOM until it reaches the document, where it is handled. This is a more memory efficient way of handling events and it's recommended to use this as your default mechanism.

All of this works against DOM events in some way or another. Occasionally you may have a custom Aurelia behavior that wants a reference to your function directly so that it can invoke it manually at a later time. To pass a function reference, use the `.call` binding (since the behavior will _call_ it later):

```markup
<div touch.call="sayHello()">Say Hello</button>
```

Now the attached behavior will get a function that it can call to invoke your `sayHello()` code.

#### string interpolation

Sometimes you need to bind properties directly into the content of the document or interleave them within an attribute value. For this, you can use the string interpolation syntax `${expression}`. String interpolation is a one-way binding, the output of which is converted to a string. Here's an example:

```markup
<span>${fullName}</span>
```

The `fullName` property will be interpolated directly into the span's content. You can also use this to handle css class bindings like so:

```markup
<div class="dot ${color} ${isHappy ? 'green' : 'red'}"></div>
```

In this snippet "dot" is a statically present class and "green" is present only if `isHappy` is true, otherwise the "red" class is present. Additionally, whatever the value of `color` is...that is added as class.

> **Note:** You can use simple expressions inside your bindings. Don't try to do anything too fancy. You don't want code in your view. You only want to establish the linkage between the view and its view-model.

#### ref

In addition to commands and interpolation, the binding language recognizes the use of a special attribute: `ref`. By using `ref` you can create a local name for an element which can then be referenced in another binding expression. It will also be set as a property on the view-model, so you can access it through code. Here's a neat example of using `ref`:

```markup
<input type="text" ref="name"> ${name.value}
```

You can also use the special `.view-model` binding in conjuction with `ref` to get the view-model instance that backs an Aurelia Custom Element. By using this technique, you can connect different components to each other like so:

```markup
<i-produce-a-value ref.view-model="producer"></i-produce-a-value>
<i-consume-a-value input.bind="producer.output"></i-consume-a-value>
```

### Behaviors

In addition to databinding, you also have the power of Aurelia behaviors to use in your views. There are three types of behaviors provided out of the box:

* Custom Elements - Extend HTML with new tags! Your custom elements can have their own views (which use databinding and other behaviors) and optionally leverage [ShadowDOM](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/) (even if the browser doesn't support it).
* Attached Behaviors - Extend HTML with new attributes which can be added to existing or custom elements. These attributes "attach" new behavior to the elements.
* Template Controllers - Create new mechanisms for rendering templates. A template controller is a class that can dynamically create UI and inject it into the DOM.

Naturally, all of this works seemlessly with databinding. Let's look at the behaviors that Aurelia provides for you and which are available globally in every view.

#### show

The `show` Attached Behavior allows you to conditionally display an HTML element. If the value of show is `true` the element will be displayed, otherwise it will be hidden. This behavior does not add/remove the element from the DOM, but only changes its visibility. Here's an example:

```markup
<div show.bind="isSaving" class="spinner"></div>
```

When the `isSaving` property is true, the `div` will be visible, otherwise it will be hidden.

#### if

The `if` Template Controller allows you to conditionally add/remove an HTML element. If the value is true, the element will also be present in the DOM, otherwise it will not.

```markup
<div if.bind="isSaving" class="spinner"></div>
```

This example looks similar to that of `show` above. The difference is that if the binding expression evaluates to false, the `div` will be removed from the DOM, rather than just hidden.

If you need to conditionally add/remove a group of elements and you cannot place the `if` behavior on a parent element, then you can wrap those elements in a template tag which has the `if` behavior. Here's what that would look like:

```markup
<template if.bind="hasErrors">
    <i class="icon error"></i>
    ${errorMessage}
</template>
```

#### repeat

The `repeat` Template Controller allows you to render a template multiple times, once for each item in an array. Here's an example that renders out a list of customer names:

```markup
<ul>
    <li repeat.for="customer of customers">${customer.fullName}</li>
</ul>
```

An important note about the repeat behavior is that it works in conjuction with the `.for` binding command. This binding command interprets a special syntax in the form "item of array" where "item" is the local name you will use in the template and "array" is a normal binding expression that evaluates to an array.

> **Note:**: Like the `if` behavior, you can also use a `template` tag to group a collection of elements that don't have a parent element. In fact this is true of all Template Controllers. When you place a Template Controller on an element, it transforms it into an HTMLTemplate during compilation, so you can always explicitly add the template in your markup if you want or need to.

#### compose

The `compose` Custom Element enables you to dynamically render UI into the DOM. Imagine you have a heterogeneous array of items, but each has a type property which tells you what it is. You can then do something like this:

```markup
<template repeat.for="item of items">
    <compose
      model.bind="item"
      view-model="widgets/${item.type}">
    </compose>
</template>
```

Now, depending on the _type_ of the item, the `compose` element will load a different view-model (and view) and render it into the DOM. If the view-model has an `activate` method, the `compose` element will call it and pass in the `model` as a parameter. The `activate` method can even return a `Promise` to cause the composition process to wait until after some async work is done before actually databinding and rendering into the DOM.

The `compose` element also has a `view` attribute which can be used in the same way as `view-model` if you don't wish to leverage the standard view/view-model convention.

What if you want to determine the view dynamically based on data though? or runtime conditions? You can do that too by implementing a `getViewStrategy()` method on your view-model. It can return a relative path to the view or an instance of a `ViewStrategy` for custom view loading behavior. The nice part is that this method is executed after the `activate` callback, so you have access to the model data when determining the view.

#### selected-item

HTMLSelectElement is an interesting beast. Usually, you can databind these by combining a `repeat` for the options with a binding on the value, like this:

```markup
<select value.bind="favoriteNumber">
    <option>Select A Number</option>
    <option repeat.for="number of numbers" value.bind="number">${number}</option>
</select>
```

But sometimes you want to work with selecting object instances rather than primitives. For that you can use the `selected-item` attached behavior. Here's how you would configure that for a theoretical list of employees:

```markup
<select selected-item.bind="employeeOfTheMonth">
  <option>Select An Employee</option>
  <option repeat.for="employee of employees" value.bind="employee.id" model.bind="employee">${employee.fullName}</option>
</select>
```

First, we specify the `.bind` binding command on `selected-item`. We then use a repeater as normal, being sure to bind `value` to some primitive. We also add a second property named `model` which the `selected-item` behavior will use to correlate selection with an object instance. In other words, when an option is selected the `employeeOfTheMonth` property will be set to the value of the `model` property on that option. When the `employeeOfTheMonth` property is set in the view-model, the option with the corresponding `model` value will be selected in the view.

> **Note:** We said earlier that only form element values bind two-way by default, but in this case our custom attribute `selected-item` is also bound with a two-way mode by default. How did that work? It turns out that when you define Aurelia behaviors, you can optionally specify the default binding mode on properties.

#### global-behavior

This is not an Attached Behavior that you will use directly. Rather, it works in conjunction with a custom binding command to dynamically enable the use of jQuery plugins and similar APIs declaratively in HTML. Let's look at an example in order to help clarify the idea:

```markup
<div jquery.modal="show: true; keyboard.bind: allowKeyboard">...</div>
```

This sample is based on the [Bootstrap modal widget](http://getbootstrap.com/javascript/#modals). In this case, the `modal` jQuery widget will be attached to the `div` and it will be configured with its `show` option set to `true` and its `keyboard` option set to the value of the `allowKeyboard` property on the view-model. When the containing view is unbound, the jQuery widget will be destroyed.

This capability combines the special `global-behavior` Attached Behavior with custom syntax to enable these dynamic capabilities. The syntax you see here is based on the syntax of the native `style` attribute which lists properties and values separated in the same fashion as above. Note that you can use binding commands such as `.bind` to pass data from your view-model directly to the plugin or `.call` to pass a callback function directly to the plugin.

Here's how it works:

When the binding system sees a binding command that it doesn't recognize, it dynamically interprets it. The attribute name is mapped to a global property and the binding command is mapped to the plugin. The values are then used to create an options object that is passed to the plugin. When the view is unbound, if the widget implements a `destroy` method, it will be invoked.

> **Note:** We don't just go invoking globals. The `global-behavior` has a whitelist you must configure. It is only configured with jQuery by default. You can turn all of this off, if you desire, but it makes it easy to take advantage of basic jQuery plugins without any work on your part.

## Routing

There are many different application styles you could be called upon to create. From navigation apps, to dashboards, to MDI interfaces, Aurelia can handle them all. In many of these cases a key component of your architecture is a client-side router, capable of translating url changes into application state.

If you've read the getting started guide, you know that there are two parts to routing. First, there's the `Router` which lives in your view-model. It's configured with route information and controls navigation. Then, there's the `router-view` which lives in the view and is responsible for displaying whatever the router identifies as the current state.

Let's look at an example configuration.

```javascript
import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['', 'home'],               moduleId: 'home/index' },
        { route: 'users',                    moduleId: 'users/index',                      nav: true },
        { route: 'users/:id/detail',         moduleId: 'users/detail' },
        { route: 'files*path',               moduleId: 'files/index',     href:'#files',   nav: true }
      ]);
    });
  }
}
```

We begin by asking for a `Router` to be injected. We then set this instance to a `router` property on the view-model. _You must name the property **router**_. Then we call the `configure` api. We pass it a function and it passes us a configuration object.

We can optionally set a `title` property to be used in constructing the document's title. But the most important part is setting up the routes. The router's `map` method takes a simple JSON data structure representing your route table. The two most important properties are `route` (a string or array of strings), which defines the route pattern, and `moduleId`, which has the relative module Id path to your view-model. You can also set a `title` property, to be used when generating the document's title, a `nav` property indicating whether or not the route should be included in the navigation model (it can also be a number indicating order) and an `href` property which you can use to bind to in the _navigation model_.

>**Note:** Any properties that you leave off will be conventionally determined by the framework based on what you have provided.

So, what options to you have for the route pattern?

* static routes
    - ie 'home' - Matches the string exactly.
* parameterized routes
    - ie  'users/:id/detail' - Matches the string and then parses an `id` parameter. Your view-model's `activate` callback will be called with an object that has an `id` parameter set to the value that was extracted from the url.
* wildcard routes
    - ie 'files*path' - Matches the string and then anything that follows it. Your view-model's `activate` callback will be called with an object that has a `path` parameter set to the wildcard's value.

All routes with a truthy `nav` property are assembled into a `navigation` array. This makes it really easy to use databinding to generate a menu structure. Another important property for binding is the `isNavigating` property. Here's some simple markup that shows what you might pair with the view-model shown above:

```markup
<template>
  <ul>
    <li class="loader" if.bind="router.isNavigating">
      <i class="fa fa-spinner fa-spin fa-2x"></i>
    </li>
    <li repeat.for="item of router.navigation">
      <a href.bind="item.href">${item.title}</a>
    </li>
  </ul>

  <router-view></router-view>
</template>
```

### Lifecycle

Whenever the router processes a navigation, it enforces a strict lifecycle on the view-models that it is navigating to and from. There are four stages in the lifecycle. You can opt-in to any of them by implementing the appropriate method on your view-model's class. Here's a list of the lifecycle callbacks:

* `canActivate(params, queryString, routeConfig)` - Implement this hook if you want to control whether or not vour view-model _can be navigated to_. Return a boolean value, a promise for a boolean value, or a navigation command.
* `activate(params, queryString, routeConfig)` - Implement this hook if you want to perform custom logic just before your view-model is displayed. You can optionally return a promise to tell the router to wait to bind and attach the view until after you finish your work.
* `canDeactivate()` - Implement this hook if you want to control whether or not the router _can navigate away_ from your view-model when moving to a new route. Return a boolean value, a promise for a boolean value, or a navigation command.
* `deactivate()` - Implement this hook if you want to perform custom logic when your view-model is being navigated away from. You can optionally return a promise to tell the router to wait until after your finish your work.

The `params` object will have a property for each parameter of the route that was parsed, `queryString` will have a property for each query string value and `routeConfig` will be the original route configuration object that you set up.

> **Note:** A _Navigation Command_ is any object with a `navigate(router)` method. When one is encountered, the navigation will be cancelled and control will be passed to the navigation command. One navigation command is provided out of the box: `Redirect`.

### Child Routers

If you haven't read the "Get Started" guide, we recommend that you do that now and pay special attention to the section titled "Bonus: Leveraging Child Routers".

Whenever you set up a route to map to a view-model, that view-model can actually contain its own router...and when you set up routes with that...those view-models can have their own routers...and so on. The route patterns are relative to the parent router and the module and view ids are relative to the view-model itself. This allows you to easily encapsulate features or child applications as well as handle complex hierarchical state.

A child router is just a router like any other. So, everything we've discussed above applies. To add a child router, just ask for a `Router` to be injected and configure it with your child routes. The screen activation lifecycle discussed above applies to child routers as well. Each phase of the lifecycle is run against the entire router hierarchy before moving on to the next phase. The activate hooks run from top to bottom and the deactivate hooks run from bottom to top.

### Conventional Routing

As with everything in Aurelia, we have strong support for conventions. So, you can actually choose to dynamically route rather than pre-configuring all your routes up front. Here's how you configure a router to do that:

```javascript
router.configure(config => {
  config.mapUnknownRoutes(instruction => {
    //check instruction.fragment
    //set instruction.config.moduleId
  });
});
```

All you have to do is set the `config.moduleId` property and you are good to go. You can also return a promise from `mapUnknownRoutes` in order to asynchronously determine the destination.

>**Note:** Though not necessarily related to conventional routing, you may sometimes have a need to asynchronously configure your router. For example, you may need to call a web service to get user permissions before setting up routes. To do this, implement a callback on your router's view-model named `configureRouter`. In this callback you can configure your router and optionally return a Promise if necessary.

## Extending HTML

### Attached Behaviors

### Custom Elements

### Template Controllers

## Eventing

### DOM Events

### The Event Aggregator

## HTTP Client