# Get Started

**Welcome to Aurelia!** This tutorial will take you through creating a simple application using Aurelia and briefly explain its main concepts. We assume you are familiar with JavaScript, HTML, and CSS. If you are reading this for the first time, we recommend you skip down to the section titled "Setting Up The HTML Page" so you can see how to use Aurelia straight away. Then, when you are ready to actually build something, come back and read about "Configuring Your Environment" and "Setting up the Project Structure and Build". To view the completed results of this tutorial, have a look at our [navigation skeleton project](https://github.com/aurelia/skeleton-navigation/releases). You may also wish to download it and simply delete the contents of the _src_ folder in order to follow this tutorial but incur less manual setup labor. That's what we would do anyway...

## Configuring Your Environment

Let's start by getting you set up with a great set of tools that you can use to build modern JavaScript applications. All our tooling is built on [Node.js](http://nodejs.org/). If you have that installed aready, great! If not, you should go to [the official web site](http://nodejs.org/), download and install it. Everything else we need will be installed via Node's package manager (npm).

First, let's begin by installing [Gulp](http://gulpjs.com/) which we'll be using for build automation. If you don't have it already, you can use npm to set it up like this:

  ```shell
  npm install -g gulp
  ```

Next, we need to intsall [jspm](http://jspm.io/). This will serve as our client-side package manager. You can do that like this:

  ```shell
  npm install -g jspm
  ```

> **Note:** jspm, like Bower and Yeoman, leverages [git](http://git-scm.com/) so you need to install that if you don't have it. Also, jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.

## Setting up the Project Structure and Build

With our tooling installed, we can now turn out attention to setting up a basic structure for our app. Begin by creating a folder for your project. We'll call it _navigation-app_. Inside this folder we'll create a subdirectory named _src_. This will hold the raw source code for our application. Let's also create a subdirectory called _styles_. Go ahead and [download the default css styles](https://raw.githubusercontent.com/aurelia/skeleton-navigation/master/styles/styles.css) for this sample and drop them into that folder.

Because we want to leverage Gulp for build automation, we'll need to create a configuration file for that and install the build-related packages. We've put together a really nice starter build file for you, so you should just [download that from here](https://raw.githubusercontent.com/aurelia/skeleton-navigation/master/gulpfile.js) and drop it inside _navigation-app_. You should also [download our default package manifest](https://raw.githubusercontent.com/aurelia/skeleton-navigation/master/package.json). This contains the list of modules we want to install. If you've used npm or Gulp before, this should be familar to you.

With these two files in place, let's run some commands.

1. Open a console and change your directory to _navigation-app_.

2. Execute the following command to install the Gulp plugins listed in the _devDependencies_ section of the package manifest.

  ```shell
  npm install
  ```
3. Next, execute the following command to install the Aurelia library, bootstrap and font-awesome, listed in the _jspm.dependencies_ section of the package manifest.

  ```shell
  jspm install
  ```

Everything we've done so far is standard Node.js build and package management procedures. It doesn't have anything specific to do with Aurelia itself. We're just walking you through setting up a modern JavaScript project and build from scratch. You may be familiar with this already, but if not, welcome to this new and exciting world!

> **Note:** Bootstrap and Font-Awesome are **not** dependencies of Aurelia. We simply leverage them as part of this tutorial in order to quickly achieve a decent look out-of-the-box.

## Setting Up The HTML Page

If you've followed along this far, you now have all the libraries, build configuration and tools you need to create amazing JavaScript apps with Aurelia. The next thing we need to do is create our _index.html_ file in the root of our project folder. Create that now and use the markup below.

### index.html
```markup
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="jspm_packages/github/twbs/bootstrap@3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="jspm_packages/npm/font-awesome@4.2.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
  </head>
  <body aurelia-app>
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
      System.baseUrl = 'dist';
      System.import('aurelia-bootstrapper').catch(console.error.bind(console));
    </script>
  </body>
</html>
```

Yes, that's it. This is the only HTML page in our application. The head of the document is pretty straight forward. We simply link in our bootstrap, font-awesome and custom stylesheets. It's the body that's interesting.

> **Note:** Be sure to confirm that the local folder names for bootstrap and font-awesome match the link href. It's possible that these libraries have updated their versions since the authoring of this document.

Let's start with the script tags. First we have _system.js_. This is our module loader. It's what loads the Aurelia library as well as your own code. Next we have _config.js_. This contains configuration for the loader. It's generated automatically whenever you execute a jspm command. jspm is our recommended client-side package manager. It provides an amazing developer experience by integrating client-side package management with an ES6 compliant module loader.

>**Note:** The Aurelia Framework isn't tied to jspm or SystemJS. We also support require-style APIs like RequireJS and Dojo Loader out of the box. Also, you can implement your own loader and handle package management any way you want. However we do think jspm/SystemJS is the best ES6-oriented solution today and it's our recommended approach.

Once we have our module loader and its configuration, we set the `baseUrl` to point to the location of our compiled code. Then we just load the `aurelia-bootstrapper` module with a call to `System.import`, being sure to catch any errors that might happen at startup and bind those to the console.

When the bootstrapper loads it inspects the HTML document for _aurelia_ attributes. In this case it will find that the body has an `aurelia-app` attribute. This tells the bootstrapper to load our _app_ view-model and its view, conventionally located in _app.js_ and _app.html_ and then compose them as an Aurelia application in the DOM.

Wait a minute....we don't have an _app_ view-model or view. Ummm...WHAT NOW!?

## Creating Your First Screen

In Aurelia, user interface elements are composed of _view_ and _view-model_ pairs. The _view_ is written with HTML and is rendered into the DOM. The _view-model_ is written with JavaScript and provides data and behavior to the _view_. Aurelia's powerful _databinding_ links the two pieces together allowing changes in your data to be reflected in the _view_ and vice versa.

Let's see how that works...

In the _src_ folder create an _app.html_ file and an _app.js_ file. This is the app view and view-model that the bootstrapper was looking for. Let's start with the _view-model_ by creating a simple class to hold a _firstName_ and _lastName_. We'll also add a computed property for _fullName_ and a method to "welcome" the person. Here's what that would look like:

### app.js
```javascript
export class Welcome{
  constructor(){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }
}
```

What...is that JavaScript? 

Yes. Yes it is. In fact it's ECMAScript 6 (ES6), the next version of JavaScript which introduces many new features to the language. Fortunately the Gulp file you downloaded above has you set up with [6to5](https://6to5.org/), an amazing ES6 transpiler that allows you to write tomorrow's JavaScript and run it on today's browsers. Now you can use modules, classes, lambdas, string interpolation and more. Sweet! So, how do you create a _view-model_? You just create a plain class and _export_ it to the framework. Piece. Of. Cake.

> **Note:** You don't have to use 6to5 or even ES6 to write an Aurelia app. You can use AtScript, TypeScript, CoffeeScript...or today's browser language: ES5. Simply follow the language's standard pattern for creating classes and everything will work fine.

Ok. Now that we have a _view-model_ with some basic data and behavior. Let's have a look at its partner in crime...the _view_.

### app.html
```markup
<template>
  <section>
    <h2>${heading}</h2>

    <form role="form" submit.delegate="welcome()">
      <div class="form-group">
        <label for="fn">First Name</label>
        <input type="text" value.bind="firstName" class="form-control" id="fn" placeholder="first name">
      </div>
      <div class="form-group">
        <label for="ln">Last Name</label>
        <input type="text" value.bind="lastName" class="form-control" id="ln" placeholder="last name">
      </div>
      <div class="form-group">
        <label>Full Name</label>
        <p class="help-block">${fullName}</p>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </section>
</template>
```

All views are contained within a `template` tag. This view is just a basic input form, styled using bootstrap classes. Look at the input controls. Did you see `value.bind="firstName"`? That databinds the input's _value_ to the _firstName_ property in our view-model. Any time the view-model's property changes, the input will be updated with the new value. Any time you change the value in the input control, Aurelia will push the new value into your view-model. It's that easy.

There's a couple more interesting things in this example. In the last form group you can see this syntax in the HTML content: `${fullName}`. That's a string interpolation. It's a one-way binding from the view-model into the view that is automatically converted to a string and interporlated into the document. Finally, have a look at the form element itself. You should notice this: `submit.delegate="welcome()"`. That's an event binding. This uses event delegation to execute the _welcome_ method any time the form is submitted.

Let's run it and see this in action. On your console use the following command to build and launch the server.

```shell
gulp watch
```

You can now browse to [http://localhost:9000/](http://localhost:9000/) to see the app. Type in the form input controls and notice that the Full Name computed property updates with any change. Click the button and see that your method is invoked.

> **Note:** Aurelia has a unique and powerful databinding engine that uses adaptive techniques to pick the best way to observe changes in each property. For example, if you are using a browser with [Object.observe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) support, both _firstName_ and _lastName_ will be observed with that strategy. If not, we'll generate getters and setters that batch changes to the Micro Task Queue, correctly emulating Object.observe behavior. Since the computed property _fullName_ can't be observed with either of these techniques, we use dirty checking. We'll use the best technique depending on the situation and you can even plug in custom strategies as well in order to "teach" the framework how to observe special types of model patterns. We think it's pretty cool.
> 
The `.bind`  command uses the default binding behavior for any property. The default is one-way binding for everything except form controls, which default to two-way. You can always override this by using the explict binding commands `.one-way`, `.two-way` and `.one-time`. Similarly, you can use `.delegate` for event delegation but you can also use `.trigger` to attach directly to the target element.

## Adding Navigation

Since this is a navigation app, we should probably add some more screens and set up a client-side router don't you think? Let's begin by renaming our _app.js_ and _app.html_ to _welcome.js_ and _welcome.html_ respectively. This will be the first page of our app. Now, lets create a new _app.js_ and _app.html_ which will serve as our "layout" or "master page". The view will contain our navigation UI and the content placeholder for the current page and the view-model with have a router instance, configured with our routes. We'll start with the view-model so you can see how to set up the router:

### app.js

```javascript
import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'], moduleId: 'welcome', nav: true, title:'Welcome' }
      ]);
    });
  }
}
```

Ok, there's some really interesting new stuff here. We want to use the router, so we begin by importing it at the top of the file. This is the power of ES6 again. We then create our _App_ class to hold our data and behavior for the main application layout. Take a look at the constructor function. It's expecting something to pass in a _router_ instance when the App class is created. Where does that come from?

Aurelia creates the UI components as needed to render your app. It does this by using a [Dependency Injection](http://www.youtube.com/watch?v=dQw4w9WgXcQ) container capable of providing constructor dependencies like this. How does the DI system know what to provide? All you have to do is add a static method named _inject_ that returns an array of keys representing types to instantiate. You want a router? Just ask for it by adding the constructor to the array and Aurelia will give it to you.

> **Note:** If you happen to be using AtScript, you'll be pleased to know that Aurelia understands AtScript type annotations and can use those for dependency injection. As other main stream JavaScript transpilers adopt type or annotation metadata we'll continue to enhance our platform and teach it to understand your choice language's format.

We need to set the router to a public property on the class. The property must be named _router_. This is important. Don't get any fancy ideas here like naming it _taco_ or something like that ok? It's a router..so name it _router_ and everyone will be happy.

Alrighty. Time to configure the router. It's easy. You can set a title to use when generating the document's title. Then you set up your routes. Each route has the following properties:

* route: This is a pattern, which when matched will cause the router to navigate to this route. You can use static routes like above, but you can also use paramerters like this: `customer/:id`. There's also support for wildcard routes and query string parmaters. The route can be a single string pattern or an array of patterns.
* moduleId: This is a path relative to the current view-model which specifies the view/view-model pair you want to render for this route.
* title: You can optionally provide a title to be used in generating the document's title.
* nav: If this route should be included in the _navigation model_ becuase you want to generate a UI with it, set this to true.

> **Note:** The creators of Aurelia have no affiliation with Rick Astley.

### app.html

```markup
<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <i class="fa fa-home"></i>
        <span>${router.title}</span>
      </a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li repeat.for="row of router.navigation" class="${row.isActive ? 'active' : ''}">
          <a href.bind="row.href">${row.title}</a>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="loader" if.bind="router.isNavigating">
          <i class="fa fa-spinner fa-spin fa-2x"></i>
        </li>
      </ul>
    </div>
  </nav>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>
```
Following our simple app-building convention, the `App` class will be databound to the above view. A large part of this markup deals with setting up the main navigation structure. You've seen basic binding and string interpolation already, so let's just focus on the new stuff.  Take a look at the navbar-nav `ul` element. Its `li` demonstrates how to use a repeater with the following expression `repeat.for="row of router.navigation"`. This will create one `li` for each item in the `router.navigation` array. The local variable is _row_ and you can see that used throughout the `li` and its child elements.

> **Note:** The `navigation` property on the router is an array populated with all the routes you marked as `nav:true` in your route config.

Also on the `li` you can see a demonstration of how to use string interpolation to dynamically add/remove classes. Further down in the view, there's a second `ul`. See the binding on its single child `li`? `if.bind="router.isNavigating"` This conditionally adds/removes the `li` based on the value of the bound expression. Conveniently, the router will update its `isNavigating` property whenever it is....navigating.

The last piece we want to look at is the `router-view` element near the bottom of the view. Any time you have a `Router` in your view-model, you need to have a `router-view` in your view. These two are comrades and will connect automatically such that whatever route the `Router` says is current will be displayed in the `router-view`.

With this in place, go ahead and start the dev server with `gulp watch`. Open the browser and have a look. You should now see a main navigation with a single selected tab for our "welcome" route. The _welcome_ view should display in the main content area and function as before. Open up the browser's debug tools and have a look at the live DOM. You will see that the _welcome_ view content is displayed inside the `router-view`.

## Adding a Second Page

Well, we've technically got a navigation application now...but it's not very interesting because there's only one page. Let's add a second page. Can you guess how to do it? It's really easy. Let's display some images from Flickr. To do that, let's first configure our router for the hypothetical page:

### app.js (updated)

```javascript
import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true }
      ]);
    });
  }
}
```

If you guessed that we need to create a _flickr.js_ and _flickr.html_ file, you are correct. Here's the source:

### flickr.js

```javascript
import {HttpClient} from 'aurelia-http-client';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

export class Flickr{
  static inject() { return [HttpClient]; }
    constructor(http){
        this.heading = 'Flickr';
        this.images = [];
    this.http = http;
    }

  activate(){
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
```

There's a lot of cool stuff here. Let's start at the beginning. We are importing `HttpClient` from Aurelia. This lets us make HTTP requests in a very simple way. It's not included with the default Aurelia configuration though, so you need to install the package. To do that, execute this command on the console:

```shell
jspm install aurelia-http-client
```

Now I hope you see the power of the integrated package manager and loader. You simply install a package with jspm and then you import it in your code using the same exact identifier. You can install anything from GitHub or NPM in this way.

Like before, we're using dependency injection to have the `HttpClient` instance provided to the view-model. We don't use it, however, until the _activate_ method. What's the significance of that you say? I was just getting to that...

Aurelia's router enforces a lifecycle on view-models whenever routes change. This is referred to as the "Screen Activation Lifecycle". View-models can optionally hook into various parts of the lifecycle to control flow into and out of the route. When your route is ready to activate the router will call the `activate` hook, if present. In the above code, we use this hook to call the Flickr api and get some images back. Notice that we return the result of the http request back from our `activate` method. All the `HttpClient` apis return a `Promise`. The router will detect a `Promise` and wait to complete navigation until after it resolves. So, in this way, you can optionally force the router to delay displaying the page until it is populated with data.

There's a second lifecycle hook demonstrated here as well: `canDeactivate`. The router calls this before navigation away from the route happens. It gives you the opportunity to allow or disallow the navigation to continue by returning a boolean. You can also return a `Promise` for that value. The full lifecyle includes `canActivate`, `activate`, `canDeactivate` and `deactivate` hooks.

### flickr.html

```markup
<template>
    <section>
        <h2>${heading}</h2>
        <div class="row">
        <div class="col-sm-6 col-md-3" repeat.for="image of images">
          <a class="thumbnail">
            <img style="width: 260px; height: 180px;" src.bind="image.media.m"/>
          </a>
        </div>
        </div>
    </section>
</template>
```

The view for this screen is pretty straight forward. There's nothing you haven't seen before, including the awesome use of the very taboo inline style. (Just look the other way...nothing to see there.)

Once you've got all this in place, go ahead and run your app again. You should now see two items in the nav bar and be able to switch back and forth between them. Huzzah!

Let's recap. To add a page to your app:

1. Add the route configuration to the _app.js_ router.
2. Add a view-model.
3. Add a view with the same name.
4. Celebrate.

## Bonus: Creating a Custom Element

Look at you, you overachiever! I see you're interested in the learning some extra awesome on this fine day. In that case, let's create a custom HTML element. I think a good candidate for this is our navbar. That's a lot of HTML in our _app.html_ file. Why not extract a custom `<nav-bar>` element to make things a bit more declarative?

Our simple conventions still apply for custom elements. (In fact you've been creating what we call "anonymous" custom elements all along...you just didn't realize it.) Let's create a _nav-bar.js_ and a _nav-bar.html_. Here's the code for the view-model first:

### nav-bar.js

```javascript
import {Property} from 'aurelia-framework';

export class NavBar {
  static annotations(){
    return [new Property('router')];
  }
}
```

To create a custom element, you create and export a class. Since this class is going to be used in HTML as an element, we need to tell the framework what properties on the class should appear as attributes on the element. To do that, we use _annotations_. Annotations are a way to provide metadata about your class to the framework. Aurelia is smart and can infer many things, but when it can't or when you want to do something different than the conventions, you use annotations. To leverage this capability, add a static annotations method on the class and return an array of annotation instances. In this case, we return a `Property` to tell the framework that we want our class's `router` property to be surfaced as an attribute in the HTML. Once it's surfaced as an attribute, we can databind to it in the view.

### nav-bar.html

```markup
<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle Navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
        <i class="fa fa-home"></i>
        <span>${router.title}</span>
      </a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li repeat.for="row of router.navigation" class="${row.isActive ? 'active' : ''}">
          <a href.bind="row.href">${row.title}</a>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="loader" if.bind="router.isNavigating">
          <i class="fa fa-spinner fa-spin fa-2x"></i>
        </li>
      </ul>
    </div>
  </nav>
</template>
```

This looks almost identical to the navbar HTML in our original _app.html_ file. We've basically just exracted that and put it into this template. Instead of binding to _app.js_ though, it's now binding to _nav-bar.js_.

This is a very simple custom element with no real behavior, but it is complete and usable. How do we use it? Let's take a look at an updated _app.html_ file to see how that works:

### app.html

```markup
<template>
  <import src='./nav-bar'></import>

  <nav-bar router.bind="router"></nav-bar>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>
```

Two things probably jump out at you. First we have an `import` element. Aurelia uses this to load the custom element via the relative source. Anything imported into a view in this way is local to the view. So, you don't have to worry about name conflicts. The second point of interest is the actual use of the element. See how we databind the router property we specified? Sweet!

> **Note:** You can also load app-visible elements and other behaviors in for convenience so you don't have to import common resources in every view.

You may wonder how Aurelia determines the name of the custom element. By convention, it will use the class name, lowered and hyphenated. However, you can always be explicit. To do so, simply add annother annotation to the array: `new CustomElement('nav-bar')`. What if your custom element doesn't have a view template because it's all implemented in code? No problem, just add `new NoView()` to the annotations. Want to use ShadowDOM for your custom element? Do it like a pro by adding `new UseShadowDOM()` to the annotations. Don't worry about whether or not the browser supports it. We have an efficient, full-fidelity ShadowDOM fallback implementation. Before using these annotations, be sure to import them from "aurelia-framework".

In addition to creating custom elements, you can also create standalone attributes which add new behavior to existing elements. We call these _Attached Behaviors_. On occassion you may need to create _Template Controllers_ for dynamically adding and removing DOM from the view, like the `repeat` and `for` we used above. That's not all you can do either. Aurelia's templating engine is both powerful and extensible.

> **Note:** AtScript users can leverage language annotations and Aurelia will pick those up. Users of languages that support static class properties, such as TypeScript, can use an _annotations_ property instead of a method, for convenience. This also applies to the `inject` designation used by the dependency injection container.

## Bonus: Leveraging Child Routers

Can't get enough can you? Well, I've got a treat for you. Let's add a third page to our app...with its own router! We call this a child router. Child routers have their own route configuration and navigate relative to the parent router. Prepare thyself for insantity....

First, let's update our _app.js_ with the new configuration. Here's what it should looke like:

### app.js (updated...again)

```javascript
import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true },
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
```

Nothing new there. The interesting part is what's inside _child-router.js_...

### child-router.js

```javascript
import {Router} from 'aurelia-router';

export class Welcome{
  static inject() { return [Router]; }
  constructor(router){
    this.heading = 'Child Router';
    this.router = router;
    router.configure(config => {
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true },
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
```

What!? It's practically the same configuration as `App`? What? Why? Well...you should probably never do this in real life...but it's pretty cool what this does. This, my friends, is a recursive router, and we're doing it because we can.

For completness, here's the view:

### child-router.html

```javascript
<template>
  <section>
    <h2>${heading}</h2>
    <div>
      <div class="col-md-2">
        <ul class="well nav nav-pills nav-stacked">
          <li repeat.for="row of router.navigation" class="${row.isActive ? 'active' : ''}">
            <a href.bind="row.href">${row.title}</a>
          </li>
        </ul>
      </div>
      <div class="col-md-10" style="padding: 0">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
```

Run the app and see the magic....and pray the universe doesn't explode.

## Conclusion

With its strong focus on developer experience, Aurelia can enable you to not only create amazing applications, but also enjoy the process. We've designed it with simple conventions in mind so you don't need to waste time with tons of configuration or write boilerplate code just to satisfy a stubborn or restrictive framework. You'll never hit a roadblock with Aurelia either. It's been carefully designed to be pluggable and customizable.

Thanks for taking the time to read through our guide. We hope you'll explore the docs and build something awesome. We look forward to seeing what you will make.
