# HasGeek

> HasGeek Mobile App

## Production Mode

Following changes need to be made when building for production

### Vue config silent
In `main.ts` set
```js
Vue.config.silent = true;
```
By default in dev mode, silent is false, and full Vue component creation
logs are printed.

## Development Mode
### Disable minification in Webpack
Disabling minification allows us to get more meaningful stacktraces from
the device.

In `webpack.config.js` comment these lines

```js
      // Minify JavaScript code
      new UglifyJSWebpackPlugin({
        ...
        ...
      })
```
### Database

 * To pull out database and inspect locally (in Android)

    Run following command
    ```shell
    adb exec-out run-as package.name cat databases/hasgeek.db > hasgeek.db
    ```

#### Create Commands

```sql
BEGIN TRANSACTION
SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" IN ('event', 'conference', 'space', 'proposal', 'venue', 'room')
SELECT * FROM "sqlite_master" WHERE "type" = 'index' AND "tbl_name" IN ('event', 'conference', 'space', 'proposal', 'venue', 'room')
CREATE TABLE "event" ("name" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "start_time" varchar NOT NULL, "city" varchar NOT NULL, "venue" varchar NOT NULL, "google_maps_link" varchar NOT NULL, "end_time" varchar NOT NULL, "url" varchar NOT NULL, "funnel" varchar NOT NULL, "blurb" varchar NOT NULL)
CREATE TABLE "conference" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "start_time" datetime NOT NULL, "city" varchar NOT NULL, "venue" varchar NOT NULL, "google_maps_link" varchar NOT NULL, "end_time" datetime NOT NULL, "url" varchar NOT NULL, "funnel" varchar NOT NULL, "blurb" varchar NOT NULL, "color" text NOT NULL)
CREATE TABLE "space" ("id" integer PRIMARY KEY NOT NULL, "bg_color" varchar NOT NULL, "bg_image" varchar NOT NULL, "datelocation" varchar NOT NULL, "end" varchar NOT NULL, "explore_url" varchar NOT NULL, "json_url" varchar NOT NULL, "name" varchar NOT NULL, "start" varchar NOT NULL, "state" varchar NOT NULL, "status" integer NOT NULL, "timezone" varchar NOT NULL, "title" varchar NOT NULL, "url" varchar NOT NULL, "website" varchar NOT NULL)
CREATE TABLE "proposal" ("id" integer PRIMARY KEY NOT NULL, "bio" varchar NOT NULL, "comments" integer NOT NULL, "confirmed" boolean NOT NULL, "description" varchar NOT NULL, "fullname" varchar NOT NULL, "json_url" varchar NOT NULL, "level" varchar NOT NULL, "links" varchar NOT NULL, "name" varchar NOT NULL, "objective" varchar NOT NULL, "preview_video" varchar NOT NULL, "proposer" varchar NOT NULL, "requirements" varchar NOT NULL, "section" varchar NOT NULL, "slides" varchar NOT NULL, "speaker" varchar NOT NULL, "submitted" datetime NOT NULL, "title" varchar NOT NULL, "type" varchar NOT NULL, "url" varchar NOT NULL, "votes" integer NOT NULL, "space_id" integer)
CREATE TABLE "venue" ("name" varchar PRIMARY KEY NOT NULL, "address1" varchar NOT NULL, "address2" varchar NOT NULL, "city" varchar NOT NULL, "country" varchar NOT NULL, "description" varchar NOT NULL, "json_url" varchar NOT NULL, "latitude" varchar NOT NULL, "longitude" varchar NOT NULL, "postcode" varchar NOT NULL, "state" varchar NOT NULL, "title" varchar NOT NULL, "url" varchar NOT NULL)
CREATE TABLE "room" ("name" varchar PRIMARY KEY NOT NULL, "bgcolor" varchar NOT NULL, "description" varchar NOT NULL, "json_url" varchar NOT NULL, "title" varchar NOT NULL, "url" varchar NOT NULL, "venue" varchar NOT NULL)
CREATE TABLE "temporary_proposal" ("id" integer PRIMARY KEY NOT NULL, "bio" varchar NOT NULL, "comments" integer NOT NULL, "confirmed" boolean NOT NULL, "description" varchar NOT NULL, "fullname" varchar NOT NULL, "json_url" varchar NOT NULL, "level" varchar NOT NULL, "links" varchar NOT NULL, "name" varchar NOT NULL, "objective" varchar NOT NULL, "preview_video" varchar NOT NULL, "proposer" varchar NOT NULL, "requirements" varchar NOT NULL, "section" varchar NOT NULL, "slides" varchar NOT NULL, "speaker" varchar NOT NULL, "submitted" datetime NOT NULL, "title" varchar NOT NULL, "type" varchar NOT NULL, "url" varchar NOT NULL, "votes" integer NOT NULL, "space_id" integer, CONSTRAINT "FK_3b467a49eac84a73a66126fde4b" FOREIGN KEY ("space_id") REFERENCES "space" ("id"))
INSERT INTO "temporary_proposal"("id", "bio", "comments", "confirmed", "description", "fullname", "json_url", "level", "links", "name", "objective", "preview_video", "proposer", "requirements", "section", "slides", "speaker", "submitted", "title", "type", "url", "votes", "space_id") SELECT "id", "bio", "comments", "confirmed", "description", "fullname", "json_url", "level", "links", "name", "objective", "preview_video", "proposer", "requirements", "section", "slides", "speaker", "submitted", "title", "type", "url", "votes", "space_id" FROM "proposal"
DROP TABLE "proposal"
ALTER TABLE "temporary_proposal" RENAME TO "proposal"
CREATE TABLE "temporary_room" ("name" varchar PRIMARY KEY NOT NULL, "bgcolor" varchar NOT NULL, "description" varchar NOT NULL, "json_url" varchar NOT NULL, "title" varchar NOT NULL, "url" varchar NOT NULL, "venue" varchar NOT NULL, CONSTRAINT "FK_726dc1e51bcdf8be0b224c57eab" FOREIGN KEY ("venue") REFERENCES "venue" ("name"))
INSERT INTO "temporary_room"("name", "bgcolor", "description", "json_url", "title", "url", "venue") SELECT "name", "bgcolor", "description", "json_url", "title", "url", "venue" FROM "room"
DROP TABLE "room"
ALTER TABLE "temporary_room" RENAME TO "room"
COMMIT
```
## Usage

``` bash
# Install dependencies
npm install

# Build for production
npm run build
npm run build:<platform>

# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template

## Publishing

### iOS

```shell
npm run clean && npm run build:ios
cd dist
tns build ios --release --for-device
tns publish ios --ipa platforms/ios/build/device/dist.ipa
```

### Android

####  From  CLI
```shell
npm run clean && npm run build:android
cd dist
tns build android --release \
    --key-store-path ~/path/to/ketstore.jks \
    --key-store-password storepass \
    --key-store-alias ALIAS \
    --key-store-alias-password aliaspass
```

#### From XCode

1. Prepare project
    ```shell
    npm run clean && npm run build:ios
    cd dist
    tns prepare ios
    ```
2. Open `/dist/platforms/ios` in XCode

#### Via Android Studio

1. Prepare project
    ```shell
    npm run clean && npm run build:android
    cd dist
    tns prepare android
    ```
2. Open `/dist/platforms/android` in Android Studio