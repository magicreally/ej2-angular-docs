---
layout: post
title: Json data binding with datetimepicker in Angular Datetimepicker component | Syncfusion
description: Learn here all about Json data binding with datetimepicker in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Json data binding with datetimepicker 
documentation: ug
domainurl: ##DomainURL##
---

# Json data binding with datetimepicker in Angular Datetimepicker component

In most of the real cases, the model data will be available with JSON format only.
Here we have showcased DateTimePicker component by setting JSON string to value property.
In this JSON, we have used ISO formatted date string which is frequently used date format to get proper date and time value without any misreading.
Also our DateTimePicker component supports the ISO formatted date value, so parsed JSON value can be directly set to DateTimePicker model.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datetimepicker/json-bind-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datetimepicker/json-bind-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/json-bind-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/json-bind-cs1" %}