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
    "aurelia.js": [
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
      "npm:aurelia-animator-css@1.0.0-beta.1.0.1/aurelia-animator-css",
      "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "npm:aurelia-binding@1.0.0-beta.1.0.1/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "npm:aurelia-framework@1.0.0-beta.1.0.2/aurelia-framework",
      "npm:aurelia-history-browser@1.0.0-beta.1",
      "npm:aurelia-history-browser@1.0.0-beta.1/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-http-client@1.0.0-beta.1",
      "npm:aurelia-http-client@1.0.0-beta.1/aurelia-http-client",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1",
      "npm:aurelia-pal-browser@1.0.0-beta.1/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1",
      "npm:aurelia-task-queue@1.0.0-beta.1/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1",
      "npm:aurelia-templating-binding@1.0.0-beta.1/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/array-collection-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/collection-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/collection-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/map-collection-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/number-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.1/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.1/router-view",
      "npm:aurelia-templating@1.0.0-beta.1",
      "npm:aurelia-templating@1.0.0-beta.1/aurelia-templating",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/client/shim.min",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ],
    "app-build.js": [
      "api/class-or-interface",
      "api/class-or-interface.css!github:systemjs/plugin-text@0.0.3",
      "api/class-or-interface.html!github:systemjs/plugin-text@0.0.3",
      "api/index",
      "api/index.html!github:systemjs/plugin-text@0.0.3",
      "api/menu",
      "api/menu.html!github:systemjs/plugin-text@0.0.3",
      "api/no-selection",
      "api/no-selection.html!github:systemjs/plugin-text@0.0.3",
      "api/product",
      "api/product.css!github:systemjs/plugin-text@0.0.3",
      "api/product.html!github:systemjs/plugin-text@0.0.3",
      "article/article",
      "article/article.html!github:systemjs/plugin-text@0.0.3",
      "article/index",
      "article/index.html!github:systemjs/plugin-text@0.0.3",
      "article/language/demo",
      "article/language/demo.html!github:systemjs/plugin-text@0.0.3",
      "article/language/example",
      "article/language/example.html!github:systemjs/plugin-text@0.0.3",
      "article/language/index",
      "article/language/narrative",
      "article/language/narrative.html!github:systemjs/plugin-text@0.0.3",
      "article/language/source-code",
      "article/language/util",
      "article/menu",
      "article/menu.html!github:systemjs/plugin-text@0.0.3",
      "article/no-selection",
      "article/no-selection.html!github:systemjs/plugin-text@0.0.3",
      "backend/database",
      "backend/html-parser",
      "backend/model",
      "backend/server",
      "github:joelcoxokc/aurelia-interface-platforms@master",
      "github:joelcoxokc/aurelia-interface-platforms@master/aurelia-interface-platforms",
      "github:joelcoxokc/aurelia-interface-platforms@master/browser",
      "github:joelcoxokc/aurelia-interface-platforms@master/device",
      "github:joelcoxokc/aurelia-interface-platforms@master/platform",
      "github:joelcoxokc/aurelia-interface-platforms@master/support",
      "github:rstacruz/nprogress@0.2.0",
      "github:rstacruz/nprogress@0.2.0/nprogress",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.19",
      "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "npm:aurelia-binding@1.0.0-beta.1.0.1/aurelia-binding",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "npm:aurelia-framework@1.0.0-beta.1.0.2/aurelia-framework",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-http-client@1.0.0-beta.1",
      "npm:aurelia-http-client@1.0.0-beta.1/aurelia-http-client",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal@1.0.0-beta.1",
      "npm:aurelia-pal@1.0.0-beta.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1",
      "npm:aurelia-task-queue@1.0.0-beta.1/aurelia-task-queue",
      "npm:aurelia-templating@1.0.0-beta.1",
      "npm:aurelia-templating@1.0.0-beta.1/aurelia-templating",
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
      "npm:string.prototype.repeat@0.2.0",
      "npm:string.prototype.repeat@0.2.0/repeat",
      "resources/au-aside",
      "resources/au-aside.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-dropdown",
      "resources/au-dropdown.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-icon",
      "resources/au-menu",
      "resources/au-menu.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-overlay",
      "resources/au-overlay.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-preview",
      "resources/au-preview.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-select-item",
      "resources/au-select-item.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-select-list",
      "resources/au-select-list.html!github:systemjs/plugin-text@0.0.3",
      "resources/au-settings-button",
      "resources/au-settings-button.html!github:systemjs/plugin-text@0.0.3",
      "resources/function-heading",
      "resources/function-heading.html!github:systemjs/plugin-text@0.0.3",
      "resources/loading-indicator",
      "resources/util",
      "services/analytics",
      "services/cache",
      "services/channel",
      "services/culture",
      "services/index",
      "services/language",
      "services/local",
      "services/profile",
      "services/screen-size"
    ]
  },
  buildCSS: false,

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
    "aurelia-interface-grid": "github:joelcoxokc/aurelia-interface-grid@master",
    "aurelia-interface-platforms": "github:joelcoxokc/aurelia-interface-platforms@master",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "commonmark": "npm:commonmark@0.22.1",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.19",
    "font-awesome": "npm:font-awesome@4.4.0",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:joelcoxokc/aurelia-interface-platforms@master": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
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
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-http-client@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
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
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
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
