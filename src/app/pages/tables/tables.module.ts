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
    ReactiveFormsModule
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    SmartHtmlTableComponent,
    DatatableComponent,
    ModalEditComponent,
    DatatableAngularComponent,
  ],
})
export class TablesModule { }
