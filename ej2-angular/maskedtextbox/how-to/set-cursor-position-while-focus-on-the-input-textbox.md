---
layout: post
title: Set cursor position while focus on the input textbox in Angular Maskedtextbox component | Syncfusion
description: Learn here all about Set cursor position while focus on the input textbox in Syncfusion Angular Maskedtextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Set cursor position while focus on the input textbox 
documentation: ug
domainurl: ##DomainURL##
---

# Set cursor position while focus on the input textbox in Angular Maskedtextbox component

By default, on focusing the MaskedTextBox the entire mask gets selected. You can customize by using any one of the following methods:

* Setting cursor position at the start of the MaskedTextBox.
* Setting cursor position at the end of the MaskedTextBox.
* Setting cursor at the specified position in the MaskedTextBox.

> The **selectionStart** and **selectionEnd** set to **0** instead of the input element value's length, when we focus on a MaskedTextBox control filled with all mask characters. This is the default behavior of the HTML 5 input element.

Following is an example that demonstrates the above cases to set cursor position in the MaskedTextBox using [`focus`](https://ej2.syncfusion.com/angular/documentation/api/maskedtextbox#focus) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/cursor-position-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maskedtextbox/cursor-position-cs1" %}