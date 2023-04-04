---
layout: post
title: Form support in Angular Combo box component | Syncfusion
description: Learn here all about Form support in Syncfusion Angular Combo box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form support 
documentation: ug
domainurl: ##DomainURL##
---

# Form support in Angular Combo box component

The ComboBox supports both the reactive and template-driven form-building technologies.

## Template-Driven Forms

The template-drive forms uses the `ng` directives in view to handle the forms controls.
To enable the template-driven,  import the FormsModule into corresponding app component.

For more details about template-driven Forms refer to:<https://angular.io/guide/forms#template-driven-forms>.

Mention the `name` attribute to ComboBox element which will be used to identify the
form element. To register an ComboBox element to ngForm,  give the ngModel  to it
so the FormsModule will  automatically detect the ComboBox as a form element. After that, the ComboBox value will be selected based on the ngModel value.

The following example  demonstrates how to achieve a two-way data binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/form-support-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/combobox/form-support-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/form-support-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/combobox/form-support-cs1" %}

## Reactive Forms

The reactive forms uses the reactive model-driven technique to handle form data between component and view, due to that we also call it as the `model-driven` forms. It's listen the form data changes between App component and view also returns the valid states and values of form elements.

For more details about Reactive Forms refer: <https://angular.io/guide/reactive-forms>.

For the reactive forms you should import a ReactiveFormsModule into app module as well as the FormGroup,FormControl should be imported to app component. The FormGroup is used to declare `formGroupName` for the form and the FormControl is used to declare `formControlName` for form controls.
You can declare the formControlName to ComboBox as usual.then,you must create a value object to the FormGroup and each value will be the default value of the form control.

The following example demonstrates  how to use the reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/combobox/reactive-form-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/combobox/reactive-form-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/reactive-form-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/combobox/reactive-form-cs1" %}