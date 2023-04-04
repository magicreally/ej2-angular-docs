---
layout: post
title: Determine whether uploader has file input in Angular Uploader component | Syncfusion
description: Learn here all about Determine whether uploader has file input in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Determine whether uploader has file input 
documentation: ug
domainurl: ##DomainURL##
---

# Determine whether uploader has file input in Angular Uploader component

By setting **required** attribute to uploader input element, you can validate the file input has any value in it.
In the below sample, set required attribute to the uploader input element and showcase the validation failure message using `data-required-message` attribute.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/required-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/uploader/required-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/required-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/uploader/required-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
