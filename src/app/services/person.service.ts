// import { SearchMapComponent } from '../pages/maps/search-map/search-map.component';
import { Injectable } from '@angular/core';

import { Person } from '../models/person';

import data from '../../data/data1.json';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() { }

  getPerson(id: number): Person {
    const persons: Person[] = data.data;
    return persons.find(person => person.id === id);
  }
}
