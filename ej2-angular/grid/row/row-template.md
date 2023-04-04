---
layout: post
title: Row template in Angular Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row template 
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Angular Grid component

The Grid provides a way to use a custom layout for its rows using template feature. The [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) property accepts the template for the row.

In the following example, Employee Information with Employee Photo is presented in the first column and employee details like Name, Address, etc., are presented in the second column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs9" %}

## Row template with formatting

If the [rowTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowtemplate) is used, the value cannot be formatted inside the template using the [columns.format](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-cell-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/custom-cell-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-cell-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/custom-cell-cs10" %}

## Limitations

Row template feature is not compatible with all the features which are available in the grid, and it has limited features support. The features that are incompatible with the row template feature are listed below.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view