System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "services/*": "dist/services/*",
    "models/*": "dist/models/*",
    "resources/*": "dist/resources/*",
    "api/*": "dist/api/*"
  },
  bundles: {
    "app-build": [
      "api/class-or-interface",
      "api/class-or-interface.html!github:systemjs/plugin-text@0.0.3",
      "api/index",
      "api/index.html!github:systemjs/plugin-text@0.0.3",
      "api/product",
      "api/product.html!github:systemjs/plugin-text@0.0.3",
      "app",
      "app.css!github:systemjs/plugin-text@0.0.3",
      "app.html!github:systemjs/plugin-text@0.0.3",
      "article/article",
      "article/article.html!github:systemjs/plugin-text@0.0.3",
      "article/index",
      "article/index.html!github:systemjs/plugin-text@0.0.3",
      "aurelia-docs/aurelia-doc",
      "aurelia-docs/html-parser",
      "aurelia-docs/resources/au-alert",
      "aurelia-docs/resources/au-alert.html!github:systemjs/plugin-text@0.0.3",
      "aurelia-docs/resources/au-demo",
      "aurelia-docs/resources/au-demo.html!github:systemjs/plugin-text@0.0.3",
      "aurelia-docs/resources/au-doc-section",
      "aurelia-docs/resources/au-doc-section.html!github:systemjs/plugin-text@0.0.3",
      "aurelia-docs/resources/code-listing",
      "aurelia-docs/resources/code-listing.html!github:systemjs/plugin-text@0.0.3",
      "aurelia-docs/resources/index",
      "aurelia-docs/resources/source-code",
      "backend/server",
      "main",
      "model/api",
      "model/products",
      "resources/au-aside",
      "resources/au-aside.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-dropdown",
      "resources/au-dropdown.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-icon",
      "resources/au-menu",
      "resources/au-menu.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-offscreen",
      "resources/au-offscreen.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-overlay",
      "resources/au-preview",
      "resources/au-preview.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-select-item",
      "resources/au-select-item.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-select-list",
      "resources/au-select-list.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-settings-button",
      "resources/au-settings-button.html!github:systemjs/plugin-text@0.0.3",
      "resources/compiler",
      "resources/function-heading",
      "resources/function-heading.html!github:systemjs/plugin-text@0.0.3",
      "resources/loading-indicator",
      "resources/scroll-to",
      "resources/util",
      "services/analytics",
      "services/cache",
      "services/channel",
      "services/culture",
      "services/index",
      "services/language",
      "services/local",
      "services/profile",
      "services/screen",
      "services/toc-service",
      "services/touch"
    ],
    "aurelia": [
      "github:aurelia/platforms@master",
      "github:aurelia/platforms@master/aurelia-platforms",
      "github:hammerjs/hammer.js@2.0.6",
      "github:hammerjs/hammer.js@2.0.6/hammer",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:rstacruz/nprogress@0.2.0",
      "github:rstacruz/nprogress@0.2.0/nprogress",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.20",
      "github:systemjs/plugin-css@0.1.20",
      "github:systemjs/plugin-css@0.1.20/css",
      "github:systemjs/plugin-text@0.0.3",
      "github:systemjs/plugin-text@0.0.3/text",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.2",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.2/aurelia-animator-css",
      "npm:aurelia-binding@1.0.0-beta.1.2.1",
      "npm:aurelia-binding@1.0.0-beta.1.2.1/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator",
      "npm:aurelia-framework@1.0.0-beta.1.1.4",
      "npm:aurelia-framework@1.0.0-beta.1.1.4/aurelia-framework",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1.1.1",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history",
      "npm:aurelia-http-client@1.0.0-beta.1.1.2",
      "npm:aurelia-http-client@1.0.0-beta.1.1.2/aurelia-http-client",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "npm:aurelia-logging@1.0.0-beta.1.1.2/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "npm:aurelia-metadata@1.0.0-beta.1.1.5/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1.1.1",
      "npm:aurelia-path@1.0.0-beta.1.1.1/aurelia-path",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.0",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.0/aurelia-polyfills",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.2",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.2/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1.1.3",
      "npm:aurelia-router@1.0.0-beta.1.1.3/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/hide",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/router-view",
      "npm:aurelia-templating@1.0.0-beta.1.1.2",
      "npm:aurelia-templating@1.0.0-beta.1.1.2/aurelia-templating",
      "npm:commonmark@0.22.1",
      "npm:commonmark@0.22.1/lib/blocks",
      "npm:commonmark@0.22.1/lib/common",
      "npm:commonmark@0.22.1/lib/from-code-point",
      "npm:commonmark@0.22.1/lib/html",
      "npm:commonmark@0.22.1/lib/index",
      "npm:commonmark@0.22.1/lib/inlines",
      "npm:commonmark@0.22.1/lib/node",
      "npm:commonmark@0.22.1/lib/normalize-reference",
      "npm:commonmark@0.22.1/lib/xml",
      "npm:entities@1.1.1",
      "npm:entities@1.1.1/index",
      "npm:entities@1.1.1/lib/decode",
      "npm:entities@1.1.1/lib/decode_codepoint",
      "npm:entities@1.1.1/lib/encode",
      "npm:entities@1.1.1/maps/decode.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.1.1/maps/entities.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.1.1/maps/legacy.json!github:systemjs/plugin-json@0.1.0",
      "npm:entities@1.1.1/maps/xml.json!github:systemjs/plugin-json@0.1.0",
      "npm:mdurl@1.0.1/decode",
      "npm:mdurl@1.0.1/encode",
      "npm:moment@2.11.2",
      "npm:moment@2.11.2/moment",
      "npm:numeral@1.5.3",
      "npm:numeral@1.5.3/numeral",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "npm:string.prototype.repeat@0.2.0",
      "npm:string.prototype.repeat@0.2.0/repeat"
    ]
  },
  buildCSS: false,

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.2",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1.1.2",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
    "aurelia-platforms": "github:aurelia/platforms@master",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "commonmark": "npm:commonmark@0.22.1",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "font-awesome": "npm:font-awesome@4.5.0",
    "hammer": "github:hammerjs/hammer.js@2.0.6",
    "moment": "npm:moment@2.11.2",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "numeral": "npm:numeral@1.5.3",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:aurelia/platforms@master": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:rstacruz/nprogress@0.2.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.1.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.4": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-http-client@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.3": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.5": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.2": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.5",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commonmark@0.22.1": {
      "entities": "npm:entities@1.1.1",
      "mdurl": "npm:mdurl@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "string.prototype.repeat": "npm:string.prototype.repeat@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.11.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
