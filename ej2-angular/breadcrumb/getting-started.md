---
layout: post
title: Getting started with Angular Breadcrumb component | Syncfusion
description:  Checkout and learn about Getting started with Angular Breadcrumb component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Angular Breadcrumb component

This section explains how to create a simple Breadcrumb, and demonstrate the basic usage of the Breadcrumb module in an Angular environment.

## Dependencies

The list of dependencies required to use the Breadcrumb module in your application is given below:

```javascript
|-- @syncfusion/ej2-angular-navigations
    |-- @syncfusion/ej2-angular-base
    |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-base
        |-- @syncfusion/ej2-data
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-splitbuttons
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Setup Angular environment

You can use [Angular CLI](https://github.com/angular/angular-cli) to setup your Angular applications. To install Angular CLI use the following command.

```
npm install -g @angular/cli
```

## Create an Angular application

Start a new Angular application using below Angular CLI command.

```
ng new my-app
cd my-app
```

## Installing Syncfusion  Breadcrumb Package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the Angular Syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Currently, Syncfusion provides two types of package structures for Angular components,
1. Ivy library distribution package [format](https://angular.io/guide/angular-package-format#angular-package-format)
2. Angular compatibility compiler(Angular’s legacy compilation and rendering pipeline) package.

### Ivy library distribution package

Syncfusion Angular packages(`>=20.2.36`) has been moved to the Ivy distribution to support the Angular [Ivy](https://docs.angular.lat/guide/ivy) rendering engine and the package are compatible with Angular version 12 and above. To download the package use the below command.

Add [`@syncfusion/ej2-angular-navigations`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations --save
```

### Angular compatibility compiled package(ngcc)

For Angular version below 12, you can use the legacy (ngcc) package of the Syncfusion Angular components. To download the `ngcc` package use the below.

Add [`@syncfusion/ej2-angular-navigations@ngcc`](https://www.npmjs.com/package/@syncfusion/ej2-angular-navigations/v/20.2.38-ngcc) package to the application.

```bash
npm install @syncfusion/ej2-angular-navigations@ngcc --save
```

To mention the ngcc package in the `package.json` file, add the suffix `-ngcc` with the package version as below.

```bash
@syncfusion/ej2-angular-navigations:"20.2.38-ngcc"
```

>Note: If the ngcc tag is not specified while installing the package, the Ivy Library Package will be installed and this package will throw a warning.

## Adding Breadcrumb module

Import Breadcrumb module into Angular application(app.module.ts) from the package
`@syncfusion/ej2-angular-navigations`.

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion Breadcrumb module from navigations package.
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, BreadcrumbModule], // Registering EJ2 Breadcrumb Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Adding Syncfusion Breadcrumb component

Modify the template in `app.component.ts` file with `ejs-breadcrumb` to render the Breadcrumb
component.

```javascript
import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb. -->
            <ejs-breadcrumb [enableNavigation]="false"></ejs-breadcrumb>`
})

export class AppComponent {}
```

## Adding CSS reference

Add Breadcrumb component's styles as given below in `style.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
```

## Running the application

Run the application in the browser using the following command:

```
ng serve
```

The following example shows a basic `Breadcrumb` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/getting-started-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/getting-started-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/getting-started-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/getting-started-cs5" %}

## Add Items to the Breadcrumb Component

Use `items` property to bind items for Breadcrumb component. The below example demonstrates the basic rendering of Breadcrumb with items support.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/getting-started-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/getting-started-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/getting-started-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/getting-started-cs6" %}

## Enable or Disable Navigation

This feature enables or disables the item navigation. By default, the navigation will be enabled when setting `Url` property. To prevent breadcrumb item navigation, set `enableNavigation` property as false in Breadcrumb. The below example shows enabling and disabling the navigation of Breadcrumb items.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/breadcrumb/enable-navigation-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/breadcrumb/enable-navigation-cs1" %}