import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



// import 'rxjs/add/operator/map';


@Component({
  selector: 'ngx-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent  {

  // dtOptions: DataTables.Settings = {};
  // persons: Person[] = [];

  // // We use this trigger because fetching the list of persons can be quite long,
  // // thus we ensure the data is fetched before rendering
  // dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  // ngOnInit(): void {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 2
  //   };
  //   this.httpClient.get<Person[]>('data/data.json')
  //     .subscribe(data => {
  //       this.persons = (data as any).data;
  //       // Calling the DT trigger to manually render the table
  //       this.dtTrigger.next();
  //     });
  // }

  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }


}







