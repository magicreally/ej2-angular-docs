

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['app/app.component.css'],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations'
  };
}


