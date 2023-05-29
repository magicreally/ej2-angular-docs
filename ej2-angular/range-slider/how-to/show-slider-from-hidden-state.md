---
layout: post
title: Show slider from hidden state in Angular Range slider component | Syncfusion
description: Learn here all about Show slider from hidden state in Syncfusion Angular Range slider component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Show slider from hidden state 
documentation: ug
domainurl: ##DomainURL##
---

# Show slider from hidden state in Angular Range slider component

This section demonstrates how-to render the Slider component in hidden state and make it visible in button click. We can initialize Slider in hidden state by setting the display as none.

In the sample, by clicking on the button, we can make the Slider visible from hidden state, and we must also call the [`refresh`](https://ej2.syncfusion.com/javascript/documentation/api/base/component/#refresh) method of the Slider to render it properly based on its original dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/slider/hidden-slider-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/slider/hidden-slider-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/slider/hidden-slider-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/slider/hidden-slider-cs1" %}
