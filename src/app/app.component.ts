import { Component, OnInit  } from '@angular/core';

import { Person } from './person/person.model';
import { PersonService } from './services/person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quince-assignment';

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersons().subscribe(persons =>  {
      this.persons = persons;
    });
  }

  deletePerson(person: string) {
    this.persons = this.persons.filter(personToRemove => personToRemove.name !== person);
  }
}
