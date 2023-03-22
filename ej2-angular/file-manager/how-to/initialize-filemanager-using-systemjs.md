---
layout: post
title: Initialize filemanager using systemjs in Angular File manager component | Syncfusion
description: Learn here all about Initialize filemanager using systemjs in Syncfusion Angular File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Initialize filemanager using systemjs 
documentation: ug
domainurl: ##DomainURL##
---

# Initialize filemanager using systemjs in Angular File manager component

File manager can also be initialized using `SystemJS` as follows

## Installation and configuration

* To setup basic `Angular` sample use the following commands.

  ```sh
  git clone https://github.com/angular/quickstart.git quickstart
  cd quickstart
  npm install
  ```

For more information, refer to [Angular sample setup](https://angular.io/guide/setup-local).

* Install Syncfusion file manager packages using the below command.

  ```sh
  npm install @syncfusion/ej2-angular-filemanager --save
  ```

The above package installs File Manager dependencies which are required to render the component in an Angular environment.

* Syncfusion `ej2-angular-filemanager` packages need to be mapped in `systemjs.config.js` configuration file.

```javascript
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      "syncfusion:": "node_modules/@syncfusion/", // syncfusion alias

    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // syncfusion bundles
      "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
      "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
      "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
      "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
      "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
      "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
      "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
      "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
      "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
      "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
      "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
      "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
      "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
      "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
      "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
      "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
      "@syncfusion/ej2-filemanager": "syncfusion:ej2-filemanager/dist/ej2-filemanager.umd.min.js",
      "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",
      "@syncfusion/ej2-angular-filemanager": "syncfusion:ej2-angular-filemanager/dist/ej2-angular-filemanager.umd.min.js",

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
```

To render the file manager component, need to import file manager and its dependent component's styles as given below in `style.css`.

```css
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-layouts/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-lists/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-angular-filemanager/styles/material.css';
```

>Note: If you want to refer the combined component styles,
please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Create a simple File Manager

Refer the following code to include the file manager in application .

* Create an `Angular` component with file manager. Add the FileManager component by using <ejs-filemanager> selector in template section of the `app.component.ts` file.

  ```HTML
  <ejs-filemanager id='overview' [ajaxSettings]='ajaxSettings'>
  </ejs-filemanager>
  ```

* Create an `Angular` module and include the above file manager component.
* In the module, declare the Component and Directives required to render the file manager.
* Bootstrap the application with the above module.

Refer to the following snippet to import the `FileManagerAllModule` in `app.module.ts` from the `@syncfusion/ej2-angular-filemanager`.

```Typescript
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';

import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerAllModule, HttpModule, JsonpModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

> `systemjs.config.js` file should be configured as described in the [Installation and configuration](#installation-and-configuration) section.

## Run the application

Use the npm run start command to run the application in the browser.

```sh
npm start
```

The following samples shows the file manager component in browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/getting-started-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/getting-started-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/getting-started-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs3" %}