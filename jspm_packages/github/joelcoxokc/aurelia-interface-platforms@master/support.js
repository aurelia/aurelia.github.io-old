/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MozStyles = {
    appearance: 'MozAppearance',
    outlineRadius: 'MozOutlineRadius',
    outlineRadiusTopleft: 'MozOutlineRadiusTopleft',
    outlineRadiusTopright: 'MozOutlineRadiusTopright',
    outlineRadiusBottomright: 'MozOutlineRadiusBottomright',
    outlineRadiusBottomleft: 'MozOutlineRadiusBottomleft',
    tabSize: 'MozTabSize',
    binding: 'MozBinding',
    borderBottomColor: 'MozBorderBottomColors',
    borderLeftColor: 'MozBorderLeftColors',
    borderRightColor: 'MozBorderRightColors',
    borderTopColor: 'MozBorderTopColors',
    columns: 'MozColumns',
    columnCount: 'MozColumnCount',
    columnFill: 'MozColumnFill',
    columnWidth: 'MozColumnWidth',
    columnGap: 'MozColumnGap',
    columnRule: 'MozColumnRule',
    columnRuleColor: 'MozColumnRuleColor',
    columnRuleStyle: 'MozColumnRuleStyle',
    columnRuleWidth: 'MozColumnRuleWidth',
    floatEdge: 'MozFloatEdge',
    osxFontSmoothing: 'MozOsxFontSmoothing',
    forceBrokenImageIcon: 'MozForceBrokenImageIcon',
    imageRegion: 'MozImageRegion',
    orient: 'MozOrient',
    textAlignLast: 'MozTextAlignLast',
    textSizeAdjust: 'MozTextSizeAdjust',
    userFocus: 'MozUserFocus',
    userInput: 'MozUserInput',
    userModify: 'MozUserModify',
    userSelect: 'MozUserSelect',
    windowDragging: 'MozWindowDragging',
    windowShadow: 'MozWindowShadow',
    hyphens: 'MozHyphens',
    boxAlign: 'MozBoxAlign',
    boxDirection: 'MozBoxDirection',
    boxFlex: 'MozBoxFlex',
    boxOrient: 'MozBoxOrient',
    boxPack: 'MozBoxPack',
    boxOrdinalGroup: 'MozBoxOrdinalGroup',
    stackSizing: 'MozStackSizing',
    transform: 'MozTransform',
    transformOrigin: 'MozTransformOrigin',
    perspectiveOrigin: 'MozPerspectiveOrigin',
    perspective: 'MozPerspective',
    transformStyle: 'MozTransformStyle',
    backfaceVisibility: 'MozBackfaceVisibility',
    borderImage: 'MozBorderImage',
    transition: 'MozTransition',
    transitionDelay: 'MozTransitionDelay',
    transitionDuration: 'MozTransitionDuration',
    transitionProperty: 'MozTransitionProperty',
    transitionTimingFunction: 'MozTransitionTimingFunction',
    animation: 'MozAnimation',
    animationDelay: 'MozAnimationDelay',
    animationDirection: 'MozAnimationDirection',
    animationDuration: 'MozAnimationDuration',
    animationFillMode: 'MozAnimationFillMode',
    animationIterationCount: 'MozAnimationIterationCount',
    animationName: 'MozAnimationName',
    animationPlayState: 'MozAnimationPlayState',
    animationTimingFunction: 'MozAnimationTimingFunction',
    boxSizing: 'MozBoxSizing',
    fontFeatureSettings: 'MozFontFeatureSettings',
    fontLanguageOverride: 'MozFontLanguageOverride',
    paddingEnd: 'MozPaddingEnd',
    paddingStart: 'MozPaddingStart',
    marginEnd: 'MozMarginEnd',
    marginStart: 'MozMarginStart',
    borderEnd: 'MozBorderEnd',
    borderEndColor: 'MozBorderEndColor',
    borderEndStyle: 'MozBorderEndStyle',
    borderEndWidth: 'MozBorderEndWidth',
    borderStart: 'MozBorderStart',
    borderStartColor: 'MozBorderStartColor',
    borderStartStyle: 'MozBorderStartStyle',
    borderStartWidth: 'MozBorderStartWidth'
  };

  var WekbitStyles = {
    animation: 'webkitAnimation',
    animationDelay: 'webkitAnimationDelay',
    animationDirection: 'webkitAnimationDirection',
    animationDuration: 'webkitAnimationDuration',
    animationFillMode: 'webkitAnimationFillMode',
    animationIterationCount: 'webkitAnimationIterationCount',
    animationName: 'webkitAnimationName',
    animationPlayState: 'webkitAnimationPlayState',
    animationTimingFunction: 'webkitAnimationTimingFunction',
    appearance: 'webkitAppearance',
    aspectRatio: 'webkitAspectRatio',
    backdropFilter: 'webkitBackdropFilter',
    backfaceVisibility: 'webkitBackfaceVisibility',
    backgroundClip: 'webkitBackgroundClip',
    backgroundComposite: 'webkitBackgroundComposite',
    backgroundOrigin: 'webkitBackgroundOrigin',
    backgroundSize: 'webkitBackgroundSize',
    borderAfter: 'webkitBorderAfter',
    borderAfterColor: 'webkitBorderAfterColor',
    borderAfterStyle: 'webkitBorderAfterStyle',
    borderAfterWidth: 'webkitBorderAfterWidth',
    borderBefore: 'webkitBorderBefore',
    borderBeforeColor: 'webkitBorderBeforeColor',
    borderBeforeStyle: 'webkitBorderBeforeStyle',
    borderBeforeWidth: 'webkitBorderBeforeWidth',
    borderEnd: 'webkitBorderEnd',
    borderEndColor: 'webkitBorderEndColor',
    borderEndStyle: 'webkitBorderEndStyle',
    borderEndWidth: 'webkitBorderEndWidth',
    borderFit: 'webkitBorderFit',
    borderHorizontalSpacing: 'webkitBorderHorizontalSpacing',
    borderImage: 'webkitBorderImage',
    borderRadius: 'webkitBorderRadius',
    borderStart: 'webkitBorderStart',
    borderStartColor: 'webkitBorderStartColor',
    borderStartStyle: 'webkitBorderStartStyle',
    borderStartWidth: 'webkitBorderStartWidth',
    borderVerticalSpacing: 'webkitBorderVerticalSpacing',
    boxAlign: 'webkitBoxAlign',
    boxDecorationBreak: 'webkitBoxDecorationBreak',
    boxDirection: 'webkitBoxDirection',
    boxFlex: 'webkitBoxFlex',
    boxFlexGroup: 'webkitBoxFlexGroup',
    boxLines: 'webkitBoxLines',
    boxOrdinalGroup: 'webkitBoxOrdinalGroup',
    boxOrient: 'webkitBoxOrient',
    boxPack: 'webkitBoxPack',
    boxReflect: 'webkitBoxReflect',
    boxShadow: 'webkitBoxShadow',
    clipPath: 'webkitClipPath',
    colorCorrection: 'webkitColorCorrection',
    columnAxis: 'webkitColumnAxis',
    columnBreakAfter: 'webkitColumnBreakAfter',
    columnBreakBefore: 'webkitColumnBreakBefore',
    columnBreakInside: 'webkitColumnBreakInside',
    cursorVisibility: 'webkitCursorVisibility',
    dashboardRegion: 'webkitDashboardRegion',
    filter: 'webkitFilter',
    flowFrom: 'webkitFlowFrom',
    flowInto: 'webkitFlowInto',
    fontFeatureSettings: 'webkitFontFeatureSettings',
    fontKerning: 'webkitFontKerning',
    fontSizeDelta: 'webkitFontSizeDelta',
    fontSmoothing: 'webkitFontSmoothing',
    fontVariantLigatures: 'webkitFontVariantLigatures',
    hyphenateCharacter: 'webkitHyphenateCharacter',
    hyphenateLimitAfter: 'webkitHyphenateLimitAfter',
    hyphenateLimitBefore: 'webkitHyphenateLimitBefore',
    hyphenateLimitLines: 'webkitHyphenateLimitLines',
    hyphens: 'webkitHyphens',
    initialLetter: 'webkitInitialLetter',
    lineAlign: 'webkitLineAlign',
    lineBoxContain: 'webkitLineBoxContain',
    lineBreak: 'webkitLineBreak',
    lineClamp: 'webkitLineClamp',
    lineGrid: 'webkitLineGrid',
    lineSnap: 'webkitLineSnap',
    locale: 'webkitLocale',
    logicalHeight: 'webkitLogicalHeight',
    logicalWidth: 'webkitLogicalWidth',
    marginAfter: 'webkitMarginAfter',
    marginAfterCollapse: 'webkitMarginAfterCollapse',
    marginBefore: 'webkitMarginBefore',
    marginBeforeCollapse: 'webkitMarginBeforeCollapse',
    marginBottomCollapse: 'webkitMarginBottomCollapse',
    marginCollapse: 'webkitMarginCollapse',
    marginEnd: 'webkitMarginEnd',
    marginStart: 'webkitMarginStart',
    marginTopCollapse: 'webkitMarginTopCollapse',
    marquee: 'webkitMarquee',
    marqueeDirection: 'webkitMarqueeDirection',
    marqueeIncrement: 'webkitMarqueeIncrement',
    marqueeRepetition: 'webkitMarqueeRepetition',
    marqueeSpeed: 'webkitMarqueeSpeed',
    marqueeStyle: 'webkitMarqueeStyle',
    mask: 'webkitMask',
    maskBoxImage: 'webkitMaskBoxImage',
    maskBoxImageOutset: 'webkitMaskBoxImageOutset',
    maskBoxImageRepeat: 'webkitMaskBoxImageRepeat',
    maskBoxImageSlice: 'webkitMaskBoxImageSlice',
    maskBoxImageSource: 'webkitMaskBoxImageSource',
    maskBoxImageWidth: 'webkitMaskBoxImageWidth',
    maskClip: 'webkitMaskClip',
    maskComposite: 'webkitMaskComposite',
    maskImage: 'webkitMaskImage',
    maskOrigin: 'webkitMaskOrigin',
    maskPosition: 'webkitMaskPosition',
    maskPositionX: 'webkitMaskPositionX',
    maskPositionY: 'webkitMaskPositionY',
    maskRepeat: 'webkitMaskRepeat',
    maskRepeatX: 'webkitMaskRepeatX',
    maskRepeatY: 'webkitMaskRepeatY',
    maskSize: 'webkitMaskSize',
    maskSourceType: 'webkitMaskSourceType',
    maxLogicalHeight: 'webkitMaxLogicalHeight',
    maxLogicalWidth: 'webkitMaxLogicalWidth',
    minLogicalHeight: 'webkitMinLogicalHeight',
    minLogicalWidth: 'webkitMinLogicalWidth',
    nbspMode: 'webkitNbspMode',
    paddingAfter: 'webkitPaddingAfter',
    paddingBefore: 'webkitPaddingBefore',
    paddingEnd: 'webkitPaddingEnd',
    paddingStart: 'webkitPaddingStart',
    printColorAdjust: 'webkitPrintColorAdjust',
    regionBreakAfter: 'webkitRegionBreakAfter',
    regionBreakBefore: 'webkitRegionBreakBefore',
    regionBreakInside: 'webkitRegionBreakInside',
    regionFragment: 'webkitRegionFragment',
    rtlOrdering: 'webkitRtlOrdering',
    rubyPosition: 'webkitRubyPosition',
    scrollSnapCoordinate: 'webkitScrollSnapCoordinate',
    scrollSnapDestination: 'webkitScrollSnapDestination',
    scrollSnapPointsX: 'webkitScrollSnapPointsX',
    scrollSnapPointsY: 'webkitScrollSnapPointsY',
    scrollSnapType: 'webkitScrollSnapType',
    shapeImageThreshold: 'webkitShapeImageThreshold',
    shapeMargin: 'webkitShapeMargin',
    shapeOutside: 'webkitShapeOutside',
    svgShadow: 'webkitSvgShadow',
    textCombine: 'webkitTextCombine',
    textDecoration: 'webkitTextDecoration',
    textDecorationColor: 'webkitTextDecorationColor',
    textDecorationLine: 'webkitTextDecorationLine',
    textDecorationSkip: 'webkitTextDecorationSkip',
    textDecorationStyle: 'webkitTextDecorationStyle',
    textDecorationsInEffect: 'webkitTextDecorationsInEffect',
    textEmphasis: 'webkitTextEmphasis',
    textEmphasisColor: 'webkitTextEmphasisColor',
    textEmphasisPosition: 'webkitTextEmphasisPosition',
    textEmphasisStyle: 'webkitTextEmphasisStyle',
    textFillColor: 'webkitTextFillColor',
    textOrientation: 'webkitTextOrientation',
    textSecurity: 'webkitTextSecurity',
    textStroke: 'webkitTextStroke',
    textStrokeColor: 'webkitTextStrokeColor',
    textStrokeWidth: 'webkitTextStrokeWidth',
    textUnderlinePosition: 'webkitTextUnderlinePosition',
    transformStyle: 'webkitTransformStyle',
    transition: 'webkitTransition',
    transitionDelay: 'webkitTransitionDelay',
    transitionDuration: 'webkitTransitionDuration',
    transitionProperty: 'webkitTransitionProperty',
    transitionTimingFunction: 'webkitTransitionTimingFunction',
    userDrag: 'webkitUserDrag',
    userModify: 'webkitUserModify',
    userSelect: 'webkitUserSelect',
    writingMode: 'webkitWritingMode'
  };

  var WebkitEvents = {
    cancelAnimationFrame: 'webkitCancelAnimationFrame',
    cancelRequestAnimationFrame: 'webkitCancelRequestAnimationFrame',
    convertPointFromNodeToPage: 'webkitConvertPointFromNodeToPage',
    convertPointFromPageToNode: 'webkitConvertPointFromPageToNode',
    notifications: 'webkitNotifications',
    requestAnimationFrame: 'webkitRequestAnimationFrame',
    transitionend: 'webKitTransitionEnd',
    animationend: 'webkitAnimationEnd',
    animationstart: 'webkitAnimationStart'
  };

  var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
  var EVENTS = {
    safari: WebkitEvents
  };
  var STYLES = {
    safari: WekbitStyles,
    firefox: MozStyles
  };

  var Support = (function () {
    function Support(browser, platfrom) {
      _classCallCheck(this, Support);

      this.isTouch = isTouch;
      this.clickEvent = isTouch ? 'touchstart' : 'click';

      this.styles = STYLES[browser.name];
      this.events = EVENTS[browser.name];
    }

    _createClass(Support, [{
      key: 'style',
      value: function style(options) {
        for (var key in options) {
          if (this.styles[key]) {
            options[this.styles[key]] = options[key];
          }
        }
      }
    }, {
      key: 'transitionEnd',
      get: function get() {
        return this.events.transitionend || 'transitionend';
      }
    }, {
      key: 'animationEnd',
      get: function get() {
        return this.events.animationend || 'animationend';
      }
    }, {
      key: 'animationStart',
      get: function get() {
        return this.events.animationstart || 'animationstart';
      }
    }]);

    return Support;
  })();

  exports.Support = Support;
});