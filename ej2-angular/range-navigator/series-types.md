---
layout: post
title: Series types in Angular Range navigator component | Syncfusion
description: Learn here all about Series types in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Series types 
documentation: ug
domainurl: ##DomainURL##
---

# Series types in Angular Range navigator component

To render the data, the Range Selector supports three types of series.

<!-- markdownlint-disable MD036 -->

## Line

<!-- markdownlint-disable MD036 -->

To render a line series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Line** and inject the `LineSeriesService` into the `@NgModule.providers`. By default, the line series is rendered in the Range Selector .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/line-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rangenavigator/series-types/line-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/line-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/line-cs1" %}

## Area

To render an area series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Area** and inject `AreaSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/area-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rangenavigator/series-types/area-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/area-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/area-cs1" %}

## StepLine

To render a Step line series, use series [Type](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel/#type) as **Step Line** and inject `StepLineSeries` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/stepline-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rangenavigator/series-types/stepline-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/stepline-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/stepline-cs1" %}