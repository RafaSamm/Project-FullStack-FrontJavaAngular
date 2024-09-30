import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../model/person';

@Component({
  selector: 'person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}


  ngOnInit(): void {
    try {
      this.findAllPerson();
    } catch (error) {
      console.error(error);

    }
  }

  private findAllPerson(): void {
    this.personService.findAllPerson().subscribe((data) => {
      this.persons = data;
    });
  }
}
