declare module 'aurelia-platforms' {
  import { DOM }  from 'aurelia-pal';
  export class AureliaDeviceSupport {
    name: any;
    isMobile(): any;
    isTablet(): any;
    isDesktop(): any;
  }
  export class AureliaBrowserSupport {
    name: any;
    isOpera(): any;
    isIE(): any;
    isEdge(): any;
    isFirefox(): any;
    isSafari(): any;
    isCoast(): any;
    isIOSWebview(): any;
    isAppleWebKit(): any;
    isChrome(): any;
    isAndroidBrowser(): any;
    isSilk(): any;
  }
  export class AureliaPlatformsSupport {
    name: any;
    isAndroid(): any;
    isIos(): any;
    isMacintosh(): any;
    isWindows(): any;
    isLinux(): any;
  }
  export class AureliaEngineSupport {
    isTrident(): any;
    isEdge(): any;
    isWebKit(): any;
    isGecko(): any;
  }
  export const PLATFORMS: any;
  export function configure(): any;
}