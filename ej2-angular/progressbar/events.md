---
layout: post
title: Events in Angular Progress bar component | Syncfusion
description: Learn here all about Events in Syncfusion Angular Progress bar component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Events 
documentation: ug
domainurl: ##DomainURL##
---

# Events in Angular Progress bar component

## Value Change

<!-- markdownlint-disable MD033 -->

**valueChanged** event is triggered when the progress value is changed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/progressbar/customization-cs7" %}

## ProgressCompleted

<!-- markdownlint-disable MD033 -->
**ProgressCompleted** event is triggered when the progress attains the Maximum value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/progressbar/customization-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/progressbar/customization-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/progressbar/customization-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/progressbar/customization-cs8" %}