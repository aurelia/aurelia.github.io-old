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
      "github:aurelia/platforms@master.js",
      "github:aurelia/platforms@master/aurelia-platforms.js",
      "github:hammerjs/hammer.js@2.0.6.js",
      "github:hammerjs/hammer.js@2.0.6/hammer.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:rstacruz/nprogress@0.2.0.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.20.js",
      "github:rstacruz/nprogress@0.2.0/nprogress.js",
      "github:systemjs/plugin-css@0.1.20.js",
      "github:systemjs/plugin-css@0.1.20/css.js",
      "github:systemjs/plugin-text@0.0.3.js",
      "github:systemjs/plugin-text@0.0.3/text.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.2.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.2/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.2.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.2.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.4.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.4/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history.js",
      "npm:aurelia-http-client@1.0.0-beta.1.1.2.js",
      "npm:aurelia-http-client@1.0.0-beta.1.1.2/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.2.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.2/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.6.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.6/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.1.1.js",
      "npm:aurelia-path@1.0.0-beta.1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.1.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.1.3.js",
      "npm:aurelia-router@1.0.0-beta.1.1.3/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.2/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.2.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.2/aurelia-templating.js",
      "npm:commonmark@0.22.1.js",
      "npm:commonmark@0.22.1/lib/blocks.js",
      "npm:commonmark@0.22.1/lib/common.js",
      "npm:commonmark@0.22.1/lib/from-code-point.js",
      "npm:commonmark@0.22.1/lib/html.js",
      "npm:commonmark@0.22.1/lib/index.js",
      "npm:commonmark@0.22.1/lib/inlines.js",
      "npm:commonmark@0.22.1/lib/node.js",
      "npm:commonmark@0.22.1/lib/normalize-reference.js",
      "npm:commonmark@0.22.1/lib/xml.js",
      "npm:entities@1.1.1.js",
      "npm:entities@1.1.1/index.js",
      "npm:entities@1.1.1/lib/decode.js",
      "npm:entities@1.1.1/lib/decode_codepoint.js",
      "npm:entities@1.1.1/lib/encode.js",
      "npm:entities@1.1.1/maps/decode.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:entities@1.1.1/maps/entities.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:entities@1.1.1/maps/legacy.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:entities@1.1.1/maps/xml.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:mdurl@1.0.1/decode.js",
      "npm:mdurl@1.0.1/encode.js",
      "npm:moment@2.11.2.js",
      "npm:moment@2.11.2/moment.js",
      "npm:numeral@1.5.3.js",
      "npm:numeral@1.5.3/numeral.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:string.prototype.repeat@0.2.0.js",
      "npm:string.prototype.repeat@0.2.0/repeat.js"
    ],
    "app-build.js": [
      "api/class-or-interface.html!github:systemjs/plugin-text@0.0.3.js",
      "api/class-or-interface.js",
      "api/index.html!github:systemjs/plugin-text@0.0.3.js",
      "api/index.js",
      "api/product.html!github:systemjs/plugin-text@0.0.3.js",
      "api/product.js",
      "app.css!github:systemjs/plugin-text@0.0.3.js",
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "article/article.html!github:systemjs/plugin-text@0.0.3.js",
      "article/article.js",
      "article/index.html!github:systemjs/plugin-text@0.0.3.js",
      "article/index.js",
      "aurelia-docs/aurelia-doc.js",
      "aurelia-docs/html-parser.js",
      "aurelia-docs/resources/au-alert.html!github:systemjs/plugin-text@0.0.3.js",
      "aurelia-docs/resources/au-alert.js",
      "aurelia-docs/resources/au-demo.html!github:systemjs/plugin-text@0.0.3.js",
      "aurelia-docs/resources/au-demo.js",
      "aurelia-docs/resources/au-doc-section.html!github:systemjs/plugin-text@0.0.3.js",
      "aurelia-docs/resources/au-doc-section.js",
      "aurelia-docs/resources/code-listing.html!github:systemjs/plugin-text@0.0.3.js",
      "aurelia-docs/resources/code-listing.js",
      "aurelia-docs/resources/index.js",
      "aurelia-docs/resources/source-code.js",
      "backend/server.js",
      "main.js",
      "model/api.js",
      "model/products.js",
      "resources/au-aside.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-aside.js",
      "resources/au-dropdown.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-dropdown.js",
      "resources/au-icon.js",
      "resources/au-menu.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-menu.js",
      "resources/au-offscreen.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-offscreen.js",
      "resources/au-overlay.js",
      "resources/au-preview.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-preview.js",
      "resources/au-select-item.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-select-item.js",
      "resources/au-select-list.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-select-list.js",
      "resources/au-settings-button.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/au-settings-button.js",
      "resources/compiler.js",
      "resources/function-heading.html!github:systemjs/plugin-text@0.0.3.js",
      "resources/function-heading.js",
      "resources/loading-indicator.js",
      "resources/scroll-to.js",
      "resources/util.js",
      "services/analytics.js",
      "services/cache.js",
      "services/channel.js",
      "services/culture.js",
      "services/index.js",
      "services/language.js",
      "services/local.js",
      "services/profile.js",
      "services/screen.js",
      "services/toc-service.js",
      "services/touch.js"
    ]
  },
  buildCSS: false,

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.2",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
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
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
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
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
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
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
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
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.4",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
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
