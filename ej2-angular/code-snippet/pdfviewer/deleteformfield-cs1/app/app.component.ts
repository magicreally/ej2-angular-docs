

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  PdfViewerComponent, LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
  ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService, CheckBoxFieldSettings, RadioButtonFieldSettings, InitialFieldSettings, SignatureFieldSettings, TextFieldSettings
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // Specifies the template string for the PDF Viewer component.
  template: `<div class="content-wrapper">
  <ejs-pdfviewer id="pdfViewer" #pdfviewer [serviceUrl]='service' [documentPath]='document' (documentLoad)='documentLoaded($event)' style="height:640px;display:block"></ejs-pdfviewer>
  </div>`,
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService,
NavigationService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService]
})

export class AppComponent implements OnInit {
  @ViewChild('pdfviewer')
  public pdfviewerControl?: PdfViewerComponent;
  public service: string = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'FormDesigner.pdf';

  documentLoaded(e: any): void {
    this.pdfviewerControl?.formDesignerModule.addFormField("Textbox", {name: 'First Name', bounds: { X: 146, Y: 229, Width: 150, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'Last Name',bounds: { X: 530, Y: 229, Width: 150, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('RadioButton', {bounds: { X: 148, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false} as RadioButtonFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('RadioButton', {bounds: { X: 292, Y: 289, Width: 18, Height: 18 },name: 'Gender',isSelected: false} as RadioButtonFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'DOB Month',bounds: { X: 146, Y: 320, Width: 35, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'DOB Date',bounds: { X: 193, Y: 320, Width: 35, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'DOB Year',bounds: { X: 242, Y: 320, Width: 35, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('InitialField', {name: 'Agree',bounds: { X: 148, Y: 408, Width: 200, Height: 43 }} as InitialFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('InitialField', {name: 'Do Not Agree',bounds: { X: 148, Y: 466, Width: 200, Height: 43 }} as InitialFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('CheckBox', {name: 'Text Message',bounds: { X: 56, Y: 664, Width: 20, Height: 20 },isChecked: false} as CheckBoxFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('CheckBox', {name: 'Email',bounds: { X: 242, Y: 664, Width: 20, Height: 20 },isChecked: false} as CheckBoxFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('CheckBox', {name: 'Appointment Reminder',bounds: { X: 56, Y: 740, Width: 20, Height: 20 },isChecked: false} as CheckBoxFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('CheckBox', {name: 'Request for Customerservice',bounds: { X: 56, Y: 778, Width: 20, Height: 20 },isChecked: false} as CheckBoxFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('CheckBox', {name: 'Information Billing',bounds: { X: 290, Y: 740, Width: 20, Height: 20 },isChecked: false} as CheckBoxFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'My Email',bounds: { X: 146, Y: 850, Width: 200, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'My Phone',bounds: { X: 482, Y: 850, Width: 200, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('SignatureField', {name: 'Sign',bounds: { X: 57, Y: 923, Width: 200, Height: 43 }} as SignatureFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'DOS Month',bounds: { X: 386, Y: 923, Width: 35, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'DOS Date',bounds: { X: 434, Y: 923, Width: 35, Height: 24 }} as TextFieldSettings);
    this.pdfviewerControl?.formDesignerModule.addFormField('Textbox', {name: 'DOS Year',bounds: { X: 482, Y: 923, Width: 35, Height: 24 }} as TextFieldSettings);
   this.pdfviewerControl?.formDesignerModule.deleteFormField(this.pdfviewerControl?.formFieldCollections[0]);
  }
  
  ngOnInit(): void {

  }
}




