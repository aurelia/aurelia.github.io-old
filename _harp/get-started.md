# Get Started

**Welcome to Aurelia!** This tutorial will take you through creating a simple application using Aurelia and briefly explain its main concepts. We assume you are familiar with JavaScript, HTML, and CSS. If you are reading this for the first time, we recommend you skip down to the section titled "Setting Up The HTML Page" so you can see how to use Aurelia straight away. Then, when you are ready to actually build something, come back and read about "Configuring Your Environment" and "Setting up the Project Structure and Build". To view the completed results of this tutorial, have a look at our [navigation skeleton project](https://github.com/aurelia/skeleton-navigation/releases). You may also wish to download it and simply delete the contents of the _src_ folder in order to follow this tutorial but incur less manual setup labor. That's what we would do anyway...

## Configuring Your Environment

Let's start by getting you set up with a great set of tools that you can use to build modern JavaScript applications. All our tooling is built on Node.js. If you have that installed aready, great! If not, you should go to [the official web site](http://nodejs.org/), download and install it. Everything else we need will be installed via Node's package manager (npm).

First, let's begin by installing [Gulp](http://gulpjs.com/) which we'll be using for build automation. If you don't have it already, you can use npm to set it up like this:

  ```shell
  npm install -g gulp
  ```

Next, we need to intsall [jspm](http://jspm.io/). This will serve as our client-side package manager. You can do that like this:

  ```shell
  npm install -g jspm
  ```

> **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.

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

>**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.

Everything we've done so far is standard Node.js build and package management procedures. It doesn't have anything specific to do with Aurelia itself. We're just walking you through setting up a modern JavaScript project and build from scratch. You may be familiar with this already, but if not, welcome to this new and exciting world!

> **Note:** Bootstrap and Font-Awesome are **not** dependencies of Aurelia. We simply leverage them as part of this tutorial in order to quickly achieve a decent look out-of-the-box.

## Setting Up The HTML Page

If you've followed along this far, you now have all the libraries, build configuration and tools you need to create amazing JavaScript apps with Aurelia. The next thing we need to do is create our _index.html_ file in the root of our project folder. Create that now and use the markup below.

#### index.html
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
      System.import('aurelia-bootstrapper').catch(console.error.bind(console));
    </script>
  </body>
</html>
```

Yes, that's it. This is the only HTML page in our application. The head of the document is pretty straight forward. We simply link in our bootstrap, font-awesome and custom stylesheets. It's the body that's interesting.

Let's start with the script tags. First we have _system.js_. This is our module loader. It's what loads the Aurelia library as well as your own code. Next we have _config.js_. This contains configuration for the loader. It's generated automatically whenever you execute a jspm command. jspm is our recommended client-side package manager. It provides an amazing developer experience by integrating client-side package management with an ES6 compliant module loader.

>**Note:** The Aurelia Framework isn't tied to jspm or SystemJS. You can implement your own loader and handle package management any way you want. However we do think jspm/SystemJS is the best ES6-oriented solution today and it's our recommended approach, so our default bootstrapper provides this behavior for you.

Once we have our module loader and its configuration, we just load the `aurelia-bootstrapper` module with a call to `System.import`. When the bootstrapper loads it inspects the HTML document for _aurelia_ attributes. In this case it will find that the body has an `aurelia-app` attribute. This tells the bootstrapper to load our _app_ view-model and it's view and then compose them as an Aurelia application in the DOM.

Wait a minute....we don't have an _app_ view-model or view. Ummm...WHAT NOW!?

## Creating Your First Screen

In Aurelia, user interface elements are composed of _view_ and _view-model_ pairs. The _view_ is written with HTML and is rendered into the DOM. The _view-model_ is written with JavaScript and provides data and behavior to the _view_. Aurelia's powerful _databinding_ links the two pieces together allowing changes in your data to be reflected in the _view_ and vice versa.

Let's see how that works...

In the _src_ folder create an _app.html_ file and an _app.js_ file. This is the app view and view-model that the bootstrapper was looking for. Let's start with the _view-model_ by creating a simple class to hold a _firstName_ and _lastName_. We'll also add a computed property for _fullName_ and a method to "welcome" the person. Here's what that would look like:

#### app.js
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

Wait a minute...is that JavaScript? 

Yes. Yes it is. In fact it's ECMAScript 6 (ES6), the next version of JavaScript which introduces many new features to the language. Fortunately the Gulp file you downloaded above has you set up with [6to5](https://6to5.org/), an amazing ES6 transpiler that allows you to write tomorrow's JavaScript and run it on today's browsers. Now you can use modules, classes, lambdas, string interpolation and more. Sweet! So, how do you create a _view model_? You just create a plain class and _export_ it to the framework. Piece. Of. Cake.

> **Note:** You don't have to use 6to5 or even ES6 to write an Aurelia app. You can use AtScript, TypeScript, CoffeeScript...or today's browser language: ES5. Simply follow the language's standard pattern for creating classes and everything will work fine.

Ok. Now that we have a _view-model_ with some basic data and behavior. Let's have a look at it's partner in crime...the _view_.

#### app.html
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
