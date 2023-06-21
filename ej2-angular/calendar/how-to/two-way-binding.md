---
layout: post
title: Two way binding in Angular Calendar component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Angular Calendar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Angular Calendar component

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first Calendar component by using property binding and binding the model data using **ngModel** by using model binding to the Calendar component. The **value** of the Calendar will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the Calendar component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/calendar/two-way-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/calendar/two-way-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/two-way-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/two-way-cs1" %}
