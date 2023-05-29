---
layout: post
title: Format in Angular Range slider component | Syncfusion
description: Learn here all about Format in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Format 
documentation: ug
domainurl: ##DomainURL##
---

# Format in Angular Range slider component

The `format` feature used to customize the units of Slider values to desired format. The formatted values will also be applied to the ARIA attributes of the slider. There are two ways of achieving formatting in slider.

* Use the format API of slider which utilizes our [Internationalization](../common/internationalization/) to format values.

* Customize using the events namely `renderingTicks` and `tooltipChange`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-01-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/format-01-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-01-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/slider/format-01-cs1" %}

## Using format API

In this method, we have different predefined formatting styles like Numeric (N), Percentage (P), Currency (C) and `#` specifiers. In this below example, we have formatted the `ticks` and `tooltip` values into percentage.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-02-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/format-02-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-02-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/slider/format-02-cs1" %}

## Using Events

In this method, we will be retrieving the values from the slider events then process them to desired formatted the values.
In this sample we have customized the `ticks` values into weekdays as one formatting and `tooltip` values into day of the week as another formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/format-03-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/format-03-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/format-03-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/slider/format-03-cs1" %}
