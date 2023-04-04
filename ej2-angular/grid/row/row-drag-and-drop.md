---
layout: post
title: Row drag and drop in Angular Grid component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in Angular Grid component

The Grid Row drag and drop allows you to drag grid rows and drop to another Grid or custom component. To enable Row drag and drop in the Grid, set the [`allowRowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowrowdraganddrop) to true. The target component on which the Grid rows to be dropped can be set by using [`targetID`](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid).

To use Row Drag and Drop, you need to inject **RowDDService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/dragndrop-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/dragndrop-cs1" %}

## Drag and drop rows without drag icons

You can hide the drag and drop icon when performing a drag and drop operation within the grid. This can be achieved by setting the [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid) of the [rowDropSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/) as the current Grid’s ID.

By setting the [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid), the Grid will render without a helper icon (for row drag). Now you can customize the drag and drop action. To control the drop action, you can bind the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrop) event of the Grid. In the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrop) event, you can prevent the default action(args.cancel as true) and reorder the rows using [reorderRows](https://ej2.syncfusion.com/angular/documentation/api/grid/#reorderrows) method of the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/dragndrop-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/dragndrop-cs2" %}

> Selection feature must be enabled for row drag and drop.

> Multiple rows can be selected by clicking and dragging inside the grid. For multiple row selection, the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) property must be set to **Multiple**.

## Limitations

* Multiple rows can be drag and drop in the row selections basis.
* Single row is able to drag and drop in same grid without enable the row selection.
* Row drag and drop feature is not having built in support with sorting, filtering, hierarchy grid and grouping features of grid.