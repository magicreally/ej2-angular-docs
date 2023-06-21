---
layout: post
title: Customize tab content height in Angular Tab component | Syncfusion
description: Learn here all about Customize tab content height in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize tab content height 
documentation: ug
domainurl: ##DomainURL##
---

# Customize tab content height in Angular Tab component

You can change the Tab content height by using the [`heightAdjustMode`](https://ej2.syncfusion.com/angular/documentation/api/tab#heightadjustmode) property. By default, the Tab content [`heightAdjustMode`](https://ej2.syncfusion.com/angular/documentation/api/tab#heightadjustmode) property is set to `Content` value.

* **None**: Each tab content height is set based on the Tab height. This value is used only the tab component having the [`height`](https://ej2.syncfusion.com/angular/documentation/api/tab#height) property.
* **Auto**: Each tab content height will take the maximum height of all other tabs content.
* **Content**: Each tab content height is set based on their own content.
* **Fill**: Each tab content height is set based on the full height of Tabs parent element.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/height-cs1/app/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/height-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/height-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/height-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/height-cs1" %}