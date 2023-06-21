---
layout: post
title: Setting max height to the dialog in Angular Dialog component | Syncfusion
description: Learn here all about Setting max height to the dialog in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Setting max height to the dialog 
documentation: ug
domainurl: ##DomainURL##
---

# Setting max height to the dialog in Angular Dialog component

By default, the maxHeight for the Dialog is calculated based on the target. If the target is not specified externally, the Dialog consider the body as target and will calculate the maxHeight based on it. We have an option to set the maxHeight of the Dialog in the [beforeOpen](https://ej2.syncfusion.com/angular/documentation/api/dialog/#beforeOpen) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/max-height-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/max-height-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/max-height-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/max-height-cs1" %}
