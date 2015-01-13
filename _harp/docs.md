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
* `Optional` - Injects an instance of a class only if it already exists in the container.
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



### Databinding

#### bind, one-way, two-way & one-time

#### delegate, trigger & call

#### ref

#### string interpolation

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