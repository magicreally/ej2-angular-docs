---
layout: post
title: Prevent the focus on the first element in Angular Dialog component | Syncfusion
description: Learn here all about Prevent the focus on the first element in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Prevent the focus on the first element 
documentation: ug
domainurl: ##DomainURL##
---

# Prevent the focus on the first element in Angular Dialog component

By default, the dialog focuses on the first elements of the content area which can be active and focusable. You can prevent this default focusing behavior using the [open](https://ej2.syncfusion.com/angular/documentation/api/dialog/#open) event and by enabling the `preventFocus` argument.

Bind the open event and enable the preventFocus argument within an event like the below sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-focus-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dialog/dlg-focus-cs1" %}