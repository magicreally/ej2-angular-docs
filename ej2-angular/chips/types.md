---
layout: post
title: Types in Angular Chips component | Syncfusion
description: Learn here all about Types in Syncfusion Angular Chips component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Types 
documentation: ug
domainurl: ##DomainURL##
---

# Types in Angular Chips component

The ChipList control has the following types.

* Input Chip
* Choice Chip
* Filter Chip
* Action Chip

## Input Chip

Input Chip holds information in compact form. It converts user input into chips.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chips/types/input-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs1" %}

## Choice Chip

Choice Chip allows you to select a single chip from the set of ChipList/ChipCollection. It can be enabled by setting the `selection` property to `Single`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chips/types/input-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs2" %}

## Filter Chip

Filter Chip allows you to select a multiple chip from the set of ChipList/ChipCollection. It can be enabled by setting the `selection` property to `Multiple`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chips/types/input-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs3" %}

## Action Chip

The Action Chip triggers the event like click or delete, which helps doing action based on the event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chips/types/input-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs4" %}

### Deletable Chip

Deletable Chip allows you to delete a chip from ChipList/ChipCollection. It can be enabled by setting the `enableDelete` property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/types/input-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chips/types/input-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/types/input-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/types/input-cs5" %}