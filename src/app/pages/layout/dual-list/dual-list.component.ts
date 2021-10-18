import { fruits } from './../list/fruits-list';
import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngx-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DualListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // keepSorted = true;
	// key: string;
	// display: any;
	filter = true;
	source: Array<string> = fruits; 
	confirmed: string[] = [];
	// userAdd = '';
	// disabled = false;


  // confirmed: Array<string>; 



}
