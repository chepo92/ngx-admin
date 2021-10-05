import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  convertFile = () => {
    const input = <HTMLInputElement>document.getElementById('fileInput');
  
    const reader = new FileReader();
    reader.onload = () => {
      var text: String = <String>reader.result;
      console.log('CSV: ', text.substring(0, 100) + '...');
      
      //convert text to json here
      //var json = this.csvJSON(text);
    };
    reader.readAsText(input.files[0]);
  };

}
