---
layout: post
title: Remove parent checkbox in Angular Treeview component | Syncfusion
description: Learn here all about Remove parent checkbox in Syncfusion Angular Treeview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Remove parent checkbox 
documentation: ug
domainurl: ##DomainURL##
---

# Remove parent checkbox in Angular Treeview component

By enabling the `showCheckBox` property, you can render check box before each node of TreeView. However, some application needs to render check box in child nodes alone. In such case, you can remove the check box of the parent node by customizing the CSS.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/remove-parent-checkbox-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/tree-view/remove-parent-checkbox-cs1" %}