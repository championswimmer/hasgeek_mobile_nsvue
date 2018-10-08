namespace Log {
  type Tag = string | any
  /**
   * console.info (only in dev mode)
   */
  export function v(msg: any): void;
  export function v(tag: string, msg: any): void;
  export function v(tagOrMsg: Tag, msg?: string) {
    if (TNS_ENV === 'development')
      console.info(msg)
  }

  /**
   * console.log (only in dev mode)
   */
  export function d(msg: any): void;
  export function d(tag: string, msg: any): void;
  export function d(tagOrMsg: Tag, msg?: string) {
    if (TNS_ENV === 'development') 
      console.log(msg)
  }

  /**
   * console.warn (only in dev mode)
   */
  export function w(msg: any): void;
  export function w(tag: string, msg: any): void;
  export function w(tagOrMsg: Tag, msg?: string) {
    console.warn(msg)
  }

  /**
   * console.error (only in dev mode)
   */
  export function e(msg: any): void;
  export function e(tag: string, msg: any): void;
  export function e(tagOrMsg: Tag, msg?: string) {
    console.error(msg)
  }
}
export { Log }
export default Log