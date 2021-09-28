


import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';

/* https://github.com/akveo/ng2-smart-table */
import { SmartHtmlTableComponent } from './smart-html-table/smart-html-table.component';
import { DatatableComponent } from './datatable/datatable.component';

/* https://github.com/HTMLElements/smart-webcomponents */
import { TableModule } from 'smart-webcomponents-angular/table';

/* https://l-lin.github.io/angular-datatables/#/welcome */
import { DataTablesModule } from 'angular-datatables';

import { ModalEditComponent } from './modal-edit/modal-edit.component';

/*https://ng-bootstrap.github.io/#/getting-started */
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatatableAngularComponent } from './datatable-angular/datatable-angular.component';
import { CrudMatTableComponent } from './crud-mat-table/crud-mat-table.component';


/* Material CRUD */
// import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {DataService} from './services/data.service';
import { DataService } from './../../services/data.service';

// import { DeleteDialogComponent } from './crud-mat-table/dialogs/delete/delete.dialog.component';
// import { EditDialogComponent } from './crud-mat-table/dialogs/edit/edit.dialog.component';
// import { AddDialogComponent } from './crud-mat-table/dialogs/add/add.dialog.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

// import { DeleteEntryComponent } from './crud-mat-table/dialogs/delete-entry/delete-entry.component';
import { EditDialogComponent } from './crud-mat-table/dialogs/edit-dialog/edit-dialog.component';
import { AddDialogComponent } from './crud-mat-table/dialogs/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from './crud-mat-table/dialogs/delete-dialog/delete-dialog.component';
// import { AddEntryComponent } from './crud-mat-table/add-entry/add-entry.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    TableModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    SmartHtmlTableComponent,
    DatatableComponent,
    ModalEditComponent,
    DatatableAngularComponent,
    CrudMatTableComponent,
    // DeleteEntryComponent,
    EditDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent,
  ],
  // entryComponents: [
  //   AddDialogComponent,
  //   EditDialogComponent,
  //   DeleteDialogComponent
  // ],
  providers: [
    DataService
  ],
  // bootstrap: [AppComponent]  
})
export class TablesModule { }
