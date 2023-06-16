---
layout: post
title: Columns in Angular Gantt component | Syncfusion
description: Learn here all about Columns in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Columns 
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Angular Gantt component

The column displays information from a bound data source, and you can edit the values of column to update the task details through TreeGrid. The operations such as sorting, filtering, and searching can be performed based on column definitions. To display a Gantt column, the [`field`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) property should be mapped from the data source to the column.

> If the column [`field`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#field) is not specified in the dataSource, the column values will be empty.

The [`treeColumnIndex`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#treecolumnindex) property is used to define the expander column in the Gantt component to expand and collapse the child rows.

## Defining columns

Using the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columns) property, you can define the columns in Gantt. If the columns are not defined, then the default columns will be rendered based on the mapped data source fields in the [`taskFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) property. Refer to the following code example for defining the columns in Gantt along with their widths.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/default-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/default-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/default-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/default-cs1" %}

## Custom column header

The column header text can be defined using the [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertext) property, and you can customize the column headers using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#headertemplate) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/headertemplate-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/headertemplate-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/headertemplate-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/headertemplate-cs1" %}

## Format

To format the cell values based on a specific culture, use the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property. The Gantt component uses the [`Internationalization`](../../common/internationalization/) library to format `number` and `date` values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/format-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/format-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/format-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/format-cs1" %}

> By default, the number and date values are formatted in `en-US` culture.

### Number formatting

The number or integer values can be formatted using the following format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example the cell value `0.2` is formatted as `20%`. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

### Date formatting

You can format date values either using built-in date format string or custom format string.

For the built-in date format, you can specify the [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#format) property as string (example: `yMd`).

You can also use the custom format string to format the date values. Some of the custom formats and the formatted date values are given in the following table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/dateformat-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/dateformat-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/dateformat-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/dateformat-cs1" %}