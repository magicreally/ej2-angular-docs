---
layout: post
title: Custom data source in Angular Gantt component | Syncfusion
description: Learn here all about Custom data source in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom data source 
documentation: ug
domainurl: ##DomainURL##
---

# Custom data source in Angular Gantt component

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/excel-export/customData-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/excel-export/customData-cs1" %}