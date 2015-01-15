# Docs

We've got a very rich set of docs planned for Aurelia. Unfortunately, we haven't quite finished them yet. During this early preview period, we're providing you with a simple "cheat sheet" containing examples of the most common tasks you might want to perform. If you have questions, we hope that you will join us on our [gitter channel](https://gitter.im/aurelia/discuss).

## Startup & Configuration

Most platforms have a "main" or entry point for code execution. Aurelia is no different. If you've read the [Get Started](/get-started.html) page, then you've seen the `aurelia-app` attribute. Simply place this on an HTML element and Aurelia's bootstrapper will load an _app.js_ and _app.html_, databind them together and inject them into the DOM element on which you placed that attribute. If you don't want to use that convention, simply provide a value to the attribute indicating which view-model to load. For example `<body aurelia-app="todo">` will result in a _todo.js_ and _todo.html_ being loaded instead.

The `aurelia-app` attribute is convenient for getting started, but often times you want to configure the framework or run some code prior to displaying anything to the user. So chances are, as your project progresses, you will migrate towards using `aurelia-main`.

**What is the difference?**

`aurelia-app` instantiates an Aurelia app and pre-configures it with the default set of options for the framework, then loads your application view-model. `aurelia-main` loads your custom configuration module, _main.js_ by default, then invokes your `configure` function, passing it the Aurelia object which you can then use to configure the framework yourself and decide what, when and where to display your UI. Here's an example _main.js_ file:

```javascript
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

export function configure(aurelia) {
  aurelia.plugins
    .installBindingLanguage()
    .installResources()
    .installRouter()
    .installEventAggregator()
    .install('./path/to/plugin');

  aurelia.start().then(a => a.setRoot('app', document.body));
}
```

With the exception of the custom plugin, this code is essentially what `aurelia-app` normally does for you. When you switch to `aurelia-main` you need to configure these things yourself, but you can also install custom plugins, set up the depedency injection container with some services and install global resources to be used in view templates.

### Logging

Aurelia has a simple logging abstraction that the framework itself uses. By default it is a no-op. The configuration above shows how to install an appender which will take the log data and output it the console. You can also see how to set the log level. Options for this setting include: `none`, `error`, `warn`, `info` and `debug`.

You can easily create your own appenders. Simply implement a class that matches the appender interface. The best way to see how to do this is to look at our own [console log appender's source](https://github.com/aurelia/logging-console/blob/master/src/index.js).

### Plugins

A _plugin_ is simply a module with an exported `install` function. During startup Aurelia will load all plugin modules and call their `install` functions, passing to them the Aurelia instance so that they can configure the framework appropriately. Plugins can optionally return a `Promise` from their `install` function in order to perform asynchronous configuration tasks.

### The Aurelia Object

Since both a custom _main_ module and plugins do their work by interacting with the Aurelia object, we provide a brief explanation of that API in code below:

```javascript
export class Aurelia {
  loader:Loader; //the module loader
  container:Container; //the app-level dependency injection container
  resources:ResourceRegistry; //the app level view resource registery
  plugins:Plugins; //the plugins api

  withInstance(type, instance):Aurelia; //DI helper method (pass through to container)
  withSingleton(type, implementation):Aurelia; //DI helper method (pass through to container)
  withResources(resources):Aurelia; //resource helper method (pass through to resources)

  start():Promise; //starts the framework up causing plugins to be installed and resources to be loaded
  setRoot(root, applicationHost):Promise; //set your "root" or "app" view-model and display it
}
```

## Views and View Models

In Aurelia, user interface elements are composed of _view_ and _view-model_ pairs. The _view_ is written with HTML and is rendered into the DOM. The _view-model_ is written with JavaScript and provides data and behavior to the _view_. The templating engine and/or DI are responsible for creating these pairs and enforcing a predictable lifecycle on the process. Once instantiated, Aurelia's powerful _databinding_ links the two pieces together allowing changes in your data to be reflected in the _view_ and vice versa.

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

> **Note:** If writing in TypeScript or CofeeScript, you can use a static array property instead of a method. In ES5 you can add the property onto the constructor itself. You can also do this with ES6 but we enable the static method option since it can be located closer to the constructor in vanilla JS. If you are using AtScript, you can actually take advantage of type annotations by defining your constructor like this: `constructor(http:HttpClient)`.

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
import {Transient} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class CustomerDetail{
    static annotations(){ return [new Transient()]; }
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }
}
```

Now, each time the DI container is asked for an instance of `CustomerDetail` the container will return a new instance, rather than the singleton. `Singleton` and `Transient` registrations are provided out-of-the-box, but you can create your own by writing a class that inherits from `Registration`.

> **Note:** This last example introduces _annotations_. This is a known location where various parts of the framework search for metadata. You can actually use an `Inject` annotation here as well, but we've found that using the `inject` method or property is more convenient for most scenarios. You will see annotations again when we talk about custom element definitions.

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

This enables you to dynamically load per-view style sheets and even Web Components on the fly. Any time you want to import an Aurelia-specific resource, such as an Aurelia _Custom Element_, _Attached Behavior_, _Template Controller_ or _Value Converter_, you should use an `import` element inside your view. Here's an example:

```markup
<template>
  <import src='./nav-bar'></import>

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
    - ex. `<import src='./nav-bar as foo-bar'></import>` - Now instead of using a `nav-bar` element you can use a `foo-bar` element. (This is based on ES6 where renaming is considered a replacement for using an Alias because it strictly renames the type.)
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

### Behaviors

#### show

#### if

#### repeat

#### compose

#### selected-item

## Routing

## Dynamic Composition

## Extending HTML

### Attached Behaviors

### Custom Elements

### Template Controllers

## Eventing

### DOM Events

### The Event Aggregator

## HTTP Client