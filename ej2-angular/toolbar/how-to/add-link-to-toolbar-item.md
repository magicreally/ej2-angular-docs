---
layout: post
title: Add link to toolbar item in Angular Toolbar component | Syncfusion
description: Learn here all about Add link to toolbar item in Syncfusion Angular Toolbar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add link to toolbar item 
documentation: ug
domainurl: ##DomainURL##
---

# Add link to toolbar item in Angular Toolbar component

You can add link inside Toolbar using Angular **ng-template**. We need to use `ng-template` inside the `e-item` tag with `#template` attribute, which is mandatory to render the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/toolbar/toolbar-link-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-link-cs1" %}