
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { SmartHtmlTableComponent } from './smart-html-table/smart-html-table.component';
import { DatatableComponent } from './datatable/datatable.component';

import { ModalEditComponent } from './modal-edit/modal-edit.component';




const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'smart-html-table',
      component: SmartHtmlTableComponent,
    },
    {
      path: 'datatable',
      component: DatatableComponent,
    },    
    {
      path: 'modal',
      component: ModalEditComponent,
    },       
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
];
