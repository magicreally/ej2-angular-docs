---
layout: post
title: Getting started with Angular File manager component | Syncfusion
description:  Checkout and learn about Getting started with Angular File manager component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular File manager component

This section explains how to create a simple **File Manager** component and its basic usage.

## Prerequisites

To get started with **File Manager** component, ensure the compatible versions of Angular and Typescript.

* Angular : `4+`
* Typescript : `2.6+`

## Setting up angular project

Angular provides the easiest way to set angular CLI projects using Angular CLI tool.

Install the CLI application globally to your machine by using following command.

```sh
npm install -g @angular/cli
```

To Create a new application, refer the below command

```sh
ng new syncfusion-angular-app
```

Navigate to the created project folder by using following command.

```sh
cd syncfusion-angular-app
```

>Refer [Syncfusion Angular Getting Started](../getting-started/angular-cli) section to know more about setting up `angular-cli` project.

## Adding Dependencies

The following list of dependencies are required to use the file manager component in your application.

```javascript
|-- @syncfusion/ej2-angular-filemanager
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager
```

## Installing Syncfusion FileManager package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-filemanager`](https://www.npmjs.com/package/@syncfusion/ej2-angular-filemanager/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-filemanager --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-filemanager@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-filemanager/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-filemanager@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-filemanager:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding style sheet to the application

To render the file manager component, import the file manager and its dependent component's styles as given below in `[src/styles.css]`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-angular-filemanager/styles/material.css';
```

>Note: To refer the combined component styles, use Syncfusion [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding File Manager module

After installing the package, the file manager component module is available to configure into your application from installed syncfusion package.

Refer to the following snippet to import the file manager module in `app.module.ts` from the `@syncfusion/ej2-angular-filemanager`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Imported syncfusion filemanager module from filemanager package
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Registering EJ2 filemanager Module
    FileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion component

Add the FileManager component by using `<ejs-filemanager>` selector in `template` section of the `app.component.ts` file.

Refer the FileManager component snippet in `app.component.ts` as follows.

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['app/app.component.css'],
  template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
</ejs-filemanager>`
})
export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations'
  };
}
```

>**Note:** The [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) must be defined while initializing the file manager. File manager utilizes the URL's mentioned in ajaxSettings to send [file operation](./file-operations) request to the server.
>The File Manager service link is given in `hostUrl`.

## Run the application

Use the npm run start command to run the application in the browser.

```sh
npm start
```

The following samples shows the basic file manager component in browser.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs1" %}

## File Download support

To perform the download operation, initialize the `downloadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) of File Manager component.

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['app/app.component.css'],
  template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
</ejs-filemanager>`
})
export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
}
```

## File Upload support

To perform the upload operation, initialize the `uploadUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) of File Manager Component.

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['app/app.component.css'],
  template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
  </ejs-filemanager>`
})
export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload'
  };
}
```

## Image Preview support

To perform the image preview support in the File Manager component, need to initialize the `getImageUrl` property in a [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) of File Manager component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/getting-started-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/getting-started-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/getting-started-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/getting-started-cs2" %}

## Injecting feature modules

Basically, the file manager component contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system. The above modules can be injected into file manager by importing them as providers in `app.module.ts`.

Refer the code snippet in for `app.module.ts`.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FileManagerModule
  ],
  providers: [NavigationPaneService, ToolbarService, DetailsViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/overview-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/overview-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/overview-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/overview-cs1" %}

>**Note:** The appearance of the File Manager can be customized by using [cssClass](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#cssclass) property. This adds a css class to the root of the File Manager which can be used to add new styles or override existing styles to the File Manager.

## Switching initial view of the File Manager

The initial view of the File Manager can be changed to details or largeicons view with the help of [view](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view) property. By default, the File Manager will be rendered in large icons view.
When the File Manager is initially rendered, [created](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#created) will be triggered. This event can be utilized for performing operations once the File Manager has been successfully created.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/view-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/view-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/view-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/view-cs1" %}

## Maintaining component state on page reload

The File Manager supports maintaining the component state on page reload. This can be achieved by enabling [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enablepersistence) property which maintains the following,
* Previous view of the File Manager - [View](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#view)
* Previous path of the File Manager - [Path](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#path)
* Previous selected items of the File Manager - [SelectedItems](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#selecteditems)

For every operation in File Manager, ajax request will be sent to the server which then processes the request and sends back the response. When the ajax request is success, [success](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#success) event will be triggered and [failure](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#failure) event will be triggered if the request gets failed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/persistence-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/persistence-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/persistence-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/persistence-cs1" %}

>**Note:** The files of the current folder opened in the File manager can be refreshed programatically by calling [refreshFiles](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#refreshfiles) method.

## Rendering component in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#enablertl) API to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/rtl-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/rtl-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/rtl-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/file-manager/rtl-cs1" %}

## Specifying the current path of the File Manager

The current path of the File Manager can be specified initially or dynamically using the [path](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#path) property.

The following code snippet demonstrates specifying the current path in File Manager on rendering.

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings: object;
    public path: string;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        // Specify the required current path
        this.path = '/Food';
    };
}

```
