# Get Started

_**Welcome to Aurelia!**_ This tutorial will take you through creating a simple application using Aurelia and briefly explain its main concepts. We assume you are familiar with JavaScript, HTML, and CSS. If you are reading this for the first time, we recommend you skip down to the section titled "Creating Your First Screen" so you can see how to use Aurelia straight away. Then, when you are ready to actually build something, come back and read about "Configuring Your Envirionment" and "Setting up the Project Structure and Build". To view the completed results of this tutorial, have a look at our [navigation skeleton project](https://github.com/aurelia/skeleton-navigation/releases). You may also wish to download it and simply delete the contents of the _src_ folder in order to follow this tutorial but incur less manual setup labor. That's what we would do...

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

> **Note:** Windows users, please ensure that you are using a bash shell for the above and following shell commands.

## Setting up the Project Structure and Build

With our tooling installed, we can now turn out attention to setting up a basic structure for our app. Begin by creating a folder for your project, we'll call it _navigation-app_. Inside this folder we'll create a subdirectory named _src_. This will hold the raw source code for our application. Let's also create a subdirectory called _styles_. Go ahead and [download our default css styles](https://raw.githubusercontent.com/aurelia/skeleton-navigation/master/styles/styles.css) and drop it into that folder.

Because we want to leverage Gulp for build automation, we'll need to create a configuration file for that and install the build-related packages. We've put together a really nice starter build file for you, so you should just [download that from here](https://raw.githubusercontent.com/aurelia/skeleton-navigation/master/gulpfile.js) and drop it inside _navigation-app_. You should also [download our default package manifest](https://raw.githubusercontent.com/aurelia/skeleton-navigation/master/package.json). This contains the list of modules we want to install. If you've used npm or Gulp before, this should be familar to you.

With these two files in place, let's run some commands.

1. Open a console and change directory into _navigation-app_.

2. Execute the following command to install the Gulp plugins listed in the _devDependencies_ section of the package manifest.

  ```shell
  npm install
  ```
3. Next, execute the following command to install the Aurelia library, bootstrap and font-awesome, listed in the _jspm.dependencies_ section of the package manifest.

  ```shell
  jspm install
  ```

Everything we've done so far is standard Node.js build and package management procedures. It doesn't have anything specific to do with Aurelia itself. We're just walking you through some standard procedures for setting up a modern JavaScript project and build. You may be familiar with this already, but if not, welcome to this new and exciting world!

> **Note:** Bootstrap and Font-Awesome are **not** dependencies of Aurelia. We simply leverage them as part of this tutorial in order to quickly achieve a decent look out-of-the-box.

## Creating Your First Screen

If you've followed along this far, you now have all the libraries, build configuration and tools you need to create amazing JavaScript apps with Aurelia. Now, let's get started building our first screen.

### index.html

First, let's create our index.html file. Here's the code for that:

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

Yes, that's it. This is the only HTML page in our application. The head of the document is pretty straight forward. We simply link in our boostrap, font-awesome and custom stylesheets. It's the body of the application that's interesting.

