---
layout: post
title: Exporting hierarchy grid in Angular Grid component | Syncfusion
description: Learn here all about Exporting hierarchy grid in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Exporting hierarchy grid 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting hierarchy grid in Angular Grid component

The grid have an option to export the hierarchy grid to excel document. By default, grid will exports the visible child grids in expanded state. you can change the exporting option by using the **ExcelExportProperties.hierarchyExportMode** property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the visible child grids in expanded state. |
| All      | Exports the all the child grids in expanded state. |
| None     | Exports the child grids in collapse state. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/excel-exporting-cs14/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/excel-exporting-cs14/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/excel-exporting-cs14/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/excel-exporting-cs14" %}

## Limitations

* Microsoft Excel permits up to seven nested levels in outlines. So that in the grid we can able to provide only up to seven nested levels and if it exceeds more than seven levels then the document will be exported without outline option. Please refer the [Microsoft Limitation](https://docs.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations).