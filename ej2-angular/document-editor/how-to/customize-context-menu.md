---
layout: post
title: Customize context menu in Angular Document editor component | Syncfusion
description: Learn here all about Customize context menu in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize context menu 
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in Angular Document editor component

## How to customize context menu in Document Editor

Document Editor allows you to add custom option in context menu. It can be achieved by using the [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method and custom action is defined using the [`customContextMenuSelect`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/customContentMenuEventArgs/)

### Add Custom Option

The following code shows how to add custom option in context menu.

```typescript
import { Component, OnInit,ViewChild } from '@angular/core';
import { ToolbarService ,DocumentEditorContainerComponent, CustomContentMenuEventArgs} from '@syncfusion/ej2-angular-documenteditor';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
@Component({
    selector: 'app-root',
    // specifies the template string for the DocumentEditorContainer component
    template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
    providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings']};
    ngOnInit(): void {
    }
    onCreate() {
     // creating Custom Options
     let menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        }];
    // adding Custom Options
    this.container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    this.container.documentEditor.customContextMenuSelect = (args: any): void => {
        // custom Options Functionality
        let id: string = this.container.documentEditor.element.id;
        switch (args.id) {
            case id + 'search_in_google':
                let searchContent: string = this.container.documentEditor.selection.text;
                if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                    window.open('http://google.com/search?q=' + searchContent);
                }
                break;
        }
    };
    }
}
```

### Customize custom option in context menu

Document Editor allows you to customize the added custom option and also to hide/show default context menu.

#### Hide default context menu items

Using [`addCustomMenu()`](../../api/document-editor/contextMenu/#addcustommenu) method, you can hide the default context menu. By setting second parameter as true.

The following code shows how to hide default context menu and add custom option in context menu.

```typescript
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings']};
    ngOnInit(): void {
    }
    onCreate() {
     // creating Custom Options
     let menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        }];
    // adding Custom Options
    this.container.documentEditor.contextMenu.addCustomMenu(menuItems, true);
    }
}
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the [`customContextMenuBeforeOpen`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/beforeOpenCloseCustomContentMenuEventArgs/).

```typescript
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria', 'Windings']};
    ngOnInit(): void {
    }
    onCreate() {
        debugger;
     // creating Custom Options
     let menuItems: MenuItemModel[] = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        }];
    // adding Custom Options
    this.container.documentEditor.contextMenu.addCustomMenu(menuItems, false);
    // custom Options Select Event
    this.container.documentEditor.customContextMenuSelect = (args: any): void => {
        // custom Options Functionality
        let id: string = this.container.documentEditor.element.id;
        switch (args.id) {
            case id + 'search_in_google':
                let searchContent: string = this.container.documentEditor.selection.text;
                if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
                    window.open('http://google.com/search?q=' + searchContent);
                }
                break;
        }
    };
    //  custom options hide/show functionality
    this.container.documentEditor.customContextMenuBeforeOpen = (args: any): void => {
        let search: any = document.getElementById(args.ids[0]);
        search.style.display = 'none';
        let searchContent: string = this.container.documentEditor.selection.text;
        if (!this.container.documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
            search.style.display = 'block';
        }
    };
    }
}
```

The following is the output of custom context menu with customization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/customize-context-menu-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/document-editor/customize-context-menu-cs1" %}
