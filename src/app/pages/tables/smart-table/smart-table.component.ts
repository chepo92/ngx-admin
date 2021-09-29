import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})


export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

   /* Local Server data source */
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }


  /* Server data source */
  // source: ServerDataSource;

  // constructor(http: HttpClient) {
  //   this.source = new ServerDataSource(http, { endPoint: 'http://localhost:3000/usuarios' });
  // }  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
