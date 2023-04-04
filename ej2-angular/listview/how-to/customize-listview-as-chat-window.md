---
layout: post
title: Customize listview as chat window in Angular Listview component | Syncfusion
description: Learn here all about Customize listview as chat window in Syncfusion Angular Listview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize listview as chat window 
documentation: ug
domainurl: ##DomainURL##
---

# Customize listview as chat window in Angular Listview component

ListView can be customizable as chat window. To achieve that, use ListView [template](https://ej2.syncfusion.com/angular/documentation/api/listview#template) property and [Avatar](https://ej2.syncfusion.com/angular/documentation/avatar/getting-started) component.

    * Listview template property is used to showcase the ListView as chat window.
    * Avatar component is used to design the image of contact person.

Refer the below template code snippet for Template of chat window.

```typescript
        <ng-template #template let-data="">
            <div class="settings" *ngIf="data.chat!='receiver' then senderTemplate else receiverTemplate "></div>
            <ng-template #senderTemplate>
                <div id="content">
                    <div class="name">{{data.text}}</div>
                    <div id="info">{{data.contact}}</div>
                </div>
                <div id="image" *ngIf="data.avatar!=''"><span class="e-avatar img1 e-avatar-circle">{{data.avatar}}</span></div>
                <div id="image" *ngIf="data.avatar==''"><span class="{{data.pic}} img1 e-avatar e-avatar-circle"> </span></div>
            </ng-template>

            <ng-template #receiverTemplate>
                <div id="image2" *ngIf="data.avatar!=''"><span class="e-avatar img2 e-avatar-circle">{{data.avatar}}</span></div>
                <div id="image2" *ngIf="data.avatar==''"><span class="{{data.pic}} img2 e-avatar e-avatar-circle"> </span></div>
                <div id="content1">
                    <div class="name1">{{data.text}}</div>
                    <div id="info1">{{data.contact}}</div>
                </div>
            </ng-template>
        </ng-template>
```

## Chat order in template

In ListView template, we have rendered the list items based on receiver and sender information from dataSource of listview.

## Adding messages to chat window

    * Use textbox to get message from user.
    * Add the textbox message to ListView dataSource using [addItem](https://ej2.syncfusion.com/angular/documentation/api/listview#additem) method.

```typescript

public btnClick() {
    let value = this.textboxEle.nativeElement.value;
    this.listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
    this.textboxEle.nativeElement.value = "";
}

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/chat-window-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/listview/chat-window-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/chat-window-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/listview/chat-window-cs2" %}
