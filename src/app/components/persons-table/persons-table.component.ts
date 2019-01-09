import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Person } from './../../person/person.model';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.scss']
})
export class PersonsTableComponent {

  @Input()
  persons: Person[];

  @Output()
  personDeleted = new EventEmitter<string>();

  constructor() { }

  deletePerson(person: string) {
    this.personDeleted.emit(person);
  }
}
