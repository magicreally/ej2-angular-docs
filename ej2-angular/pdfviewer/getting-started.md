---
layout: post
title: Getting started with Angular Pdfviewer component | Syncfusion
description:  Checkout and learn about Getting started with Angular PDF Viewer component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with PDF Viewer component

This section explains the steps required to create a simple Angular PDF Viewer and demonstrates the basic usage of the PDF Viewer control in a Angular CLI application.

## Setup Angular Environment

You can use the [`Angular CLI`](https://github.com/angular/angular-cli) to setup your Angular applications.
To install Angular CLI globally use the following command.

```bash
npm install -g @angular/cli
```

N> Use the command **npm install --save @angular/cli@12.0.2** to install the latest Angular CLI version 12.0.2

## Create an Angular Application

Start a new Angular application using the Angular CLI command as follows.

```bash
ng new my-app
cd my-app
```

## Installing Syncfusion PDF Viewer package

All the available Essential JS 2 packages are published in `npmjs.com` registry. To install PDF Viewer component, use the following command.

```bash
npm install @syncfusion/ej2-angular-pdfviewer --save
```

## Registering PDF Viewer Module

Import PDF Viewer module into Angular application(app.module.ts) from the package `@syncfusion/ej2-angular-pdfviewer` [src/app/app.module.ts].

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the PdfViewer Module for the PDF Viewer component
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';
import { AppComponent } from './app.component';

@NgModule({
  //declaration of ej2-angular-pdfviewer module into NgModule
  imports: [BrowserModule, PdfViewerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService]
})
export class AppModule { }
```

## Adding CSS reference

Add the Angular PDF Viewer component’s styles as given below in `src/styles.css` file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
```

## Adding PDF Viewer component

Add the Angular PDF Viewer by using `<ejs-pdfviewer>` selector in `template` section of the `src/app/app.component.ts` file to render the PDF Viewer component.

```typescript
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         AnnotationService, TextSearchService, TextSelectionService,
         PrintService
       } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                       [serviceUrl]='service'
                       [documentPath]='document'
                       style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               AnnotationService, TextSearchService, TextSelectionService,
               PrintService]
})
export class AppComponent implements OnInit {
  public service = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
  }
}
```

## Run the application

Use the following command to run the application in browser.

```javascript
ng serve --open
```

The output will appear as follows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pdfviewer/getting-started-cs1" %}

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/)

## How to run the PDF Viewer web service

1. Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.
2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.
3. Use the below command to restore the required packages.

   ```sh
   dotnet restore
   ```

4. Use the below command to run the web service.

   ```sh
   dotnet run
   ```

5. You can see that the PDF Viewer server instance runs in the local host with the port number `localhost:5001`and navigate to the PDF Viewer Web control `localhost:5001/pdfviewer`which returns the default get response method. We can bind the link to the `serviceUrl` property of PDF Viewer as below.

   ```javascript
   export class AppComponent implements OnInit {
      public service = 'https://localhost:5001/pdfviewer';
      public document = 'PDF_Succinctly.pdf';
      ngOnInit(): void {
      }
   ```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Getting%20started).