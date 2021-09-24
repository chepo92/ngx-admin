import { Component, OnInit } from '@angular/core';
// import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';


@Component({
  selector: 'ngx-smart-html-table',
  templateUrl: './smart-html-table.component.html',
  styleUrls: ['./smart-html-table.component.scss']
})
export class SmartHtmlTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// export class AppComponent implements AfterViewInit, OnInit {	
// 	@ViewChild('table', { read: TableComponent, static: false }) table: TableComponent;
	
 
// 	ngOnInit(): void {
// 		// onInit code.
// 	}

// 	ngAfterViewInit(): void {
// 		// afterViewInit code.
// 		this.init();
//     }
		
// 	init(): void {
// 		// init code.
	    

// 	}	
// }