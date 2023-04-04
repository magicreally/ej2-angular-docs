---
layout: post
title: Iframe in Angular Rich text editor component | Syncfusion
description: Learn here all about Iframe in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Iframe 
documentation: ug
domainurl: ##DomainURL##
---

# Iframe in Angular Rich text editor component

When the [iframeSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) option is enabled, the Rich Text Editor creates the iframe element as the content area on control initialization. It is used to display and editing the content in content area. The editor will display only the body tag of a < iframe > document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs5" %}

## IFrame attributes

The editor allows you to pass an additional attribute to body tag of a < iframe > element using attributes fields of the [`iframeSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) property. This property contains name/value pairs in string format. It is used to override the default appearance of the content area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs6" %}

## Adding external CSS/Script file

The editor offers you to add external CSS file to style the < iframe > element. Easily change the appearance of editor’s content using an external CSS file using [`styles`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) field in the iframeSettings property.

Likewise, add the external script file to the `< iframe >` element using the [`scripts`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs7" %}

> You can also explore our [iframe in Angular Rich Text Editor example](https://ej2.syncfusion.com/angular/demos/#/material/rich-text-editor/iframe) that shows how to render the iframe in Angular Rich Text Editor.