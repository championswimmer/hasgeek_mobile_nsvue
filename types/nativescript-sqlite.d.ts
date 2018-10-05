declare module 'nativescript-sqlite' {
  class Sqlite extends Promise<any> {
    constructor(dbName: string, callback?: (err: Error, db: any) => void)
  }
  export = Sqlite
}