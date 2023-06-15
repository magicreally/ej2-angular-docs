---
layout: post
title: Json data binding in Angular Datepicker component | Syncfusion
description: Learn here all about Json data binding in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Json data binding 
documentation: ug
domainurl: ##DomainURL##
---

# Json data binding in Angular Datepicker component

In most of the real cases, the model data will be available with JSON format only.
Here we have showcased DatePicker component by setting JSON string to value property.
In this JSON, we have used ISO formatted date string which is frequently used date format to get proper date and time value without any misreading.
Also our DatePicker component supports the ISO formatted date value, so parsed JSON value can be directly set to DatePicker model.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/json-bind-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/json-bind-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/json-bind-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/json-bind-cs1" %}
