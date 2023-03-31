---
layout: post
title: Templates in Angular Auto complete component | Syncfusion
description: Learn here all about Templates in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Templates 
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Auto complete component

The AutoComplete has been provided with several options to customize each list items, group title, header and footer elements.

## Item template

The content of each list item within the AutoComplete can be customized with the help of [`itemTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#itemtemplate) property.

In the following sample, each list item is split into two columns to display relevant data's.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/item-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/item-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/item-template-cs1/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="itemTemplate.html" %}
{% include code-snippet/autocomplete/item-template-cs1/app/itemTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/item-template-cs1" %}

## Group template

The group header title under which appropriate sub-items are categorized can also be customize with the help of [`groupTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/) property. This template is common for both inline and floating group header template.

In the following sample, employees are grouped according to their city.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/group-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/group-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/group-template-cs1/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="groupTemplate.html" %}
{% include code-snippet/autocomplete/group-template-cs1/app/groupTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/group-template-cs1" %}

## Header template

The header element is shown statically at the top of the suggestion list items within the AutoComplete, and any custom element can be placed as a header element using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#headertemplate) property.

In the following sample, the list items and its headers are designed and displayed as two columns similar to multiple columns of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/header-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/header-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/header-template-cs1/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="headerTemplate.html" %}
{% include code-snippet/autocomplete/header-template-cs1/app/headerTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/header-template-cs1" %}

## Footer template

<<<<<<< HEAD
The AutoComplete has options to show a footer element at the bottom of the list items in the suggestion list. Here, you can place any custom element as a footer element using [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#footertemplate) property.
=======
The AutoComplete has options to show a footer element at the bottom of the list items in the suggestion list. Here, you can place any custom element as a footer element using [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#footertemplate) property.
>>>>>>> d32e521be289a767ca5f44734d079a40fef5dc14

In the following sample, footer element displays the total number of list items present in the AutoComplete.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/footer-template-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/footer-template-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/footer-template-cs1/app/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="footerTemplate.html" %}
{% include code-snippet/autocomplete/footer-template-cs1/app/footerTemplate.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/footer-template-cs1" %}

## No records template

The AutoComplete is provided with support to custom design the popup list content when no data is found and no matches found on search with the help of [noRecordsTemplate](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/norecords-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/norecords-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/norecords-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/norecords-cs1" %}

## Action failure template

There is also an option to custom design the popup list content when the data fetch request fails at the remote server. This can be achieved using the
[actionFailureTemplate](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#actionfailuretemplate) property.

In the following sample, when the data fetch request fails, the AutoComplete displays the notification.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/norecords-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/norecords-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/norecords-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/autocomplete/norecords-cs2" %}

## See Also

* [How to achieve filtering](./filtering/)
* [How to group the data using header](./grouping#grouping)
* [How to show the list items with icon](./how-to/icon-support/)