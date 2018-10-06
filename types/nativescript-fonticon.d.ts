declare module 'nativescript-fonticon' {
  export class TNSFontIcon {
    static css: any;
    static paths: any;
    static debug: boolean;
    static loadCss(): Promise<any>;
  }
  export function fonticon(value: string): string;

}