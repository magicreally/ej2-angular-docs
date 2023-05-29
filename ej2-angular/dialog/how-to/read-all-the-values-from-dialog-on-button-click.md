---
layout: post
title: Read all the values from dialog on button click in Angular Dialog component | Syncfusion
description: Learn here all about Read all the values from dialog on button click in Syncfusion Angular Dialog component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Read all the values from dialog on button click 
documentation: ug
domainurl: ##DomainURL##
---

# Read all the values from dialog on button click in Angular Dialog component

You can read the dialog element values by binding the action handler to the footer buttons. The buttons property provides the options to bind events to the action buttons.
For detailed information about buttons , refer to the [footer](../template/#footer) section.
In the below sample, value of input elements within the dialog has been checked in the footer button click event and send the values as the content of confirmation dialog.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dialog/dlg-values-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/dialog/dlg-values-cs1" %}